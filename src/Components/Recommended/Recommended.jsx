import React from 'react'

import './Recommended.css'
import recommended from '../../data/data_recommended'

import { Link } from 'react-router-dom'

export default function Recommended(){
    

    return (

<div>

<div className="banner">
  <div className="bannerDesR">
        <strong>Recommended Products</strong>
  </div>
  <div className="bannerImgR"></div>
</div>

<div className="displayR">

  <div className="displayProductR">
    <ul>
      {
        recommended().map(
        (item,index)=>{
            return(
              <Link to={`/Product/${item.parameter}`} key={item.id}>
                <li key={index}>
                    <img src={item.img} alt="" className='myImg'/>
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