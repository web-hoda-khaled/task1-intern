import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container">
    <Link className="navbar-brand hide d-sm-none d-lg-block" to=""> <span>ATG.</span>W<img className='logo img-fluid' src="./img/Union 1.png" alt="logo"/>RLD</Link>
    <Link className="navbar-brand" to=""><i className="fa-solid fa-arrow-left text-white "></i></Link>
    <button className="navbar-toggler text-white border-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

    <a className="text-decoration-none register-link text-white" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Jion Group</a>

    </button>

    
    <div className="collapse navbar-collapse d-none" id="navbarSupportedContent">

     <div className='ms-auto mb-2 mb-lg-0 hide d-sm-none d-lg-block'>
     <input type="text" className="serch form-control px-5 rounded-pill" readOnly placeholder="Search for your favorite  groups in ATG" />
     </div>

     <div className='ms-auto mb-2 mb-lg-0 hide d-sm-none d-lg-block'>

       <a className="text-decoration-none register-link" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Create account. <span  className='text-decoration-underline'> It’s free!</span><i className="fa-solid fa-caret-down ms-2"></i></a>
     </div>




    </div>
  </div>
</nav>
    </>
  )
}
