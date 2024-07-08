import React from 'react'

import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'


import {Outlet} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Components/Store/store'
import Shop from './Components/Shop/Shop'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function App(){

  let navigateHome=useNavigate()
  let loadHome=()=>[navigateHome('/Home')]
  
  useEffect(()=>{
    loadHome()
  },[]
  )

  return (
    <div>

        <Provider store={store}>
          <Nav></Nav>
          <Outlet></Outlet>
          <Footer></Footer>
        </Provider>
        
    </div>
)
}

export default App

// React day03

// import React from 'react'
// import './App.css'
// import ClassOne from './Components/ReactDay03 Teacher Class/ClassOne'
// import ClassTwo from './Components/ReactDay03 Teacher Class/ClassTwo'
// import ClassThree from './Components/ReactDay03 Teacher Class/ClassThree'
// import ClassFour from './Components/ReactDay03 Teacher Class/ClassFour'
// import ClassFive from './Components/ReactDay03 Teacher Class/ClassFive'
// import FunctionOne from './Components/ReactDay03 Teacher Function/FunctionOne'

// function App() {
//   return (
//     <div className="App">
//       <ClassOne></ClassOne>
//       <FunctionOne></FunctionOne>
//       <hr />
//       <ClassTwo></ClassTwo>
//       <hr />
//       <ClassThree></ClassThree>
//       <hr />
//       <ClassFour></ClassFour>
//       <hr />
//       <ClassFive></ClassFive>
//     </div>
//   )
// }

// export default App
