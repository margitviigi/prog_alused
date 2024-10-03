const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Kas soovite ise koha valida jah/ei? ', valik =>{
    if (valik == 'jah'){
        rl.question('Kas soovite kohta akna ääres jah/ei?', aken =>{
            if (aken == 'jah'){
                console.log('Valisite aknaäärase koha.')
            } 
            if (aken == 'ei'){
                console.log('Valisite vahekäigupoolse koha.')
            }
            rl.close()

        })
     
    } 
      
    if (valik== 'ei'){
        let loos = Math.ceil(Math.random()*3)
        if (loos == 1){
            console.log('Teile loositi koht akna ääres.')
        } 
        else if (loos !== 1){
            console.log('Teile loositi koht vahekäigu ääres.')
        } 
        rl.close() 
     }

});
      
        
    
     
