
import  {getAllStarships} from "../services/SwApi"
import { useState, useEffect } from 'react'
import styled from "styled-components"


export default function StarshipCard (){

    const Container = styled.div`
   
    height: 180px;
    width: 270px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 5px;
   color: white;
    background-color: #293D6F ;
    font-size: 1.8em;
    padding: 5px;
    border-radius: 8px;
    text-align: center;
    
    `
    
   
    const [starships, setStarships] = useState([]);
    useEffect (()=>{
        const fetchData = async () =>{
            try{
                const starshipData = await getAllStarships();
                setStarships(starshipData.results);
                
            } catch (error) {
                console.errore( 'Error fetching starships: ', error);
            }
        };
        fetchData();
       
       
    },[]);
  
    
    return (
      
        <div className="cards">
          {starships.map((starship)=>(
            <Container>
           
                {starship.name}
                </Container>
))}
        </div>
    )
}