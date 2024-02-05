const React = require('react');

class Show extends React.Component {
  render() {
    const log = this.props.log
    return (
    <div>
      <h1> Log show page </h1>
        Title: {log.title} <br/>
        Entry: {log.entry} <br/>
        {log.shipIsBroken? 'The ship is broken!' : 'The ship is not broken!'}<br/>
        <a href="/logs">Back to the main page</a>
    </div>
    );
  }
}

module.exports = Show;