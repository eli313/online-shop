import React, { useContext } from "react";

import CardMaker from "./CardMaker";
// styles
import "./Cards.css"

// Context
import ContextProvider from "../context/contextProvider";
import {ProductContext} from "../context/contextProvider";
import LoadingPage from "./LoadingPage";

const Cards = (props) => {
    const productContext = useContext(ProductContext)
    return (
        <div className="product-landing container">
            {
                productContext ? productContext.map((singleProduct) => 
                <CardMaker key={singleProduct.id} productData={singleProduct} />)
                : <LoadingPage/>
            }
        </div>
        )
}

export default Cards