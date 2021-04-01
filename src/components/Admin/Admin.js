import {
    faPencilAlt,
    faPlus,
    faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import "./Admin.css";
const Admin = () => {
    const [showItem, setShowItem] = useState(true);
    const toggle = (value) => {
        setShowItem(value);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 sidebar">
                    <h4 onClick={() => toggle(false)}>
                        <Link to="/admin" className="text-white">
                            <FontAwesomeIcon className="mr-2" icon={faTasks} />
                            Manage products
                        </Link>
                    </h4>
                    <h4 onClick={() => toggle(true)}>
                        <Link to="/admin" className="text-white">
                            <FontAwesomeIcon className="mr-2" icon={faPlus} />
                            Add product
                        </Link>
                    </h4>
                    <h4 onClick={() => toggle(false)}>
                        <Link to="/admin" className="text-white">
                            <FontAwesomeIcon
                                className="mr-2"
                                icon={faPencilAlt}
                            />
                            Edit product
                        </Link>
                    </h4>
                </div>
                <div className="col-md-8">
                    {showItem ? (
                        <AddProduct> </AddProduct>
                    ) : (
                        <ManageProduct></ManageProduct>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;
