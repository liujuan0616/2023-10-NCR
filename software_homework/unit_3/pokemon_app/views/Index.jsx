const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class MyFirstComponent extends React.Component {
    render(){
        return(
        <>
        <h1>See All The Pokemon!</h1>
        <div style={myStyle}>My First React Component!</div>
        </>
        )
    }
}

module.exports = MyFirstComponent;