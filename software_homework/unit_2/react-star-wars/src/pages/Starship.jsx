
import { useParams } from 'react-router-dom';

export default function Starship ({starships}) {

    const {index} = useParams();

    
    try{ 
        const starship = starships[index];
        return (
            <div className='details' >
                <h3>{starship.name} {' '}Details</h3>
                name: {starship.name}<br/>
                model: {starship.model}<br/>
                manufacturer:{starship.manufacturer}<br/>
                passengers:{starship.passengers}<br/>
                crew:{starship.crew}<br/>
                created:{starship.created.toLocaleString().slice(0,10)}
    
            </div>
        )
    }
   
    catch (error) {
        // Handle errors, e.g., when index is out of bounds or starships is not an array
        console.error('Error:', error);
        return (
          <div className='details'>
            <p>Error loading starship details</p>
          </div>
        );
      }
    
    
}