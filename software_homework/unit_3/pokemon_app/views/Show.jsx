const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class Show extends React.Component {
    
    render(){
        const element = this.props.element
        return(
        <>
        <h1>Gotta Catch 'Em ALL</h1>
        <h2>{element.name[0].toUpperCase()}
                        {element.name.slice(1)}</h2>
        <img src={element.img+'.jpg'}></img>
        <a href='/pokemon'>Back</a>


        <div style={myStyle}>

         

        </div>
        </>
        )
    }
}

module.exports = Show;