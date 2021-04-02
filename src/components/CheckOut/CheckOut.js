import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import "./CheckOut.css";
const CheckOut = () => {
    const { productId } = useParams("");
    const [selectedProduct, setSelectedProduct] = useState({});
    const [orderPlaced, setOrderPlaced] = useState(false);

    useEffect(() => {
        fetch(
            "https://afternoon-basin-49374.herokuapp.com/product/" + productId
        )
            .then((response) => response.json())
            .then((data) => setSelectedProduct(data));
    }, [productId]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleCheckOut = () => {
        const newOrder = {
            ...loggedInUser,
            ...selectedProduct,
            date: new Date(),
        };

        fetch("https://afternoon-basin-49374.herokuapp.com/newOrder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newOrder),
        })
            .then((res) => res.json())
            .then((data) => {
                setOrderPlaced(data);
            });
    };
    return (
        <div className="container">
            {selectedProduct.length === 0 && (
                <Spinner animation="border" variant="warning" />
            )}
            {orderPlaced ? (
                <h2 className="text-warning text-center mt-5">Order placed successfully</h2>
            ) : (
                <div>
                    <div className=" checkout mt-5">
                        <div className="d-flex justify-content-between">
                            <h1>Description</h1>
                            <h1>Weight</h1>
                            <h1>Price</h1>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h3>{selectedProduct.name}</h3>
                            <h3>{selectedProduct.weight}</h3>
                            <h3>${selectedProduct.price}</h3>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h3>Total</h3>
                            <h3>${selectedProduct.price}</h3>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <button
                            onClick={handleCheckOut}
                            className="ml-auto btn btn-primary"
                        >
                            CheckOut
                        </button>
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default CheckOut;
