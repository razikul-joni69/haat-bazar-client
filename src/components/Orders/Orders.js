// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./Orders.css";
// const Orders = () => {
//     const { productId } = useParams("");
//     const [selectedProduct, setSelectedProduct] = useState({});

//     useEffect(() => {
//         fetch("http://localhost:5055/product/" + productId)
//             .then((response) => response.json())
//             .then((data) => setSelectedProduct(data));
//     }, [productId]);
//     return (
//         <div className="container">
//             <div className=" checkout mt-5">
//                 <div className="d-flex justify-content-between">
//                     <h1>Description</h1>
//                     <h1>Weight</h1>
//                     <h1>Price</h1>
//                 </div>
//                 <hr />
//                 <div className="d-flex justify-content-between">
//                     <h3>{selectedProduct.name}</h3>
//                     <h3>{selectedProduct.weight}</h3>
//                     <h3>${selectedProduct.price}</h3>
//                 </div>
//                 <hr />
//                 <div className="d-flex justify-content-between">
//                     <h3>Total</h3>
//                     <h3>${selectedProduct.price}</h3>
//                 </div>
//             </div>
//             <div className="d-flex justify-content-end mt-3">
//                 <button className="ml-auto btn btn-primary">CheckOut</button>
//             </div>
//         </div>
//     );
// };

// export default Orders;



import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ShowOrders from '../ShowOrders/ShowOrders';

const Orders = () => {

    const [orders, setOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(orders);

    useEffect(() => {
        fetch('http://localhost:5055/orders?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div className="container">
            {/* {
                orders && <h3>You are logged in as {orders[0].email}. You have total {orders.length} orders</h3>
            } */}
            {/* <h3>Hellow mr. {orders[0].name || orders[0].email}, you have total {orders.length} orders </h3>
            <table className="h4">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Weight</th>
                        <th>Price</th>

                    </tr>
                    {orders.map((product) => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.weight}</td>
                            <td>{product.price}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table> */}
            {
                orders.map(order => <ShowOrders order={order}></ShowOrders>)
            }
        </div>
    );
};

export default Orders;