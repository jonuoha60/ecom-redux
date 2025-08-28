import React, { useRef, useState } from 'react';
import { Header } from './Header'
import "./css/home.css"
import { Story } from './Story'
import { Menu } from './Menu'
import { Footer } from './Footer'
import { Reviews } from './Reviews'
import { nigerianMenu } from './Products'


export const HomePage = () => {
    const menuRef = useRef(null)
    const aboutRef = useRef(null)
    const contactRef = useRef(null)
    const cartRef = useRef(null)
    const [openCart, setOpenCart] = useState(false)
    const scrollToMenu = () => {
        if(menuRef.current){
            menuRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }
    const scrollToAbout = () => {
        if(aboutRef.current){
            aboutRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }
    const scrollToContact = () => {
        if(contactRef.current){
            contactRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }
    const scrollToCart = () => {
        if(cartRef.current){
            cartRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }
  return (
    <div>
      <div ref={cartRef}>
      <Header setOpenCart={setOpenCart} openCart={openCart} scrollToAbout={scrollToAbout} scrollToContact={scrollToContact}/>
      </div>
      <section className='banner-img'>
        <div className="banner-content">
          <h1>CHINWE KITCHEN</h1>
          <p>Authentic flavors, freshly prepared meals, and a taste of home in every bite.</p>
          <button onClick={scrollToMenu} className="order-btn">Order Now</button>
        </div>
      </section>
      <div ref={menuRef}>
  <Menu setOpenCart={setOpenCart} scrollToCart={scrollToCart} data={nigerianMenu} />
</div>
<div ref={aboutRef}>
<Story />
</div>
      
      
      <Reviews />
      <div ref={contactRef}>
 <Footer />
      </div>
     
    </div>
  )
}
