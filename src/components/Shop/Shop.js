import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    const [cart,setCart]= useState([])
    const addToCart=(product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <section className='shop-container'>
            <div className="products-container">
            {
                products.map(product=><Product key={product.id} product={product} addToCart={addToCart}></Product>)
            }
            </div>
            <div className="cart-container">
                <div>
                    <h2>Order Review</h2>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: ${cart.reduce((previous,current)=> previous+ current.price ,0)}</p>
                    <p>Total Shiping: ${cart.reduce((previous,current)=> previous+ current.shipping ,0)}</p>
                </div>
            </div>
        </section>
    );
};

export default Shop;