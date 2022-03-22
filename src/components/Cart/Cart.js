import React from 'react';

const Cart = ({cart}) => {
    let quantity=0;
    let totalPrice = 0
    let shiping=0;
    for(const item of cart){
        quantity = quantity + item.quantity;
        totalPrice = totalPrice + (item.price * item.quantity);
        shiping= shiping+ (item.shipping * item.quantity);
    }
    const tax =(totalPrice * 0.1).toFixed(2);
    const grandTotal = totalPrice + shiping + parseFloat(tax);
    return (
        <div>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shiping: ${shiping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Cart;