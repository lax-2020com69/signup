
import { useState } from 'react';
import { loginrequst } from './api';
import { autho } from './auth';
import './css/bootstrap.min.css';
import'./home.css';
import { userstoredata } from './store';
import { Link, Navigate} from 'react-router-dom';
export default function Login(){
 const initialerror={
    email:{required:false},
    password:{required:false},
     custom_error:null
 };
const[errors,seterrors]=useState(initialerror);
const [loading,setloading]=useState(false);
const getvalue=(event)=>{
    event.preventDefault();
    let error=initialerror;
    let haserror=false;
    if(inputs.email==""){
        errors.email.required=true;
        haserror=true;
    }
    if(inputs.password==""){
        errors.password.required=true;
        haserror=true;
    }
    if (haserror == false) {
        setloading(true);
        /*send api*/
        loginrequst(inputs).then((response) => {
          userstoredata(response.data.idToken);
         /* console.log(response);*/
        }).catch((err) => {
          
        
              seterrors({...errors,costom_error:"error"})
           
        }).finally(() => {
           setloading(false);
        })
     }
    seterrors({...error});

}
const[inputs,setinputs]=useState(
    {
email:"",
password:""
}
)
const getinputs = (event) => {
    setinputs({ ...inputs, [event.target.name]: event.target.value })

 }
 if(autho()){
    return <Navigate to="/dashboard" />
    }
    
  
    

return(

  <div className="register">
<section className="login-block">
            <div className="container">
                   {/*nav--------------------------------------start*/}
                   <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-flued navbarr">
                        <div className="navbar-header">
                        <Link className="navbar-brand"to={"/dashboard"}>20/COM/69</Link>
                        </div>
                       
                       
                       
                            <ul className="navbar-nav nav navbar-right">
                             
                             
                               {autho()?(<li><Link to={"/dashboard"}><i className="glyphicon glyphicon-dashboard"></i> Dashbord</Link></li>):null}
                                { !autho()? ( <li><Link to={"/register"}><i className="glyphicon glyphicon-log-in"></i> Register</Link></li>):null}

                            </ul>
                       
                    </div>

                </nav>
                {/*nav-------------------------------------------end*/}
                <div className="row ">
                    <div className="col login-sec">
                        <h2 className="text-center">Login Now</h2>
                        <form onSubmit={getvalue} className="login-form" action="">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="text-uppercase letter">Email</label>
                            <input type="email"  className="form-control" name="email"  id="" onChange={getinputs} placeholder="email"  />
                            {errors.email.required?(
                            <span className="text-danger" >
                                Email is required.
                            </span>):null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="text-uppercase letter">Password</label>
                            <input  className="form-control" type="password"  name="password" onChange={getinputs}  placeholder="password" id="" />
                            {errors.password.required?(
                            <span className="text-danger" >
                                Password is required.
                            </span>):null}
                        </div>
                        <div className="form-group">
                            <div  className="text-center">
                                <div className="spinner-border text-primary letter " role="status">
                                {loading?(<span className="loading ">Loading...</span>):null}
                                </div>
                            </div>
                            {errors.costom_error?(
                            <span className="text-danger" >
                            <p>Check Email and password</p>
                            </span>):null}
                            <input  type="submit" className="btn btn-login float-right letter" disabled={loading} value="Login"/>
                        </div>
                        <div className="clearfix"></div>
                        <div className="form-group text-center">
                        Create new account ? Please <Link to={"/register"}>Register</Link>
                        </div>
                        </form>
                    </div>
                </div>
             
            </div>
          
        </section>

  </div>  


)
}




