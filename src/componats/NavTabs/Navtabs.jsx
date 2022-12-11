import React from 'react'
import './Navtabs.css'
import { Link } from 'react-router-dom';
import './../All/All'
import All from './../All/All';
import Article from './../Article/Article';
import Education from './../Education/Education';
import Event from './../Event/Event';
import Job from './../job/Job';
export default function Navtabs() {


 function getNameOfClicked(name){
    document.getElementById("nameOfClicked").innerHTML =name
    document.getElementById("navsFillter").innerHTML =name

 }


  return (
    <>
      <div className="container">
           {/* buttons */}




      <nav className='py-5 '>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">


  <button className="nav-link d-lg-none d-md-block d-sm-block border-0" id="navsFillter" >All Posts(32)</button>

  
    <button className="nav-link d-lg-block d-md-none d-sm-none  hide  active border-0" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All Posts(32)</button>
    <button   className="nav-link d-lg-block d-md-none d-sm-none  hide border-0" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Article</button>

    <button className="nav-link d-lg-block d-md-none d-sm-none  hide  border-0" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Event</button>

    <button className="nav-link d-lg-block d-md-none d-sm-none  hide  border-0" id="nav-education-tab" data-bs-toggle="tab" data-bs-target="#nav-education" type="button" role="tab" aria-controls="nav-education" aria-selected="false">Education</button>

    <button className="nav-link d-lg-block d-md-none d-sm-none  hide  border-0" id="nav-job-tab" data-bs-toggle="tab" data-bs-target="#nav-job" type="button" role="tab" aria-controls="nav-job" aria-selected="false">job</button>

    <div className='ms-auto d-lg-block d-md-none d-sm-none  hide'>
     <button className='btn btn-post me-3'>Write a Post<i className="fa-sharp fa-solid fa-caret-down ms-2"></i> </button>
     <button className='btn btn-join text-white'><i className="fa-solid fa-user-group  me-2"></i>Join Group </button>
     
    </div>


    <div className="btn-group d-lg-none d-md-block d-sm-block ms-auto ">
  <button className="btn btn-secondary btn-sm" type="button">
   Filter : <span id='nameOfClicked'> All Posts</span>
  </button>
  <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>

  <ul className="dropdown-menu ">
  <li><Link onClick={()=>{getNameOfClicked("All")}}className="nav-link active border-0" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All</Link></li>

  <li><Link onClick={()=>{getNameOfClicked("Artical")}} className="nav-link border-0" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Artical</Link></li>



  <li><Link onClick={()=>{getNameOfClicked("Event")}}className="nav-link border-0" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Event</Link></li>


  <li><Link onClick={()=>{getNameOfClicked("Education")}} className="nav-link border-0" id="nav-education-tab" data-bs-toggle="tab" data-bs-target="#nav-education" type="button" role="tab" aria-controls="nav-education" aria-selected="false">Education</Link></li>


    <li><Link onClick={()=>{getNameOfClicked("Job")}} className="nav-link border-0" id="nav-job-tab" data-bs-toggle="tab" data-bs-target="#nav-job" type="button" role="tab" aria-controls="nav-job" aria-selected="false">Job</Link></li>
  </ul>
    </div>

  </div>
  
      </nav>



     {/* content*/}

<div className='row g-3'>
  <div className="col-lg-8">
  <div className="tab-content" id="nav-tabContent">

<div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
  <All />
</div>

<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="1">
<Article/>
</div>

<div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="2">
  <Event />

</div>

<div className="tab-pane fade" id="nav-education" role="tabpanel" aria-labelledby="nav-education-tab" tabindex="3">
<Education />
  
</div>


<div className="tab-pane fade" id="nav-job" role="tabpanel" aria-labelledby="nav-job-tab" tabindex="4">
<Job />
  
</div>

</div>
  </div>




 <div className="col-md-4 hide d-sm-none d-lg-block">
<div className='px-5'>
<div className=' d-flex justify-content-between align-items-center border-bottom border-2 mb-4 side-top'>
    <p><i className="fa-solid fa-location-dot  me-3"></i> Noida, India</p>
    <i className="fa-solid fa-pen d-inline-block ms-auto"></i>
  </div>
  <div className=' d-flex justify-content-between align-items-start side-bottom'>
  <i className="fa-solid fa-circle-exclamation me-3 mt-2"></i> 
  <p>Your location will help us serve better and extend a personalised experience.</p>
  </div>
</div>
 </div>
 </div>

      </div>
    </>
  )
}
