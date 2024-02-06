const React = require('react');

class Show extends React.Component {
  render() {
    const flight = this.props.flight
   
    return (
    <div>
      <nav>
        <a href="/flights" style={{ textDecoration: 'none', color: 'navy', fontSize: '24px', marginRight: '20px' }}>All Flights</a>
        
          <a href="/flights/new" style={{ textDecoration: 'none', color: '#4CAF50', fontSize: '18px', marginRight: '20px' }}>ADD FLIGHT</a>
        </nav>
      <h1> Airline Details </h1>
         {flight.airline} {flight.flightNo} depart time: {flight.departs.toLocaleString().slice(0, 23)}{' '}depart airport: {flight.airport}
        <br/> 
        {flight.destinations.length > 0 ? (
    <div>
      <h2>Destination Details:</h2>
      <p>Destination Airport: {flight.destinations[0].airport0}</p>
      <p>Arrival time: {flight.destinations[0].arrival.toLocaleString().slice(0, 23)}</p>
    </div>
  ) : (<a href={`/flights/${flight._id}/edit`}>Add Destination Details</a>)}
  

    </div>
    );
  }
}

module.exports = Show;