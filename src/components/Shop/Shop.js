import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/Useproducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts();

    const [cart, setCart] = useCart(products);

    const addToCart = (product) => {
        const exist = cart.find(pd => pd.id === product.id);
        if (!exist) {
            product.quantity = 1;
            setCart([...cart, product])
        } else {
            exist.quantity += 1;
            const rest = cart.filter(pd => pd.id !== product.id);
            setCart([...rest, exist])
        }
        addToDb(product.id)
    }
    return (
        <section className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div >
                <Cart cart={cart}>
                    <Link className='review-order' to={'/order'}>Review Order</Link>
                </Cart>
            </div>
        </section>
    );
};

export default Shop;