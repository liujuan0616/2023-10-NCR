const React = require('react');

class Show extends React.Component {
  render() {
   
    const {log }= this.props
  
    return (
      
    <div>
      <h1> Log show page </h1>
        Title: {log.title} <br/>
        Entry: {log.entry} <br/>
        {log.shipIsBroken? 'The ship is broken!' : 'The ship is not broken!'}<br/>
        Created at: {log.createdAt.toLocaleString()}<br/>
        Updated at: {log.updatedAt.toLocaleString()}<br/>
        {log.comments.length !== 0 ? (
  <ul>
    {log.comments.map((comment) => (
      <li key={comment.id}>
        <strong>Comment title:</strong> {comment.heading}
        <p>{comment.text}</p>
        <strong>Created at:</strong> {comment.createdAt ? comment.createdAt.toLocaleString() : 'N/A'}
        <strong>Updated at:</strong> {comment.updatedAt ? comment.updatedAt.toLocaleString() : 'N/A'}
      </li>
    ))}
  </ul>
) : (
  <p>No comments yet</p>
)}
<form action={`/logs/${log._id}`} method="POST">
                          Title:<input type="text"  name="heading" /><br/>
                          Comment:<textarea name="text" rows="4" ></textarea>
                            <button type="submit">Post Comment</button>
                        </form>

        <a href="/logs">Back to the main page</a>
    </div>
    );
  }
}

module.exports = Show;