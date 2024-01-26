const React = require('react')
class Show extends React.Component {
  render () {
   const student = this.props.student
    return (
      <div>
      <h1> Show student information Page </h1>
         {student.firstName} {" "}{student.lastName}<br></br>
         id: {student.id}<br></br>
         Chemistry: {student.courses.Chemistry}<br></br>
         Biology: {student.courses.Biology}<br></br>
         English: {student.courses.English}<br></br>
         Mathematics: {student.courses.Mathematics}<br></br>

         phone: {student.contact.phone}<br></br>
         email: {student.contact.email}<br></br>
        In state student or out of state student: {student.isInState? 'In state' : 'Out of state' }
      </div>
      );
     }
   }
  module.exports  = Show;