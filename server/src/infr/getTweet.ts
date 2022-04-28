const map: Record<string,string> = {
  koko: "hello",
  jeje: "こんばんわ",
  nana: "おはよう",
  wowo: "おやすみ"
}

export async function getTweet(id: string): Promise<string | null> {
  return  Promise.resolve(map[id] || null)
}

getTweet("wowo")