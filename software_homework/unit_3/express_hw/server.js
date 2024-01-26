const express = require('express');
const app = express();
const students = require('./models/students.js');

app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());

  app.get('/students', function(req, res){
    res.render('Index', {students: students });
});        


app.get('/students/:indexOfStudentsArray', function(req, res){
    res.render('Show', { //second param must be an object
        student: students[req.params.indexOfStudentsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});  

app.get('/chemistry', (req, res) => {
    res.send(
        students.map((student, i) => (
            `<ol key=${i}><h3>Name: ${student.firstName} ${student.lastName}</h3><p>Chemistry: ${student.courses.Chemistry}</p></ol>`
        )).join('')
    );
});

app.get('/gender', (req, res) => {
    res.send( students.map((student, i) => (
        `<ol key=${i}><h3>Name: ${student.firstName} ${student.lastName}</h3><p>Gender: ${student.gender}</p></ol>`
    )).join('')
    );
})

app.get('/age', (req, res) => {
    res.send( students.map((student, i) => (
        `<ol key=${i}><h3>Name: ${student.firstName} ${student.lastName}</h3><p>Age: ${student.age}</p></ol>`
    )).join('')
    );
})



app.get('/physics',(req, res) => {
    res.send(
        students.map((student, i) => (
            `<ol key=${i}><h3>Name: ${student.firstName} ${student.lastName}</h3><p>physics: ${student.courses.Physics}</p></ol>`
        )).join('')
    )
})


app.get('/biology',(req, res) => {
    res.send(
        students.map((student, i) => (
            `<ol key=${i}><h3>Name: ${student.firstName} ${student.lastName}</h3><p>Biology: ${student.courses.Biology}</p></ol>`
        )).join('')
    )
})

app.get('/english',(req, res) => {
    res.send(
        students.map((student, i) => (
            `<ol key=${i}><h3>Name: ${student.firstName} ${student.lastName}</h3><p>English: ${student.courses.English}</p></ol>`
        )).join('')
    )
})

app.get('/math',(req, res) => {
    res.send(
        students.map((student, i) => (
            `<ol key=${i}><h3>Name: ${student.firstName} ${student.lastName}</h3><p>Math: ${student.courses.Mathematics}</p></ol>`
        )).join('')
    )
})

app.get('/id',(req, res) => {
    res.send(
        students.map((student, i) => (
            `<ol key=${i}><h3>Name: ${student.firstName} ${student.lastName}</h3><p>Student ID: ${student.id}</p></ol>`
        )).join('')
    )
})





app.listen(3000, () => {
    console.log('listening on port 3000');
});