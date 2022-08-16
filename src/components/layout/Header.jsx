import "../../styles/header.css"
import React from 'react'
import reactlogo from "../../assets/imgs/react-logo.png"
export default function Header() {
const style={
  backgroundColor:"yellow"
}
let namesite="3wacademy"

  return (
    <div className="header-container">
      <nav className="nav" style={style }>
        <div className="header" style={{flexBasis:'50%'}}>
          <img className="logo-navbar" src={reactlogo} alt="react"></img>
        </div>
        <div id="color">
          {namesite}
        </div>
        <ul className='navbarre' style={{display:"flex",flexBasis:'50%'}}>
          <li>acueille</li>
          <li>métiers</li>
          <li>technologie</li>
          <li>entreprise</li>
          <li>Notre academy</li>
          <li>
            <a href="contact.com" alt="">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
