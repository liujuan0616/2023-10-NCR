const express = require('express');
const app = express();
let bottles;
app.get('/', (req, res) => {
    bottles = 99;
    res.send(`<h2>${bottles} Bottles of beer on the wall</h2>
    <a href="/${bottles-1}">take one down,pass it around.</a>`)

})

app.get('/:number_of_bottles', (req, res) => {
bottles = req.params.number_of_bottles
if(bottles>0){
res.send(`<h2>${bottles} Bottles of beer on the wall</h2>
<a href="/${bottles-1}">take one down,pass it around.</a>`)
}
else if (bottles == 0){
    res.send(`<h2>${bottles} Bottles of beer on the wall</h2>
    <a href="/">start over</a>`)
}


})



app.listen(3000, () => {
    console.log('listening on 3000')
})