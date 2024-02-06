const React = require('react');
const Flight = require('../models/Flight');

class New extends React.Component {
  render() {
    let departsDateObj = new Date(this.props.departsDate);
    let localDate = new Date(departsDateObj.getTime() - (departsDateObj.getTimezoneOffset() * 60000))
    // Format to YYYY-MM-DDTHH:MM
    // Ensuring to pad single digits where necessary
    const pad = num => num < 10 ? '0' + num : num;
    let formattedDate = localDate.getFullYear() + '-' +
      pad(localDate.getMonth() + 1) + '-' +
      pad(localDate.getDate()) + 'T' +
      pad(localDate.getHours()) + ':' +
      pad(localDate.getMinutes());
  
    

    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <nav>
        <a href="/flights" style={{ textDecoration: 'none', color: 'navy', fontSize: '24px', marginRight: '20px' }}>All Flights</a>
        </nav>
        <h1 style={{ color: 'navy' }}>Add Flight</h1>
        <form action="/flights" method="POST" style={{ maxWidth: '300px', margin: '0 auto' }}>
          Airline: <input type="text" name="airline" style={{ width: '100%', padding: '5px', marginBottom: '10px' }}/><br/><br />
          Flight No: <input type="number" name="flightNo" style={{ width: '100%', padding: '5px', marginBottom: '10px' }}/><br/><br/>
          Departure: <input type="datetime-local" name="departs" defaultValue={formattedDate} style={{ width: '100%', padding: '5px', marginBottom: '10px' }}/><br/><br/>
          
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