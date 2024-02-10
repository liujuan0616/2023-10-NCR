const React = require('react');


class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <div>
        <nav>
          <a href="/logs/new">Create a New Log</a>
        </nav>
        <ul>
          {logs.map((log, i) => {
            return (
              <li key={i}>
                Title: <a href={`/logs/${log._id}`}>
                  {log.title}
                </a>{' '}
                 <br/>
                {log.shipIsBroken
                  ? 'The ship is broken!'
                  : 'The ship is not broken!'
                }
                <br/>
                comments:{log.comments.length}

                <form
                  action={`/logs/${log._id}?_method=DELETE`}
                  method="POST"
                >
                  <input
                    type="submit"
                    value="DELETE"
                  />
                </form>

                <a href={`/logs/${log._id}/edit`}>Edit This Log</a><br/>
                <a href={`/logs/${log._id}`}>Add a comment</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;