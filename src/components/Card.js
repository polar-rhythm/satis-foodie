import React from 'react'
import icecream from '../images/sheri-silver-5A0O12BIsjY-unsplash.jpg';
import pizza from '../images/ivan-torres-MQUqbmszGGM-unsplash.jpg';
import '../styles/Card.css'

const Card = () => {

  const list = [
    {
      title: 'pizza',
      img: pizza,
    },
    {
      title: 'ice cream',
      img: icecream,
    },
  ]

  return (
    <div>
      {list.map((item) => (
        <main className='main'>
          <div className='mainContent'>
            <div>
              <h1>{item.title}</h1>
              <div className='toppins'>
                <p>Pepperoni</p>
                <input type="checkbox" name="" id="" />
              </div>
              <button>Place Order</button>
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