
import './App.css';
import Nav from "./components/Nav"
import { getAllStarships } from "./services/SwApi"
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Starship from "./pages/Starship"
import StarshipCards from "./components/StarshipCards.js"

function App() {

    const [starships, setStarships] = useState([]);
    const [prevPageUrl, setPrevPageUrl] = useState(null)
    const [nextPageUrl, setNextPageUrl] = useState(null)
   
    const fetchData = async (url) => {

        try {
            const starshipData = await getAllStarships(url);
            setStarships(starshipData.results);
            setPrevPageUrl(starshipData.previous);
            setNextPageUrl(starshipData.next)
        } 
        catch (error) {
            console.error('Error fetching starships: ', error);
        }
    };
   
    const BASE_URL = "https://swapi.dev/api/starships"
    useEffect(() => {

        fetchData(BASE_URL);
    },[]);

    function handleChangePage(url) {
        if (url) {
        fetchData(url);}
    }
  
    return (
        <div>
            <Nav />
            <button className='prev-button' onClick={() => handleChangePage(prevPageUrl)} disabled={!prevPageUrl}>Previous</button>
        
        <button className='next-button' onClick={() => handleChangePage(nextPageUrl)} disabled={!nextPageUrl}>Next</button>
            <div className="cards">

                <Routes>
                    <Route path="starships/:index" element={<Starship starships={starships} />} />
                </Routes>
                <StarshipCards starships={starships}/>

            </div>
        </div>
    )
}

export default App;
