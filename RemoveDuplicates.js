let myArray = [7, 9, "hi", 12, "hi", 7, 53];
let output = [...new Set(myArray)];
console.log(output);


function removeDuplicates(a) {
let b = [];
let c = a.length;
for( let i=0; i<c; i++) {
  if(b.indexOf(a[i])=== -1){
    b.push(a[i]);
  }
}
return b;
}
removeDuplicates([7, 9, "hi", 12, "hi", 7, 53])
//works