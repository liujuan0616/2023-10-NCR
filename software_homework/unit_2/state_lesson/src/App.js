
import './App.css';
import { useState } from 'react';
import products from './productData';
import Category from './components/Category';
import CartItem from './components/CartItem';
import Form from './components/Form';
import Counter from './components/Counter';

const categories = ['tool', 'food', 'clothing']

function App() {
const [cart, setCart] = useState([])
  
const displayCategories = () => {
  let categoryEls = []
  for(let category of categories) {
    let categoryProducts = products.filter(product=>{
      return product.category === category
    })
    categoryEls.push(<Category products={categoryProducts} setCart={setCart} cart={cart} category={category}/>)
  }
  return categoryEls;
}
return(
  <div>
    <h1> Hi There!</h1>
    {
      displayCategories()
    }
    <Category cart={cart} setCart={setCart} />
    <h2>CART:</h2>
    <ul>
      {cart.map(item =>{
        return(
          <CartItem item={item} />
        )
      })}
    </ul>
    <Counter />
      <Form />
  </div>
)

}

export default App;
