import React from 'react'
import { useState } from 'react'
import cardStyle from './card.module.css'

export default function Card(props) {
  
  const[count, setCount] = useState(0);

  function getCurrentItem(){
    props.apiData.forEach(item => {
      if (item.id === props.item.id) {
        props.basketTools.setBasketData([...props.basketTools.basketData, item]);
      }
    });
  }


  return (
    <div className={cardStyle.card}>
      <p>{props.item.title}</p>
      <img src={props.item.image} alt={props.item.image} className={cardStyle.image}></img>
      <h2>{props.item.price} $</h2>
      <div className={cardStyle.buttonContainer}>
      </div>
      <button onClick={getCurrentItem}>Add to basket</button>
    </div>
  )
}
