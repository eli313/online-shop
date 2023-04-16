import React , {createContext, useReducer} from "react";

const initialState = {
    selectedItems : [],
    totalItems : 0,
    totalPrice : 0,
    checkout : false
}

const cartReducer = (state , action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity : 1,
                })
            }
            return {
                ...state ,
                selectedItems : [...state.selectedItems]
            }
        case "REMOVE_ITEM" :
            const newSelected = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state ,
                selectedItems : [...newSelected]
            }
        case "INCREASE_ITEM" :
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].quantity++;
            return {
                ...state
            }
        case "DECREASE_ITEM" :
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity--;
            return {
                ...state
            }
        case "CLEAR" :
            return {
                selectedItems : [],
                totalItems : 0,
                totalPrice : 0,
                checkout : false
            }
        default:
            return state
    }
}
export const HandlersContext = createContext()
const HandlersProvider = ({children}) => {
    const [state , dispatch] = useReducer(cartReducer , initialState)
    return ( 
        <HandlersContext.Provider value={{state , dispatch}}>
            {children}
        </HandlersContext.Provider>
     );
}
 
export default HandlersProvider;