import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import RequreAuth from './components/RequreAtuh/RequreAuth';
import Shippment from './components/Shippment/Shippment';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/order' element={<Order />} />
        <Route path='/inventory' element={
          <RequreAuth>
            <Inventory />
          </RequreAuth>
        } />
        <Route path='/shipment' element={
          <RequreAuth>
            <Shippment />
          </RequreAuth>} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
