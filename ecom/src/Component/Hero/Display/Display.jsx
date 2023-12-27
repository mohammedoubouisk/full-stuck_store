import React, { useContext } from "react";
import start_icon from '../../../Component/Assets/star_icon.png'
import star_dull_icon from '../../../Component/Assets/star_dull_icon.png'
import './Display.css'
import { ShopContext } from "../../../Context/ShopContext";

const Display = (props) =>{
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return(

        <>
        <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>            
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Alightweight, usually knitted, pillover shit, close-fitting and with arround neckline and short sleeves, worn as an usershirt or outer 
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category">
                <span>Category :</span>Women, T-shirt, Crop Top
            </p>
            <p className="productdisplay-right-category">
                <span>Category :</span> Modern, Latest
            </p>
        </div>
    </div>
        </>
    )
}
export default Display