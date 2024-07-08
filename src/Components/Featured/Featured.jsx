import React from 'react'
import './Featured.css'

import featuredPage from '../../data/data_featured_page'
import { Link } from 'react-router-dom'

export default function Featured() {
  return (

<div>

        <div className="banner">
          <div className="bannerDesF">
                <strong>Featured Products</strong>
          </div>
          <div className="bannerImgF"></div>
        </div>

        <div className="displayF">

          <div className="displayProductF">
            <ul>
              {
                featuredPage().map(
                (item,index)=>{
                    return(
                        <Link to ={`/Product/${item.parameter}`} key={item.id}>
                          <li key={index}>
                            <img src={item.img} alt="" />
                            <h1>{item.name}</h1>
                            <h2>{item.brand}</h2>
                          </li>
                        </Link>

                          )
                              }
                              )
                }
            </ul>
          </div>
        </div> 
</div>


  )
}
