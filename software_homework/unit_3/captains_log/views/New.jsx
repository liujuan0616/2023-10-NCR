const React = require('react');

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Log Page</h1>
        <form action="/logs" method="POST">
          Title: <input type="text" name="title" required/><br/>
          Entry: <textarea name="entry"></textarea><br/>
          Is Ship Broken: <input type="checkbox" name="shipIsBroken" /><br/>
          <input type="submit" name="" value="Create Log" />
        </form>
      </div>
    )
  }
}

module.exports = New;