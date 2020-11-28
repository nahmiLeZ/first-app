import React from 'react'
import logo from "./shopping-cart-solid.svg";

function Checkout (props) {
  const counter = props.datebase.filter((item) => {
    return item.bought
  })
  return (
    <div className="checkout">
      <img src={logo} alt= 'logotype'/>
      <span className="counter">{counter.length}</span>
    </div>
  )
}

export default Checkout