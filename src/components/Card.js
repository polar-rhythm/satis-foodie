import React from 'react'
import { useNavigate } from 'react-router-dom'
import icecream from '../images/sheri-silver-5A0O12BIsjY-unsplash.jpg';
import pizza from '../images/ivan-torres-MQUqbmszGGM-unsplash.jpg';
import '../styles/Card.css'

const Card = (prop) => {

  let navigate =  useNavigate () ;

  const getInputValue =(event) => {
    const toppinValue = event.target.value;

    prop.onChange(toppinValue)
  }

  const list = [
    {
      title: 'pizza $10',
      img: pizza,
      toppings: "pepperoni",
      toppings2: "tomato",
    },
    {
      title: 'ice cream $10',
      img: icecream,
      toppings: "sprinkles",
      toppings2: "cherry",
    },
  ]

  return (
    <div>
      {list.map((item) => (
        <main className='main'>
          <div className='mainContent'>
            <div className='sidebox'>
              <h1 value={1} id="titleH">{item.title}<input type="Radio" key={1} value={10} onChange={getInputValue} /></h1>
              <div className='toppins'>
                <p>{item.toppings} $2</p>
                <input type="checkbox" name="" id="in" key={2}  value={2} onChange={getInputValue} />
                <p>{item.toppings2} $1</p>
                <input type="checkbox" name="" id="in" key={3}  value={1} onChange={getInputValue} />
              </div>
              <button onClick={() => { navigate("/Order") }}>Place Order</button>
            </div>
            <div>
              <img src={item.img} className='cardimg' />
            </div>
          </div>

        </main>
      ))}
    </div>
  )
}

export default Card;