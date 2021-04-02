import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import './Product.css'
const Event = ({ event: product }) => {
    const history = useHistory();
    const handleBuy = (id) => {
        history.push(`/checkout/${id}`);
    };
    return (
        <div className="col-sm-6 col-md-4 col-xl-3 col-xl-2 mt-3">
            <Card style={{ width: "" }}>
                <Card.Img className="card-img" variant="top" src={product.imageURL} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <div className="d-flex justify-content-between">
                        <h2 className="text-success">${product.price}</h2>
                        <Button
                            onClick={() => handleBuy(product._id)}
                            className="btn-small"
                            variant="primary"
                        >
                            Buy Now
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Event;
