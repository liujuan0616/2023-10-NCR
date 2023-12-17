import Product from "./Product"

function Category({cart,setCart,products,category}){
    return(
        <>
          <h3>{category}</h3>
          <ul>
            {products?.map(item=>{
                return(
                    <Product item={item} setCart={setCart} cart={cart} />
                )
            })}
          </ul>

        </>
    )

}





export default Category