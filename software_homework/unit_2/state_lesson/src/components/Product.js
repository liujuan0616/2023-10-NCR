export default function Product({item,cart,setCart}){

    return (
        <li>{item.name} <button onClick={()=>{
            setCart([...cart, item])
        }}>Add to Cart</button></li>
    )

}