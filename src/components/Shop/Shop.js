import React, { useEffect, useState } from 'react';
import { addToDb, getStorage } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    //load data from api
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    
    //display local storage data to ui
    useEffect(()=>{
        const allSavedPd= [];
        const cartDb= getStorage()
            
        for(const id in cartDb){   
            const savedPd = products.find(product=> product.id===id)
            if(savedPd){
                const quantity= cartDb[id];
                savedPd["quantity"]=quantity;
                allSavedPd.push(savedPd)
            }
        }
        setCart(allSavedPd)
    
    },[products])
    //add to cart state & set local storage 
    const [cart,setCart]= useState([])
    const addToCart=(product)=>{
        const exist = cart.find(pd=> pd.id=== product.id);
        if(!exist){
            product.quantity= 1;
            setCart([...cart,product])
        }else{
            exist.quantity+=1; 
            const rest = cart.filter(pd=> pd.id!==product.id);
            setCart([...rest,exist])
        }
        addToDb(product.id)
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
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </section>
    );
};

export default Shop;