import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Stock(props){
    const params = useParams()
    const symbol = params.symbol
  
    const [stock, setStock] = useState([])

    

    function getStock(){
        const stock1 = props.data.filter((item)=>item.symbol===symbol)
        setStock(stock1[0])
    }


    useEffect(() => {
        getStock();
    },[])

 
    return (
        <div>
            <h3>Name: {stock.name}</h3>
            <h3>Price: ${stock.lastPrice}</h3>
        </div>
    )

}