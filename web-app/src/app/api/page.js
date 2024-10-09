"use client"
import { useState } from "react";


export default function Page() {
    //product
    //header
    //button request data
    //request data
    //store data (react state)
    //output data
    const[products, setProducts] = useState(null);
    const API_ENDPOINT = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

    async function fetchProducts(){
        const response = await fetch(API_ENDPOINT)
        console.log("😤" + response )
        const data = await response.json();
        console.log("😗" + data )

        setProducts(data);
    }

const ProductList = () => {
    if (products){
        let productsList = [];

        products.forEach((product,index ) => {
            productsList.push(
                <li key={index}>{product.name}</li>
        )
        });

        return (
            <div className="border-4 border-black p-4 mb-4 text-black">
                <ul>{productsList}</ul>
        </div>
        )
    }

    return(
        <div className="border-4 border-black p-4 mb-4 text-black">
            No products right now!
        </div>
    )
}

  return (
    <div className="bg-yellow-300 p-4">
        <header className="border-4 border-black p-4 mb-4 text-black">
            <h1>Welcome to my product page</h1>
            <button 
            className="border-black border-2 p-2"
            onClick={fetchProducts}
            >
                Fetch products
            </button>
        </header>
        <ProductList/>
    </div>
  );
}
