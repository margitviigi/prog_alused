const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Sisetage enda vanus: ', vanus =>{
    rl.question('Sisetage enda sugu (M või m, N või n): ', sugu =>{
        rl.question('Sisetage enda treeningutüüp (1, 2 või 3): ', treening =>{
        let pulss
        let maxPulss
        let minPulss
        if (sugu == 'm'||sugu == 'M'){
            pulss = 220 - vanus
        } else if (sugu == 'n'||sugu == 'N'){
            pulss = 206- vanus * 0.88
        } else if (sugu !== 'n'||sugu !== 'N'||sugu !== 'm'||sugu !== 'M'){
            console.log('Ei sobi')
        } 
        if(treening == 1){
            minPulss = pulss * 0.5
            maxPulss = pulss * 0.7
        } else if (treening == 2){
            minPulss = pulss * 0.7
            maxPulss = pulss * 0.8

        } else if (treening == 3){
            minPulss = pulss * 0.8
            maxPulss = pulss *0.87
        } 

        console.log(`Pulsisagedus peaks olema vahemikus ${Math.round(minPulss)} kuni ${Math.round(maxPulss)}. `)
        rl.close()
    }) 
    })  
  })