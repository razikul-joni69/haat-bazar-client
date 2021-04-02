import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Product from "../Product/Product";
const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://afternoon-basin-49374.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="container">
            {products.length === 0 && (
                    <div className="text-center mt-5">
                        <Spinner animation="border" variant="warning" />
                    </div>
                )}
            <div className="row">
                
                {products.map((product) => (
                    <Product key={product._id} event={product}></Product>
                ))}
            </div>
        </div>
    );
};

export default Home;
