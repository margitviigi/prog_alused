const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
rl.question('Sisestage oma nimi: ', nimi =>{
    rl.question('Sisestage lubatud kiirus: ', lubatud =>{
        rl.question('Sisestage tegelik kiiirus: ', tegelik =>{
            let trahv = (tegelik - lubatud) * 3
            trahv = Math.min(trahv, 190)
            console.log(`${nimi}, kiiruse ületamise eest on Teie trahv ${trahv} eurot.`)
            rl.close()
        }) 
    })
})