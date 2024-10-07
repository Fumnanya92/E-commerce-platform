// src/components/Order.js
import React, { useState } from 'react';
import axios from 'axios';

const Order = () => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/orders', { productId, quantity });
      console.log('Order placed successfully', response.data);
    } catch (error) {
      console.error('Order placement failed', error);
    }
  };

  return (
    <form onSubmit={handleOrder}>
      <h1>Place Order</h1>
      <input
        type="text"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        placeholder="Product ID"
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
        required
      />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default Order;
