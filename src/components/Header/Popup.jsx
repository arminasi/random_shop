import React, { useState } from 'react'
import popupStyle from './popup.module.css'

export default function Popup(props) {

  const [items, setItems] = useState()

  function removeItems() {
    console.log(props);
  }

  return (props.trigger) ? (
    <div className={popupStyle.popup}>
      <div className={popupStyle.popupInner}>
        <button className={popupStyle.closeBtn} onClick={() => props.setTrigger(false)}>close</button>
        <button className={popupStyle.removeBtn} onClick={removeItems}>Remove</button>
          {props.children}
      </div>
    </div>
  ) : "";
}
