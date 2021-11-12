const urlString = (string) => {
  const stringArray = string.split("");
  const newArray = [];
  stringArray.forEach(a => {
    if (a === " ") {
    newArray.push("%20");
    } else {
      newArray.push(a);
    }
  });
  return newArray.join("");
};

urlString("Hi My Name Is Nick")

//works