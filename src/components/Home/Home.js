import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5055/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <Product key={product._id} event={product}></Product>
                ))}
            </div>
        </div>
    );
};

export default Home;
