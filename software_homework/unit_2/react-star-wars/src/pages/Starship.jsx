
import { useParams } from 'react-router-dom';

export default function Starship ({starships}) {

    const {index} = useParams();
    const starship = starships[index];
    
    return (
        <div className='details' >
            <h2>{starship.name} {' '}Details</h2>
            name: {starship.name}<br/>
            model: {starship.model}<br/>
            manufacturer:{starship.manufacturer}<br/>
            passengers:{starship.passengers}<br/>
            crew:{starship.crew}<br/>
            created:{starship.created.toLocaleString().slice(0,10)}

        </div>
    )
}