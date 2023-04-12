import React, { createContext, useContext, useEffect, useState } from "react";

import CardMaker from "./CardMaker";
// styles
// import "./Cards.css"

// Context
import ContextProvider from "../context/contextProvider";
import {ProductContext} from "../context/contextProvider";

const Cards = (props) => {
    const productContext = useContext(ProductContext)
    return (
        <div>
            {
                productContext.map((singleProduct) => 
                    <CardMaker key={singleProduct.id} productData={singleProduct} />)
            }
        </div>
        )
}

export default Cards