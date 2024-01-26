const React = require('react');

class Index extends React.Component {
  render() {
      const { students } = this.props;
      return (
              <div>
                  <h1>Students Index Page</h1>
                  <ul>
                      {students.map((student, i) => {
                          return (
                              <li>
                                 
                                  <a href={`/students/${i}`}>
                                      {student.firstName} {' '} {student.lastName}
                                  </a>{' '}
                                 <br></br>
                                  {student.isInState
                                      ? `In State`
                                      : `Out of state`}
                                  <br />
                              </li>
                          );
                      })}
                  </ul>
              </div>
      );
  }
}
module.exports = Index;