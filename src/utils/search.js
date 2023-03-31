export const fuseSearch = ({list, keywords})=>{
  const keywordsList = keywords.split("");
  
  return list.filter((item)=>{
    const str =  item.name + item.address + item.phone + ' ';
    if(keywordsList.every((key)=>{
      return str.includes(key);
    })){
      return true
    }
    return false
  })
}
