import React from 'react'
import { Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import CardList from './components/CardList';
import SingleView from './components/SingleView';
import productData from './data/full-products';
import CartProvider from './state/CartProvider';


function App() {
  
  return (
    <div className="App">
      <CartProvider>
      <Header />
      
        <Routes>
          <Route path="/" element={<CardList/>} />
          <Route path="/product/:id" element={<SingleView data />} />
        <Route path="/cart" element={<Cart />}/>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
