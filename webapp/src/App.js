// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Order from './components/Order';

function App() {
  return (
    <div className="App">
      <ProductList />
      <Login />
      <Order />
    </div>
  );
}

export default App;
