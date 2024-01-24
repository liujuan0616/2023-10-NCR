const express = require('express')

const app = express()

app.get('/greeting', function(req, res){
    res.send('Hello, stranger')
})

app.get('/greeting/:name', (req, res) => {
    console.log(req.params)
    res.send('Wow, great to see you ' + req.params.name + '!')
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const tip = Math.floor(req.params.total * req.params.tipPercentage / 100);
    res.send(`<h2>It will be nice to pay $ ${tip} for tips.<h2>`)

})

const resArray = ["It is certain", 
"It is decidedly so", 
"Without a doubt", 
"Yes definitely",
"You may rely on it", 
"As I see it yes", 
"Most likely", 
"Outlook good",
"Yes", 
"Signs point to yes", 
"Reply hazy try again", 
"Ask again later",
"Better not tell you now", 
"Cannot predict now",
 "Concentrate and ask again",
 "Don't count on it",
  "My reply is no",
   "My sources say no",
   "Outlook not so good",
    "Very doubtful"]

    app.get('/magic/:question', (req, res) => {
        const randomNum = Math.floor(Math.random()*resArray.length)
        res.send(`<h1>${req.params.question}?</h1> <h1>${resArray[randomNum]}</h1>`)
    })




app.listen(3002, () => {
    console.log('listening on port 3002')
  })
