import { useState } from "react";
import { createContext } from "react";
import Data from '../data/products.json';


export const ProductsContext=createContext(null);


export const ProductContextProvider=({children})=>{
    const[products,setProducts]=useState(Data);
    const[productInfo,setProductInfo]=useState();
    const[cartItems,setCartItems]=useState([])


const handleAddToCart=(item)=>{
    if(cartItems.includes(item)) return alert('item already added')
      
    
    setCartItems([...cartItems,item])
}


const showProductDetails=(item)=>{
setProductInfo(item)
}


const handleRemoveCartItem=(item)=>{
    setCartItems(cartItems.filter(c=>c.id!==item.id))
}


const handleIncreaseQuantity=(item)=>{
    setCartItems(
        cartItems.map((c) =>
        
          item.id === c.id ? { ...c, quantity:c.quantity+(c.quantity < 5 ? 1 : 0)} : c
        )
      );
}
const handleDecreaseQuantity=(item)=>{
    setCartItems(
        cartItems.map((c) =>
        
          item.id === c.id ? { ...c, quantity:c.quantity-(c.quantity > 1 ? 1 : 0)} : c
        )
      );
}

    return (
        <ProductsContext.Provider value={{handleAddToCart,products,showProductDetails,productInfo,cartItems,handleRemoveCartItem,handleIncreaseQuantity,handleDecreaseQuantity}}>
            {children}
        </ProductsContext.Provider>
    )
}