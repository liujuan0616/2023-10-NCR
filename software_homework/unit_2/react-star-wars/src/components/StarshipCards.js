
import { getAllStarships } from "../services/SwApi"
import { useState, useEffect } from 'react'
import styled from "styled-components"
import { Route, Routes } from 'react-router-dom';
import Starship from "../pages/Starship"
import { Link } from 'react-router-dom';



export default function StarshipCards() {

    const Container = styled.div`
   
    height: 100px;
    width: 220px;
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
    useEffect(() => {
        const fetchData = async () => {
            try {
                const starshipData = await getAllStarships();
                setStarships(starshipData.results);

            } catch (error) {
                console.error('Error fetching starships: ', error);
            }
        };
        fetchData();


    }, []);


    return (

        <div className="cards">
            <Routes>
                <Route path="/starships/:index" element={<Starship starships={starships} />} />
            </Routes>
            {starships.map((starship, i) => (
                <Link key={i} to={`/starships/${i}/`}>
                    <Container>
                        {starship.name}
                    </Container>
                </Link>
            ))}

        </div>

    )
}