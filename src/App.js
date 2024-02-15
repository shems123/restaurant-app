import React from 'react'
import {Header, AboutUs, Chef, Intro, Laurel, Gallary , Findus, Footer, Menu} from './container/index.js'
import Navbar from './components/navbar/Navbar'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <Menu/>
      <Chef/>
      <Intro/>
      <Laurel/>
      <Gallary/>
      <Findus/>
      <Footer/>
    </div>
  )
}

export default App;
