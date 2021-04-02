import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import ShowOrders from "../ShowOrders/ShowOrders";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(
            "https://afternoon-basin-49374.herokuapp.com/orders?email=" +
                loggedInUser.email
        )
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [loggedInUser]);
    return (
        <div className="container">
            <h1>
                You are logged in as,{" "}
                <span className="text-warning">
                    {loggedInUser.name || loggedInUser.email}.
                </span>{" "}
            </h1>
            <h1>
                You have total{" "}
                <span className="text-warning">{orders.length}</span> orders
            </h1>
            <table className="">
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Weight</th>
                    <th>Price</th>
                    <th>Buying Date</th>
                </tr>
                </thead>
            </table>
            {orders.map((order) => (
                <ShowOrders key={order._id} order={order}></ShowOrders>
            ))}
        </div>
    );
};

export default Orders;
