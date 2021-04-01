import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./ManageProduct.css";

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5055/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    function deleteEvent(id) {
        console.log("deleteEvent clicked", id);
        fetch(`http://localhost:5055/delete/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => console.log("deleted successfully", result));
    }

    return (
        <div>
            <table className="h4">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Weight</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.weight}</td>
                            <td>{product.price}</td>
                            <td>
                                <FontAwesomeIcon
                                    className="edit text-success"
                                    icon={faEdit}
                                />
                            </td>
                            <td>
                                <FontAwesomeIcon
                                    onClick={() =>
                                        deleteEvent(`${product._id}`)
                                    }
                                    className="delete text-danger"
                                    icon={faTrashAlt}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;
