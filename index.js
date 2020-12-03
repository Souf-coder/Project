function mult(f) {
  let n = 0
  for (let n=0;n<=12;n++) {
    this[n.toString(10)]=f*n;
}}

let myTable = {}
for (let x=0;x<=20;x++) myTable[x.toString(10)] = new mult(x)
console.table(myTable)
