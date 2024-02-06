const { SchemaTypeOptions } = require('mongoose');
const React = require('react');

//

class Edit extends React.Component {
  render() {
    const flight = this.props.flight
    const pad = num => num < 10 ? '0' + num : num;
    let formattedArrivalDate = flight.departs.getFullYear() + '-' +
      pad(flight.departs.getMonth() + 1) + '-' +
      pad(flight.departs.getDate()) + 'T' +
      pad(flight.departs.getHours()) + ':' +
      pad(flight.departs.getMinutes());

      const airports =["AUS", "DAL", "LAX", "SAN", "SEA"]
      const arivalAirports = airports.filter(airport=>airport!=flight.airport)

    return (
       <>
       <nav>
        <a href="/flights" style={{ textDecoration: 'none', color: 'navy', fontSize: '24px', marginRight: '20px' }}>All Flights</a>
        
          <a href="/flights/new" style={{ textDecoration: 'none', color: '#4CAF50', fontSize: '18px', marginRight: '20px' }}>ADD FLIGHT</a>
        </nav>
        <form action={`/flights/${flight._id}?_method=PUT`} method="POST">
          Destination Airport:  <select name="airport0" >

          {arivalAirports.map(option=> <option  key={option} value={option}>{option}</option>)}

           </select><br/><br/>
          Arrival Time: <input
            type="datetime-local"
            name="arrival"
            defaultValue={formattedArrivalDate}
          /><br />
          
          <input
            type="submit"
            value="Add Destination"
          />
        </form>
        </>
      
    )
  }
}

module.exports = Edit;