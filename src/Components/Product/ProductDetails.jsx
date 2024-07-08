import React from 'react'
import './ProductDetails.css'
import recommended from '../../data/data_recommended'

import { useParams} from 'react-router-dom'
import { getData } from '../../data/data_origin'
import { useNavigate } from 'react-router-dom'

import { addToCart } from '../Action/action'
// import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
import { colors } from '@mui/material'

import { useEffect } from 'react'


export default function ProductDetails() {
    let params=useParams()
    let currentDatas=getData(params.parameter)
    let navigate=useNavigate()
    let clicks=()=>{
        navigate('/Shop')
    }

    // let products = useSelector((state) => {
    //   return state.products
    // })
    let dispatch = useDispatch()
    let addTocarts1 = (parameter,selectSize,selectColor) => {
      dispatch(addToCart(parameter,selectSize,selectColor))
    }

    let [selectSize,setSelectSize]=useState()
    let handleSelectSize=(event)=>{setSelectSize(event.target.value)}
    // let [selectSize,setSelectSize]=useState()

    let [selectColor,setSelectColor]= useState()

    useEffect(()=>{
      window.scrollTo(0,0)
    },
    []
    )
  
  return (
    <div>
        <div className="productViewWrapper">
          <div className="productView">
            <div className='backToShop' onClick={clicks}>Back to shop</div>
            <div className="productModal">
              <div className="productModalL"></div>
              <div className="productModalM">
                <img src={currentDatas.img} alt="" />
              </div>
              <div className="productModalR">
                <span className='rBrand'>{currentDatas.brand}</span>
                <div className="rName">{currentDatas.name}</div>
                <span className='rDesc'>{currentDatas.desc}</span>
  
                <div className="rLine"></div>
                <div className="rSizeSel">
                  <span>Lens Width and Frame Size</span>
                  <select name="" id="" className="rSizeSelBox" onChange={handleSelectSize}  >

                    {
                      currentDatas.size.map((curSize,index)=>{
                        return(
                          <option key={index} value={curSize} 
                          >{curSize}mm</option>
                        )
                      }
                      )
                    }
                  </select>
                    {/* <select name="" id="" className="rSizeSelBox"  onChange={handleSelectSize} >
                      <option value="" hidden>--Select Size--</option>
                      <option value="28mm" >28mm</option>
                      <option value="36mm">36mm</option>
                      <option value="42mm">42mm</option>
                    </select> */}
                  
                </div>
                <div className="rColor">
                  <span>Choose Color</span>
                  <div className="rColorBox">

                      
                          {currentDatas.color.map((curColor,index)=>{
                            return (
                              <button 
                                key={index}
                                className='colorChooser'
                                // className={color==curColor? setColor(value:any): void}
                               
                                style={{backgroundColor: `${curColor}`}} 
                                onClick={()=>setSelectColor(curColor)}
                                
                            ></button>
                            )
                          }
                          )
                        }


                    
                  </div>
                </div>
                <div className="rPrice">${currentDatas.price}.00</div>
                <div className="rAdd">
                    <button onClick={() => {
                                        addTocarts1(currentDatas.parameter,selectSize,selectColor)
                                        }}
                    >
                        Add to basket
                    </button>

                </div>
              </div>
            </div>
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
                                <li key={index}>
                                    <img src={item.img} alt="" />
                                    <h1>{item.name}</h1>
                                    <h2>{item.brand}</h2>
                                </li>
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
