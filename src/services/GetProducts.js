import React from "react";

// const Products = () => {
//         const products = [
//             {
//                 id : 1,
//                 title : "Iphone 14 pro max",
//                 discription: "",
//                 price : 1399,
//                 ram : 8,
//                 resolution : 1080,
//                 storage : 256,
//                 screenSize : 6.55,
//                 camera : 12
//             },
//             {
//                 id : 2,
//                 title : "Galaxy S23 Ultra",
//                 discription: "",
//                 price : 1399,
//                 ram : 12,
//                 resolution : 1440,
//                 storage : 1024,
//                 screenSize : 6.55,
//                 camera : 108,
//             },
//             {
//                 id : 3,
//                 title : "OnePlus 11pro",
//                 discription: "",
//                 price : 1299,
//                 ram : 12,
//                 resolution : 1440,
//                 storage : 1024,
//                 screenSize : 6.8,
//                 camera : 64,
//             }
//         ]
//         console.log(products);
//         return products
// }
// export default Products;
 
import axios from "axios";
const BASE_URL = "https://fakestoreapi.com"

const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`)
    return response.data
}
 
export default getProducts;