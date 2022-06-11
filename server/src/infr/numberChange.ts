function numberChange(date: string | object): number {
  if(typeof date === "string") {
    const numberDate = date.replace("/","").replace("/","").replace(":","").replace(":","").replace(" ","")
    return Number(numberDate)
  } else {
    const stringDate = date.toLocaleString()
    const numberDate = stringDate.replace("/","").replace("/","").replace(":","").replace(":","").replace(" ","")
    return Number(numberDate)
  }
  
}



export { numberChange }