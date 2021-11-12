const strToUrl = ((str, n)=>{
  let newStr = "";
  for(let i=0; i<n; i++)
  {
    if(str[i]===" ")
    newStr += "%20";
    else
    newStr += str[i];
  }
  console.log (newStr);
})(" john smith ", 11)