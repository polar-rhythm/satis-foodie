import React from 'react'
import Nav from './Nav';
import '../styles/Order.css';

const Order = () => {

  const getData = (data) => {
    // console.log([...data]);
      
    // Iterate over the property names:
    for (const getData of Object.keys(data)) {
      const capital = data[Price];
      console.log(getData, price);
    }
  };

  return (
    <div>
      <Nav />
      <div className='displayOrder'>
        <div className='upp'>
          <p>price </p>
          <p>toppings</p>
          <h2>total</h2>
        </div>
        <div className='down'>
          <button onClick={getData}>puchase</button>
        </div>
      </div>
    </div>
  )
}

export default Order;