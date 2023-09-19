// import { createContext, useState } from "react";
// import {data} from '../data/data'
// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//     let cart = {}
//     for (let i=1; i< data.length +1; i++){
//         cart[i] = 0
//     }
//     return cart;
// } 

// export const ShopContextProvider = (prop) => {
//     const [cartItems,setCartItems]=useState(getDefaultCart());

//     const addToCart = (id) => {
//         setCartItems((prev) > ({...prev, [id]:}))
//     }
//     return (
//         <ShopContext.Provider>
//          {prop.childen}
//         </ShopContext.Provider>
//     )
// }