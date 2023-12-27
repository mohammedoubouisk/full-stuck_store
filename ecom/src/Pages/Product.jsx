import React from "react";
import Display from '../Component/Hero/Display/Display'
import { useParams } from "react-router-dom";
import Breadcrums from '../Component/Breadcrums/Breadcrums';
// import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import allp from '../Component/Assets/all_product'
import { DescriptionBox } from "../Component/DescriptionBox/DescriptionBox";
import { RelatedProduct } from "../Component/RelatedProduct/RelatedProduct";

const Product =()=>{
    const {productId} = useParams();
    const product = allp.find((e)=> e.id === Number(productId))
    console.log({product})
    return(
        <div>
            <Breadcrums product={product}/>
            <Display product={product}/>
            <DescriptionBox/>
            <RelatedProduct/>
        </div>
        
    )
}
export default Product