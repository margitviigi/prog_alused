const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
rl.question('Sisestage kirja suurus (MB): ', suurus =>{
rl.question('Sisestage kirja pealkiri: ', pealkiri =>{
rl.question('Kas kirjale on lisatud manus jah/ei: ', manus =>{
    if ((suurus >= 1 && manus == 'jah') || (pealkiri == '')){
     console.log('See kiri on spämm.')
    }
    else{
     console.log('See kiri ei ole spämm.')
    }
        rl.close
      process.exit(0);
    })
 })
})  ;