import React from 'react'
import Navbar from './../Navbar/Navbar';
import Header from './../Header/Header';
import Navtabs from './../NavTabs/Navtabs';
import Resgister from '../Register/Resgister';
import Login from '../Login/Login';

export default function Main() {
  return (
    <div>
     
     <Navbar/>
      <Header/>
      <Navtabs />
      <Resgister/>
      <Login/>
    </div>
  )
}
