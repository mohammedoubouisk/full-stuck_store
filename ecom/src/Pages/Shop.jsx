import React from "react";
import Hero from "../Component/Hero/Hero";
import Populer from "../Component/Propuler/Populer";
import Offers from "../Component/Offers/Offers";
import NewCollections from "../Component/NewCollections/NewCollections";
import NewsLetter from "../Component/NewsLetter/NewsLetter";

const Shop =()=>{
    return(
        <div>
            <Hero/>
            <Populer/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}
export default Shop