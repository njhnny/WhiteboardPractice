var myArray = [7, 9, "hi", 12, "hi", 7, 53];
let unique = [...new Set(myArray)];
console.log(unique);

//works

let a = [7, 9, "hi", 12, "hi", 7, 53];
let b = [];
let len = a.length;
for( let i=0; i<len; i++) {
  if(b.indexOf(a[i])=== -1){
    b.push(a[i]);
  }
}

console.log(b);

//works