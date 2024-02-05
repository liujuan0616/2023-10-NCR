const React = require('react');
const Flight = require('../models/Flight');

class New extends React.Component {
  render() {
    
    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h1 style={{ color: 'navy' }}>Add Flight</h1>
        <form action="/flights" method="POST" style={{ maxWidth: '300px', margin: '0 auto' }}>
          Airline: <input type="text" name="airline" style={{ width: '100%', padding: '5px', marginBottom: '10px' }}/><br/><br />
          Flight No: <input type="number" name="flightNo" style={{ width: '100%', padding: '5px', marginBottom: '10px' }}/><br/><br/>
          Departure: <input type="datetime-local" name="departs" defaultValue={this.props.departsDate} style={{ width: '100%', padding: '5px', marginBottom: '10px' }}/><br/><br/>
          
          <select name="airport"  defaultValue={this.props.departAirport} style={{ width: '100%', padding: '5px', marginBottom: '10px' }} >
          <option value="AUS">AUS</option>
          <option value="DAL">DAL</option>
          <option value="LAX">LAX</option>
          <option value="SAN">SAN</option>
          <option value="SEA">SEA</option>

            {this.props.departAirport}</select><br/><br/>

           <input type="submit" name="" value="Create Flight" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}/>
        </form>
     </div>
    )
  }
}

module.exports = New;