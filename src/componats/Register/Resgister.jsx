import React from 'react'


export default function Resgister() {

  return (
    <>
     <div className="modal fade modal-lg" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      <div className="modal-header text-center border-0 p-4 hide d-sm-none d-lg-block">


        <p className="modal-title fs-5" id="exampleModalToggleLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>



        <button type="button" className="btn-close closedModek" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body pb-5">
        

        <div className="row">
         <div className="col-lg-6">
          <div>
          <div className='d-flex justify-content-between align-items-center'>
          <h1>Create Account</h1>
           <button type="button" className="btn-close d-lg-none d-md-block d-sm-block" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

           <div>
           <div className="input-group ">
  <input type="text" className="rounded-0 form-control form-lg-control p-2" placeholder="First Name" aria-label="Username"/>
  <input type="text" className="rounded-0 form-control form-lg-control p-2" placeholder="Last Name" aria-label="Server"/>
</div>

<input type="email" className="rounded-0 form-control p-2 form-lg-control" placeholder="Email" />
<div className="input-group ">
  <input type="password" className="rounded-0 form-control p-2 form-lg-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span className="input-group-text rounded-0 " id="basic-addon2"><i className="fa-regular fa-eye "></i></span>
</div>

<input type="password" className="rounded-0 form-control p-2 form-lg-control" placeholder="Confirm Password" />

<button className='btn w-100 py-3 my-3 rounded-pill registerbtn hide d-sm-none d-lg-block'>Create Account</button>


<div className='d-lg-none d-md-block d-sm-block'>
<div className='d-flex justify-content-between align-items-center '>
<button className='btn py-3 px-3 my-3 rounded-pill registerbtn '>Create Account</button>

<div className='ms-auto mb-2 mb-lg-0 '>

<a  className="text-decoration-none register-link pointer" data-bs-toggle="modal" data-bs-target="#exampleModal">
Or<span  className='text-decoration-underline'>  Sign In</span>
</a>


</div>

</div>
</div>

<button className='btn w-100 btn-body border border-2 border-dark-50  '><i className="fa-brands fa-facebook fa-lg me-2"></i> Sign up with Facebook</button>

<button className='btn w-100 btn-body border border-2 border-dark-50 mt-2  '><i class="fa-brands fa-google fa-lg me-2"></i> Sign up with Google</button>


           </div>


          </div>
         </div>

         <div className="col-lg-6 hide d-sm-none d-lg-block text-end">
            <div className=''>

            <div className='ms-auto mb-2 mb-lg-0 hide d-sm-none d-lg-block text-end'>

<a  className="text-decoration-none register-link pointer" data-bs-toggle="modal" data-bs-target="#exampleModal">
Already have an account?<span  className='text-decoration-underline'>  Sign In</span>
</a>

</div>

<img src="./img/register.png" alt="register" className='img-fulid'/>
<p className='register-foot'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
            
            </div>
         </div>

        </div>


        
      </div>

    </div>
  </div>
</div>

    </>
  )
}
