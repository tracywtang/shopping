import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footerL">
            <span>Developed by &nbsp;</span>
            <a href="/">JULIUS GUEVARRA</a>
        </div>
        <div className="footerM">
            <div className="footerMImg"></div>
            <div className="footerMText">© 2024</div>
        </div>
        <div className="footerR">
            <span>Fork this project &nbsp;</span>
            <a href="/">HERE</a>
        </div>
      </div>
    </div>
  )
}
