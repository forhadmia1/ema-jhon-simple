import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [pages, setPages] = useState(0)
    const [activePage, setActivePage] = useState(0)
    const [cart, setCart] = useCart();
    const [size, setSize] = useState(10)

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${activePage}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [activePage, size])

    useEffect(() => {
        fetch('http://localhost:5000/productcount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / size)
                setPages(pages)
            })
    }, [size])

    const addToCart = (product) => {
        const exist = cart.find(pd => pd._id === product._id);
        if (!exist) {
            product.quantity = 1;
            setCart([...cart, product])
        } else {
            exist.quantity += 1;
            const rest = cart.filter(pd => pd._id !== product._id);
            setCart([...rest, exist])
        }
        addToDb(product._id)
    }
    return (
        <section className='shop-container'>
            <div>
                <div className="products-container">
                    {
                        products.map(product => <Product key={product._id} product={product} addToCart={addToCart}></Product>)
                    }
                </div>
                <div className='pagination'>
                    {
                        [...Array(pages).keys()].map(number => <button
                            key={number}
                            onClick={() => setActivePage(number)}
                            className={number === activePage ? 'selected' : ''}
                        >{number + 1}</button>)
                    }
                    <select onChange={(e) => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div>
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