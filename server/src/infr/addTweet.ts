export async function addTweet (id: string, message: string): Promise<string[]>{
  let idAndMessageArray: string[] = [];
  idAndMessageArray.push(id,message)
  return Promise.resolve(idAndMessageArray)
}