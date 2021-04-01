import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
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
                {products.length === 0 && (
                    <div className="text-center">
                        <Spinner animation="border" variant="warning" />
                    </div>
                )}
                {products.map((product) => (
                    <Product key={product._id} event={product}></Product>
                ))}
            </div>
        </div>
    );
};

export default Home;
