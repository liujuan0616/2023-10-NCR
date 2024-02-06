const React = require('react');

class Index extends React.Component {
  render() {
    const { flights } = this.props;
  
    let currentTime = new Date(this.props.dtime.getTime() - (this.props.dtime.getTimezoneOffset() * 60000))
   

    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <nav>
        <a href="/flights" style={{ textDecoration: 'none', color: 'navy', fontSize: '24px', marginRight: '20px' }}>All Flights</a>
        
          <a href="/flights/new" style={{ textDecoration: 'none', color: '#4CAF50', fontSize: '18px', marginRight: '20px' }}>ADD FLIGHT</a>
        </nav>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {flights.map((flight, i) => {

            return (
              <li key={i} style={{ borderBottom: '1px solid #ddd', padding: '10px 0', textAlign: 'left' }}>

                <span style={{ fontWeight: 'bold' }}>{flight.airline}</span> {" "}

                {flight.flightNo} {' '}Depart time: {" "}
                {
  currentTime.getTime() > flight.departs.getTime() ? (
    <span style={{color:"red"}}>{flight.departs.toLocaleString().slice(0, 23)}</span>
  ) : (
    <span>{flight.departs.toLocaleString().slice(0, 23)}</span>
  )
}{"  "}

                <a href={`/flights/${flight._id}`}>Details</a><br/>
                <form
                  action={`/flights/${flight._id}?_method=DELETE`}
                  method="POST"
                >
                  <input
                    type="submit"
                    value="DELETE"
                  />
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;