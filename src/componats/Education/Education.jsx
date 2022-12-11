import React from 'react'
import { Link } from 'react-router-dom';

export default function Education() {
  return (
    <>
          <div className="item border border-2 rounded-2 mb-4">
       <figure>
        <img src="./img/2.png"className='w-100' alt="education" />
       </figure>
       <div className="content p-3">
       <h4 className='mb-4'>🔬️ Education</h4>
       <div className='d-flex justify-content-between align-items-center'>
       <h2>Tax Benefits for Investment under National Pension Scheme launched by Government</h2>
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
       <p className='my-3'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
       <div  className='mt-2 d-flex justify-content-between align-items-center'>

        <div>
        <img src="./img/Education.png" alt="img" className='me-3' />
          <span className='item-name'>Sarah West</span>
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
