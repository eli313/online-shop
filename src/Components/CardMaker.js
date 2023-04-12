import React from "react";
import iphone from "./assets/images/iphone-14-pro-loses-fastest-download-crown.webp";
import "./CardMaker.css"

// Helper
import Shortner from "../helpers/shortner";

const CardMaker = ({productData}) => {
    const {title , price , details , image} = productData
    return ( 
        <div className="card2">
            <div>
                <div className="image-container">
                    <img src={image}/>
                </div>
                <div className="card-details">
                    <h1>{Shortner(title)}</h1>
                    <span>{price}</span>
                    <p>details</p>
                </div>
                <div className="card-buttons">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
     );
}
 
export default CardMaker;