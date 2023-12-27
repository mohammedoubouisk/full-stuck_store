import React, { createContext, useState } from 'react';
import all_product from '../Component/Assets/star_icon.png';
import dataPro from '../Component/Assets/all_product';
export const ShopContext = createContext(null);

const getDefaultCard=()=>{
    let cart = {};
    for (let index = 0 ; index<all_product.length +1 ; index++) {
        cart[index] = 0;
        
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setcartItems] = useState(getDefaultCard())

    const addToCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

    }

    const removeFromCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in dataPro){
            
            if(cartItems[item]>0){
                let info = dataPro.find((pr)=>pr.id===Number(item))
                totalAmount += info.new_price * cartItems[item];
            } 
        }
        return totalAmount   
    }

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem +=cartItems[item];
            }
        }
        return totalItem;
    }



    const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    console.log(getTotalCartItems())
    // console.log(cartItems)

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}
export default ShopContextProvider;
