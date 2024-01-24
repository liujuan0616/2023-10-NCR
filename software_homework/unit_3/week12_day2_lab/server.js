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




app.listen(3001, () => {
    console.log('listening on port 3001')
  })
