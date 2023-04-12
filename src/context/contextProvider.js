import React , {createContext , useState , useEffect} from "react";


// API
import Products from "../services/Products";
export const ProductContext = createContext()

const ContextProvider = (props) => {
    const [products , setProducts] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            setProducts(await Products());
        }
        fetchApi()
    },[])

    return ( 
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
     );
}
 
export default ContextProvider;