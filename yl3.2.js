const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
rl.question('Mitu ringi jänes jooksis?', vastus =>{
let summa=0
for(let ring=1; ring <= vastus; ring++){
    if(ring % 2 == 0) {
    summa=summa+ring
    } 
} 
console.log(`Porgandite koguarv ${summa}`,)
rl.close() 
} )