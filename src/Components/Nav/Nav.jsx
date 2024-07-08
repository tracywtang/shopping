import React from 'react'
import './Nav.css'
import logo from './logo.png'
import searchIcon from './magnifying-glass-solid.svg'
import cart from './bag-shopping-solid.svg'

import {Link} from 'react-router-dom'
import AnchorTemporaryDrawer from '../AnchorTemporaryDrawer'

export default function Nav() {
  return (
    <>
      <div>
        <div className="nav">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="navMenu">
            <li>
              <Link to='/Home'>Home</Link>
            </li>
            <li>
              <Link to ='/Shop'>Shop</Link>
            </li>
            <li>
              <Link to ='/Featured'>Featured</Link>
            </li>
            <li>
              <Link to ='/Recommended'>Recommended</Link>
            </li>
          </div>
          <div className="searchBar">
            <div className="searchImg">
              <img src={searchIcon} alt="" />
            </div>
            <label className="searchText">
              <input type="text" value='Search Product'/>
            </label>
          </div>
          <div className="navRight">
            <div className="cart">
              {/* <a href=""> */}
                {/* <img src={cart} alt="" /> */}
                <AnchorTemporaryDrawer></AnchorTemporaryDrawer>
              {/* </a> */}
            </div>
            <div className="SignSec">
              <a href="/">
                <button>Sign Up</button>
              </a>
              <a href="/">
                <button>Sign In</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

