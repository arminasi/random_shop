import React from 'react'
import navStyle from './nav.module.css'
import Popup from './Popup'
import { useState } from 'react'

export default function Nav(props) {

  const [buttonPopUp, setButtonPopUp] = useState(false)

  return (
    <>
    <div className={navStyle.nav}>
      <h1>Logo</h1>
      <button onClick={() => setButtonPopUp(true)}>basket</button>
    </div>
    <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
      { props.basketData.map(item => {
        return (
          <div className={navStyle.miniItemBox}>
            <h5>{item.title}</h5>
            <h5>{item.price}$</h5>
            <div><img className={navStyle.basketImg} src={item.image}></img></div>
          </div>
        )
      }) }
    </Popup>
    </>
  )
}
