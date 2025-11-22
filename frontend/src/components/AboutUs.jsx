import React from 'react'
import toast from 'react-hot-toast'

export default function AboutUs(){
  const handleContact = () => {
    toast.success('Thanks! We will reach out soon 🐾')
  }

  return (
    <section id="about" className="container">
      <div className="about">
        <div style={{flex:1}}>
          <h2>About Us</h2>
          <p style={{marginTop:10}}>
            At <strong>AdopTails</strong>, we believe every tail deserves a happy ending.
            We connect loving families with pets looking for forever homes — simple, safe, and full of heart.
          </p>

          <ul style={{marginTop:12, color:'#444'}}>
            <li>🏠 Pet Adoption</li>
            <li>💉 Health & Vaccination checks</li>
            <li>🐾 Foster Program</li>
            <li>🎓 Pet Education & After-Adoption Support</li>
          </ul>

          <div style={{marginTop:12}}>
            <button onClick={handleContact} style={{padding:'10px 14px', borderRadius:10, background:'#ff7a59', color:'#fff', border:0}}>Contact Us</button>
          </div>
        </div>

        <div style={{width:220}}>
          <div style={{background:'rgba(255,255,255,0.8)', padding:12, borderRadius:12}}>
            <h4>Contact</h4>
            <p style={{fontSize:14}}>📍 123 Pawprint Street</p>
            <p style={{fontSize:14}}>📧 adoptails@gmail.com</p>
            <p style={{fontSize:14}}>📱 +1 (234) 567-8901</p>
          </div>
        </div>
      </div>
    </section>
  )
}
