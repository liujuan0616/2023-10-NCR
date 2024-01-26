const express = require ('express');
const app = express();
const port = 3000;



app.get('/fibonnaci/:num', (req, res) => {

const num = Number(req.params.num)
let fibonnaciArr = [0,1]
while(fibonnaciArr[fibonnaciArr.length-2]+fibonnaciArr[fibonnaciArr.length-1]<=num)
{
    fibonnaciArr.push(fibonnaciArr[fibonnaciArr.length-2]+fibonnaciArr[fibonnaciArr.length-1])
}
    
    if(fibonnaciArr.includes(num)){
        res.send("Very good. It is Fibonacci.")
    }
    else{
        res.send("I can tell this is not a fibonacci number.")
    }
     
})


app.listen(port, () => {
    console.log('listening on port ', port)
  })