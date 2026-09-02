import React from 'react'
import { AppContext } from '../App'
import { useContext } from 'react'
export default function Cart() {
  const {cart,setCart,currUser} = useContext(AppContext)
  return (
    <div>
      <h2>My Cart</h2>
      <ol>
      {cart && cart.map(item=>(
        <li>{item.name}-{item.price}-{item.quantity}-{item.price*item.quantity}</li>
      ))}
      </ol>
    </div>
  )
}
