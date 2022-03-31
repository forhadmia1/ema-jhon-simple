import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Orderd.css'

const Orderd = ({item,deleteItem}) => {
    const {img,name,price,quantity,id}= item;
    return (
        <div className='order-item'>
            <img src={img} alt="" />
            <div className='order-info'>
                <div>
                <p>{name}</p>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                </div>
                <div className='icon-container'>
                    <FontAwesomeIcon onClick={()=>deleteItem(id)} className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default Orderd;