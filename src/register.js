import { Component, useState } from "react";
import { apirequst } from "./api";
import { autho } from "./auth";
import './css/bootstrap.min.css';
import './home.css';
import { userstoredata } from "./store";
import { Link, Navigate} from "react-router-dom";
export default function Register() {
   const initialstateerrors = {
      name: { required: false },
      email: { required: false },
      password: { required: false },
      costuom_error: null

   }
   const [errors, seterrors] = useState(
      initialstateerrors

   )
   const [loading, setloading] = useState(false);
   const getvalue = (event) => {
      event.preventDefault();
      let errors = initialstateerrors;
      let error = false;
      if (inputs.name == "") {
         errors.name.required = true;
         error = true;}

         if (inputs.email == "") {
            errors.email.required = true;
            error = true;
         }
         if (inputs.password == "") {
            errors.password.required = true;
            error = true;
         }
         if (error == false) {
            setloading(true);
            /*send api*/
            apirequst(inputs).then((response) => {
              userstoredata(response.data.idToken);
             /* console.log(response);*/
            }).catch((err) => {
               
            
                  seterrors({...errors,costuom_error:"error"})
               
            }).finally(() => {
               setloading(false);
            })
         }

         seterrors({...errors});




      }
      const [inputs, setinputs] = useState({
         name: "",
         email: "",
         password: ""
      })
      const getinputs = (event) => {
         setinputs({ ...inputs, [event.target.name]: event.target.value })

      }
 /* console.log(autho())    */
if(autho()){
return <Navigate to="/dashboard" />
}


      return (

         <div className="register" >


            <section className="login-block ">
               <div className="container ">
                       {/*nav--------------------------------------start*/}
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-flued navbarr">
                        <div className="navbar-header">
                        <Link className="navbar-brand">20/COM/69</Link>
                        </div>
                     
                       
                            
                                
                           
                         
                            <ul className="navbar-nav nav navbar-right">
                              { !autho()? (<li><Link to={"/login"}><i className="glyphicon glyphicon-user"></i> Sign_in</Link></li>):null}
                              
                               {autho()?(<li><Link to={"/dashboard"}><i className="glyphicon glyphicon-dashboard"></i> Dashbord</Link></li>):null}
                               
                            </ul>
                       
                    </div>

                </nav>
                {/*nav-------------------------------------------end*/}
                  <div className="row ">
                     <div className="col register-sec">
                        <h2 className="text-center">Register Now</h2>
                        <form onSubmit={getvalue} className="register-form" action="" >
                           <div className="form-group">
                              <label htmlFor="exampleInputEmail1" className="text-uppercase letter">Name</label>
                              <input type="text" className="form-control" onChange={getinputs} name="name" placeholder="username" id="" />
                              {errors.name.required ?
                                 (<span className="text-danger" >
                                    user nameis required.</span>) : null}
                           </div>

                           <div className="form-group">
                              <label htmlFor="exampleInputEmail1" className="text-uppercase letter">Email</label>

                              <input type="text" className="form-control" onChange={getinputs} name="email" placeholder="user@gmail.com" id="" />
                              {errors.email.required ?
                                 (<span className="text-danger" >
                                    Email is required.
                                 </span>) : null}
                           </div>
                           <div className="form-group">
                              <label htmlFor="exampleInputPassword1" className="text-uppercase letter">Password</label>
                              <input className="form-control" type="password" onChange={getinputs} placeholder="password" name="password" id="" />
                              {errors.password.required ?
                                 (<span className="text-danger" >
                                    Password is required.
                                 </span>) : null}
                           </div>
                           <div className="form-group">
                              {errors.costuom_error ?
                                 (<span className="text-danger" >
                                    <p>costuom_error! plz check</p>
                                 </span>) : null}
                              <div className="text-center">
                                 <div className="spinner-border text-primary " role="status">
                                    {loading ?
                                       (<span className="loading">Loading...</span>) : null}
                                 </div>
                              </div>

                              <input type="submit" className="btn btn-login float-right letter " disabled={loading} value="Register" />
                           </div>
                           <div className="clearfix"></div>
                           <div className="form-group text-center">
                              Already have account ? Please <Link to={"/login"} >Login</Link>
                           </div>


                        </form>


                     </div>

                  </div>


               </div>
                 {/*footer -----------------------------------------------start */}

           
            </section>
    


         </div>





      )







   }
