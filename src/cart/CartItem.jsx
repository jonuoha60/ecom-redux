import React, { useEffect, useState } from 'react'
import { nigerianMenu } from '../components/Products'
import { useDispatch } from 'react-redux'
import { changeQuantity } from '../store/cart'
import "./css/cartItem.css"

export const CartItem = (props) => {
  const { productId, quantity } = props.data
  const [detail, setDetail] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    const findDetail = nigerianMenu.find(product => product.id === productId)
    setDetail(findDetail || {})
    console.log(quantity)
  }, [productId])

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      dispatch(changeQuantity({
        productId: productId,
        quantity: quantity - 1
      }))
    }
  }

  const handlePlusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity + 1
    }))
  }

  return (
    <div className="cart-item">
      <img src={detail.image} alt={detail.name} className="cart-item-image" />

      <div className="cart-item-details">
        <h3 className="cart-item-name">{detail.name}</h3>
        <p className="cart-item-price">${detail.price}</p>
<p className="cart-item-total">
  Total: ${Number(detail.price * quantity).toFixed(2)}
</p>
      </div>

      <div className="cart-item-quantity">
        <button onClick={handleMinusQuantity} className="qty-btn">-</button>
<span className="qty-value">{quantity}</span>
        <button onClick={handlePlusQuantity} className="qty-btn">+</button>
      </div>
    </div>
  )
}
