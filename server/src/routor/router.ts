import { createServer, IncomingMessage, ServerResponse } from 'http';
import { validateString } from '@/routor/validator';

type RequestValue = string | number | boolean;
type callback = (
    response: RouterResponse,
    option: {
        params: Record<string, string>;
        query: Record<string, string>;
        body: Record<string, RequestValue>;
    },
) => void;
type handlers = { get?: callback; post?: callback; put?: callback; delete?: callback };

interface RouterResponse {
    fail: (status: number) => void;
    success: (data: unknown) => void;
    source: {
        req: IncomingMessage;
        res: ServerResponse;
    };
}

const head = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
export class Router {
    #route: Record<string, handlers>;
    constructor() {
        this.#route = {};
    }
    addRoute(path: string, methods: handlers) {
        this.#route[path] = methods;
    }
    listen(port: number) {
        const server = createServer(async (req, res) => {
            let data = {};
            req.on('data', (chunk) => {
                data = JSON.parse(chunk);
            }).on('end', () => {
                const { url: _url, method } = req;

                if (!_url || !method || ['get', 'post', 'put', 'delete'].indexOf(method.toLowerCase()) === -1) {
                    res.writeHead(400, head);
                    res.end();
                    return;
                }
                const [url, _query] = _url?.split('?');
                const route = Object.keys(this.#route).reduce(
                    (accum, path) => matchRoute(path, url) ?? accum,
                    null as null | { path: string; params: Record<string, string> },
                );
                if (!route) {
                    res.writeHead(404, head);
                    res.end();
                    return;
                }
                const handler = this.#route[route.path][method.toLowerCase() as 'get' | 'post' | 'put' | 'delete'];
                if (handler) {
                    try {
                        const query = _query
                            ? _query.split('&').reduce((accum, item) => {
                                  const [key, value] = item.split('=');
                                  accum[key] = value;
                                  return accum;
                              }, {} as Record<string, string>)
                            : {};
                        handler(
                            {
                                fail: (status) => {
                                    res.writeHead(status, {
                                        'Content-Type': 'application/json',
                                        'Access-Control-Allow-Origin': '*',
                                    });
                                    res.end();
                                },
                                success: (data) => {
                                    res.writeHead(200, {
                                        'Content-Type': 'application/json',
                                        'Access-Control-Allow-Origin': '*',
                                    });
                                    res.end(JSON.stringify(data));
                                },
                                source: { req, res },
                            },
                            {
                                query,
                                params: route.params,
                                body: data,
                            },
                        );
                    } catch (e) {
                        res.writeHead(500, head);
                        res.end(String(e));
                    }
                } else {
                    res.writeHead(400, head);
                    res.end();
                }
            });
        });
        server.listen(port);
    }
}

function matchRoute(path: string, toPath: string): { path: string; params: Record<string, string> } | null {
    const pathSplit = path.split('/');
    const toPathSplit = toPath.split('/');
    const params = toPathSplit.reduce((accum, toPathName, index) => {
        const pathName = pathSplit[index];
        if (!accum) return null;
        if (pathName.startsWith(':')) {
            accum[pathName.slice(1)] = toPathSplit[index];
        } else if (!validateString(toPathSplit[index])) return accum;
        return accum;
    }, {} as Record<string, string> | null);
    if (params) {
        return { path, params };
    } else {
        return null;
    }
}
