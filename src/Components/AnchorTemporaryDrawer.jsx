import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import './mui.css'
import CustomizedBadges from './CustomizedBadges';
import { useSelector } from 'react-redux'
import { ListItem } from '@mui/material';
import {useDispatch} from 'react-redux';

import { increaseQuantity } from './Action/action';
import { decreaseQuantity } from './Action/action';
import { clearBasket } from './Action/action';
import { clearAll } from './Action/action';
import { red } from '@mui/material/colors';

export default function AnchorTemporaryDrawer() {



  let dispatch = useDispatch()

  let handleIncreaseQuantity = (parameter) => {
    dispatch(increaseQuantity(parameter)
  )
  console.log(pro)}

  let handleDecreaseQuantity = (parameter) => {
    dispatch(decreaseQuantity(parameter)
  )}

  let handleClearBasket = (parameter) => {
    dispatch(clearBasket(parameter)
  )}

  let handleClearAll=()=>{
    dispatch(clearAll())
  }


  let pro = useSelector((state) => {
    return state.cartItems
  })
  console.log(pro)

  // this did not work. replace by below
  // const totalPrice=()=>
  // {
  //   return pro.reduce((total,item)=>
  //   {
  //     return total+item.price+item.quantity
  //   },0)
  // }
  
  let totalPrice=pro.reduce((total,item)=>{
    return total+item.quantity*item.price;
  },0
  );


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="basket">
          <div className="basketTop">
            <div className="basketTopL">
              <div className="basketTopL1">My Basket</div>
              <div className="basketTopL2">
                 ( {pro.length} items )
              </div>
            </div>
            <div className="basketTopR">
              <div className="basketTopR1">Close</div>
              <div className="basketTopR2"
                onClick={handleClearAll}
              >Clear Basket</div>
            </div>

          </div>
          <div>
              <div >
                  {pro.map((item, index) => {
                    return <div key={index} className="basketList">
                        <div className="listL1">
                          <div className="listL1Top" 
                          onClick={() => {
                            handleIncreaseQuantity(item.parameter)
                            }}
                          >
                            +
                            </div>
                          <div className="listL1Bottom"
                          onClick={()=>{
                            handleDecreaseQuantity(item.parameter)
                          }}
                          >-</div>
                        </div>
                        <div className="listL2">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="listM">
                          <div className="listMTop">
                            {item.name}
                          </div>
                          <div className="listMBottom">
                            <div className="listMBottom1">
                              <div className="listMBottom1T">Quantity</div>
                              <div className="listMBottom1B">
                                {item.quantity}
                              </div>
                            </div>
                            <div className="listMBottom2">
                              <div className="listMBottom2T">Size</div>
                              <div className="listMBottom2B">
                                {item.size}mm
                              </div>
                            </div>
                            <div className="listMBottom3">
                              <div className="listMBottom3T">Color</div>
                              <div className="listMBottom3B"  style={{backgroundColor:`${item.color}`}}
                                >
                               
                              </div>
                            </div>
                          </div>

                        </div>
                        <div className="listR1">
                          ${item.price*item.quantity}.00
                        </div>
                        <div className="listR2"
                          onClick={()=>{handleClearBasket(item.parameter)}}
                          >
                          X</div>
                      </div>
                  })}
                </div>
          </div>
          <div className="basketCheckout">
            <div className="basketCheckoutL">
              <div className="basketCheckoutLTop">Subtotal Amount: </div>
              <div className="basketCheckoutLBottom">
                ${totalPrice}.00
              </div>
            </div>
            <div className="basketCheckoutR">CHECK OUT</div>
          </div>
        </div>




      </List>



    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <CustomizedBadges></CustomizedBadges>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
