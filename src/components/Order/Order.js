import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/Useproducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Orderd from '../Ordered/Orderd';

const Order = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products);

    const deleteItem = id => {
        const rest = cart.filter(item => item.id !== id)
        setCart(rest)
        removeFromDb(id)
    }


    return (
        <div style={{ marginTop: '150px' }}>
            {
                cart.map(item => <Orderd item={item} key={item.id} deleteItem={deleteItem}></Orderd>)
            }

            <Cart cart={cart}>
                <Link className='review-order' to={'/shipment'}>Procced Checkout</Link>
            </Cart>
        </div>
    );
};

export default Order;