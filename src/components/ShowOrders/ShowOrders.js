import React from 'react';

const ShowOrders = (props) => {
    // console.log(props.order);
    const {name, price, weight, date, email} = props.order;
    return (
        <div>
            
            <div className="d-flex justify-content-between">
                <h4 className="text-center">{name}</h4>
                <h4>{weight}</h4>
                <h4>{price}</h4>
                <h4>{new Date(date).toDateString('dd/mm/yyyy')}</h4>
            </div>
        </div>
    );
};

export default ShowOrders;