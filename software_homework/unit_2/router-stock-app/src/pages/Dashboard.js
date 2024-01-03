import { Link } from 'react-router-dom';

export default function Dashboard (props){
return (
    <div className='stocks'>
        {props.data.map((stock,i) => {
            const name=stock.name
            const symbol=stock.symbol
          
            return(

                <Link key={i} to={`/stocks/${symbol}`}>
                    <li>{name}</li>
                </Link>
            )
        })}
    </div>
)
}