import React from 'react'
import { Link } from 'react-router-dom';

export default function Job() {
 return (
  <>
  <div className="item border border-2 rounded-2 mb-4">

<div className="content p-3">
<h4 className='mb-4'>💼️ Job</h4>
<div className='d-flex justify-content-between align-items-center'>
<h2>Software Developer</h2>
<div className=''>  


<div className="dropdown">
 <button className="btn btn-secondary dropdown-toggle choose border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
 <i className="fa-solid fa-ellipsis fa-xl">  </i>
 </button>
 <ul className="dropdown-menu">
   <li><Link className="dropdown-item" >Edit</Link></li>
   <li><Link className="dropdown-item" >Report</Link></li>
   <li><Link className="dropdown-item" >Option 3</Link></li>
 </ul>
</div>
 
</div>
</div>


<div className='item-footer item-desc event d-flex justify-content-start  align-items-center my-3'>
 <span className='me-5'><i className="fa-solid fa-briefcase me-2"></i>Innovaccer Analytics Private Ltd.</span>


 <span className='ms-5'><i className="fa-solid fa-location-dot  me-2"></i>Noida, India</span>
</div>

 <button className='btn but w-100 btn-body job border-2 border border-dark-50 mb-3 py-2'>Apply on Timesjobs</button>


<div  className='mt-2 d-flex justify-content-between align-items-center'>

<div>
<img src="./img/job.png" alt="img" className='me-3' />
  <span className='item-name'>Joseph Gray</span>
</div>

<div className='item-footer d-flex justify-content-between  align-items-center'>
 <span className='d-lg-block d-md-none d-sm-none  hide'><i className="fa-regular fa-eye me-3"></i> 1.4k views</span>
 <div className='ms-2 icone  d-flex justify-content-center align-items-center'><i className="fa-solid fa-share-nodes"></i></div>
</div>

</div>
</div>
</div>
</>
 )
}
