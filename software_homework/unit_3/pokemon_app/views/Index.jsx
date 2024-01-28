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

        <div style={myStyle}>

         <ul>
            {pokemon.map((element,i)=>{
                
                return (

                    <li key={i}><a href={`/pokemon/${i}`}>{element.name[0].toUpperCase()}
                        {element.name.slice(1,-1)}</a>
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