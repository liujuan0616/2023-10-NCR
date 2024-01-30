const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class MyFirstComponent extends React.Component {
    render(){
        const{ pokemon} = this.props
        return(
        <>
        <h1>See All The Pokemon!</h1>
        <nav>
          <a href="/pokemon/new">Create a New Pokemon</a>
        </nav>

        <div style={myStyle}>

         <ul>
            {pokemon.map((singlePokemon,i)=>{
                
                return (

                    <li key={i}><a href={`/pokemon/${singlePokemon._id}`}>{singlePokemon.name[0].toUpperCase()}
                        {singlePokemon.name.slice(1)}</a>
                    </li>
                )
            })}
         </ul>

        </div>
        </>
        )
    }
}

module.exports = MyFirstComponent;