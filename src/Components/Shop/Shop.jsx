import React from 'react'
import shopping from '../../data/data_shop'
import './Shop.css'

import {Link} from 'react-router-dom'

import { addToCart } from '../Action/action'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'

export default function Shop() {

  let products = useSelector((state) => {
    return state.products
  })
  let dispatch = useDispatch()
  let addTocarts1 = (parameter,size,color) => {
    dispatch(addToCart(parameter,size,color))
  }

  return (
    <div>

      <div className="shopSection">
        <div className="shopWrapper">
            <ul>
                {
                    products.map(
                        (item,index)=>{
                            return(
                                
                                    <li key={index}  className='shopLi'>
                                      <Link to ={`/Product/${item.parameter}`} key={item.id}>
                                        <div className="wrapper">
                                          <img src={item.img} alt="" />
                                          <h1>{item.name}</h1>
                                          <h2>{item.brand}</h2>
                                          <h3>${item.price}.00</h3>
                                        </div>
                                      </Link>
                                      <button className='shopButton' onClick={() => {
                                        addTocarts1(item.parameter,item.size[0],item.color[0])
                                        }}
                                      >
                                      Add to basket
                                      </button>
                                     </li> 


                            )
                        }
                    )
                }
            </ul>
        </div>
        <button className='showMore'>Show More Items</button>
      </div>

    </div>
  )
}
