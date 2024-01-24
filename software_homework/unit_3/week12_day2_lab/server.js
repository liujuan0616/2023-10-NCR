const express = require('express')

const app = express()

app.get('/greeting', function(req, res){
    res.send('Hello, stranger')
})

app.get('/greeting/:name', (req, res) => {
    console.log(req.params)
    res.send('Wow, great to see you ' + req.params.name + '!')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
  })
