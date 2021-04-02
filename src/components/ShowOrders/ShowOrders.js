import React from "react";
import "./ShowOrder.css";

const ShowOrders = (props) => {
    const { name, price, weight, date, email } = props.order;
    return (
        <div>
            <div className="d-flex justify-content-between">
                <table className="">
                    <tbody>
                    <tr>
                        <td>
                            <h4>{name}</h4>
                        </td>

                        <td>
                            <h4>{weight}</h4>
                        </td>

                        <td>
                            <h4>{price}</h4>
                        </td>
                        <td>
                            <h4>
                                {new Date(date).toDateString("dd/mm/yyyy/time")}
                            </h4>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowOrders;
