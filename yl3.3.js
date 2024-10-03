const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
rl.question('Täringute arv: ', taringud =>{
 let vise=1
 while(vise<=taringud){
    console.log(Math.ceil(Math.random()*6))
    vise++ 
}
rl.close() 
})

 

