const React = require('react');

class Index extends React.Component {
  render() {
    const { flights } = this.props;
    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h1 style={{ color: 'navy' }}>ALL FLIGHTS</h1>
        <nav>
          <a href="/flights/new" style={{ textDecoration: 'none', color: '#4CAF50', fontSize: '18px', marginRight: '20px' }}>ADD FLIGHT</a>
        </nav>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {flights.map((flight, i) => {
            
            return (
              <li key={i} style={{ borderBottom: '1px solid #ddd', padding: '10px 0', textAlign: 'left' }}>
                
                <span style={{ fontWeight: 'bold' }}>{flight.airline}</span> {" "}
                
                {flight.flightNo} {' '}
               
                {flight.departs.toISOString().slice(0, 10)}{' '}{flight.departs.toISOString().slice(11, 16)} <br/>
                <a href={`/flights/${flight._id}`}>details</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;