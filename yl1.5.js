const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
rl.question('Sisestage ainepunktide arv: ', ainepunktideArv =>{
    rl.question('Sisestage nädalate arv: ', nädalateArv =>{
        let tunnid = Math.round(ainepunktideArv * 26 / nädalateArv)
        console.log(tunnid)
        rl.close()
    })
})