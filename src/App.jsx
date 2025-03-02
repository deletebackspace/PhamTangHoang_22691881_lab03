import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calcullation from './component/Calculation'
import Header from './component/header'
import Menu from './component/Menu'
import Content from './component/Content'
import Footer from './component/Footer'


function App() {

  return (
    <>
     {/* <Calcullation></Calcullation> */}
     <Header></Header>
     <Menu></Menu>
     <Content></Content>
     <Footer></Footer>
    </>
  )
}

export default App
