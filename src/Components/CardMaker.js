import React, { useContext } from "react";
import "./CardMaker.css"

// Helper
import Shortner from "../helpers/shortner";

// Handlers
import { HandlersContext } from "../context/HandlersProvider";

const CardMaker = ({productData}) => {
    const {title , price , details , image} = productData
    const {state , dispatch} = useContext(HandlersContext);
    
    // Functions
    const isInCart = (state , id) => {
        const result = !!state.selectedItems.find(item => item.id === id)
        return result
    }
    const quantityCounter = (state , id) => {
        const index = state.selectedItems.findIndex( item => item.id === id );
        if (index == -1) {
            return false
        } else {
            return state.selectedItems[index].quantity
        }
    }
    return ( 
        <div className="card2">
            <div>
                <div className="image-container">
                    <img src={image}/>
                </div>
                <div className="card-details">
                    <h1>{Shortner(title)}</h1>
                    <span>{price}$</span>
                    <p>{details}</p>
                </div>
                <div className="card-buttons">
                    {
                        isInCart(state , productData.id) ? <button onClick={() => dispatch({type : "INCREASE_ITEM" , payload : productData})}>+</button> 
                        : <button onClick={() => dispatch({type : "ADD_ITEM" , payload : productData})}>Add to cart</button>
                    }
                    {quantityCounter(state , productData.id) && <span>{quantityCounter(state , productData.id)}</span>}
                    {quantityCounter(state , productData.id) === 1 && <button onClick={() => dispatch({type : "REMOVE_ITEM" , payload : productData})}>Remove</button>}                    
                    {quantityCounter(state , productData.id) > 1 && <button onClick={() => dispatch({type : "DECREASE_ITEM" , payload : productData})}>-</button>}                    
                </div>
            </div>
        </div>
     );
}
 
export default CardMaker;