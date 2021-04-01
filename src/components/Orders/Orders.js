import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Orders = () => {
    const { productId } = useParams('');
    const [selectedProduct, setSelectedProduct] = useState({});

    useEffect(() => {
        fetch('http://localhost:5055/product/'+productId)
        .then((response) => response.json())
        .then(data => setSelectedProduct(data))
    },[productId])
    return (
        <div className="container">
            <h1>This is {selectedProduct.name}</h1>
            
        </div>
    );
};

export default Orders;