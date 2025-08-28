import React, { useState } from 'react'
import "./css/menu.css"
import "./css/cart.css"
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../store/cart'

export const Menu = (props) => {
  const [popupItem, setPopupItem] = useState(null)
  const dispatch = useDispatch()

  const carts = useSelector(store => store.cart.items)
  console.log(carts)

  const items = props.data.map(({ id, name, description, price, image }) => ({
  id,
  name,
  description,
  price,
  image
}));


  const handleAddToCart = () => {
    if (!popupItem) return; // safeguard
    dispatch(addToCart({
      productId: popupItem.id,   // only add the selected item
      quantity: 1,
    }));
    setPopupItem(null); // close popup after adding
    props.scrollToCart()
    props.setOpenCart(true)
  };

  const renderMenu = () => (
    <div className="menu-grid">
      
       
        {items.map((item, index) => (
        <div className="menu-item" key={index}>
          <img src={item.image} alt={item.name} className="menu-img" />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <span className="price">${item.price}</span>
          <button className="check-btn" onClick={() => setPopupItem(() => {
            return item
          })}>Check More</button>
        </div>
      ))}
      
     
    </div>
  )

  return (
    <div className="cuisines">
      <section className="menu-section">
        <h1>Top Nigerian Menu Items</h1>
        <p className="subtext">Eat. Drink. Relax.</p>
        {renderMenu()}
                <h1>Native Igbo Menu</h1>

      </section>

     

      {popupItem && (
        <div className="popup-overlay" onClick={() => setPopupItem(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={popupItem.image} alt={popupItem.name} />
            <h2>{popupItem.name}</h2>
            <p>{popupItem.description}</p>
            <span className="price">{popupItem.price}</span>
            <div className='add-to-cart'>
            <button className="close-btn" onClick={handleAddToCart}>Add to Cart</button>
            <button className="close-btn" onClick={() => setPopupItem(null)}>Close</button>
         </div>
          </div>
        </div>
      )}
    </div>
  )
}
