const { SchemaTypeOptions } = require('mongoose');
const React = require('react');

//

class Edit extends React.Component {
  render() {
    const flight = this.props.flight
    return (
       
        <form action={`/flights/${flight._id}?_method=PUT`} method="POST">
          Destination Airport:  <select name="airport0" >

          <option value="AUS">AUS</option>
          <option value="DAL">DAL</option>
          <option value="LAX">LAX</option>
          <option value="SAN">SAN</option>
          <option value="SEA">SEA</option>

           </select><br/><br/>
          Arrival Time: <input
            type="datetime-local"
            name="arrival"
            defaultValue={flight.departs.toISOString().slice(0,16)}
          /><br />
          
          <input
            type="submit"
            value="Add Destination"
          />
        </form>
      
    )
  }
}

module.exports = Edit;