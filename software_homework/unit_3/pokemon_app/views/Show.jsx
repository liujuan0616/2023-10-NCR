const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class Show extends React.Component {
    
    render(){
        const singlePokemon = this.props.singlePokemon
        return(
        <>
        <h1>Gotta Catch 'Em ALL</h1>
        <h2>{singlePokemon.name[0].toUpperCase()}
                        {singlePokemon.name.slice(1)}</h2>
        <img src={singlePokemon.img+'.jpg'}></img>
        <a href='/pokemon'>Back</a>


        <div style={myStyle}>

         

        </div>
        </>
        )
    }
}

module.exports = Show;