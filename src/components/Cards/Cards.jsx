import React from 'react'
import Card from './Card/Card'
import cardsStyle from './cards.module.css'

export default function Cards(props) {

  return (
    <div className={cardsStyle.cards}>
      {props.data.map((el) => {
        return <Card key={el.id} apiData={props.data} basketTools={props.basketTools} item={el}/>
      })}
    </div>
  )
}
