import React from 'react'
import './Home.css'

import featured from '../../data/data_featured'
import recommended from '../../data/data_recommended'

import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div>
        <div className="banner">
          <div className="bannerDes">
              <h1>
                <strong>See</strong>
                &nbsp;everything with&nbsp;
                <strong>Clarity</strong>
              </h1>
              <p>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</p>
              <a href="/">
                  <button>
                      <Link to ='/Shop' className="buttonText">
                        Shop Now
                      </Link>
                      <div className="buttonImg"></div>
                  </button>
              </a>
          </div>
          <div className="bannerImg"></div>
        </div>

        <div className="display">
          <div className="displayHeader">
            <div className="DHLeft">Featured Products</div>
            <div className="DHRight">
              <a href="/">See All</a>
            </div>
          </div>
          <div className="displayProduct">
            <ul>
              {
                featured().map(
                (item,index)=>{
                    return(
                      <Link to={`/Product/${item.parameter}`} key={item.id}>
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

        <div className="display">
            <div className="displayHeader">
                <div className="DHLeft">Recommended Products</div>
                <div className="DHRight">
                    <a href="/">See All</a>
                </div>
            </div>
            <div className="displayProduct">
                <ul>
                {
                    recommended().map(
                        (item,index)=>{
                            return(
                              <Link to={`/Product/${item.parameter}`} key={item.id}>
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
      
    </>
  
  )

}

