import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import places from '../Fake-data/Fake-data';
import { InputLabel, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import facebook from '../../images/Icon/fb.png';
import google from '../../images/Icon/google.png';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.css';
import { createUserWithEmailandPassword, handleFbSignIn, handleGoogleSignIN, handleGoogleSignout, initialaizeFirebaseFramework } from '../FirebaseConfig/firebasemanager';
import { UserContext } from '../../App';


initialaizeFirebaseFramework();








const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);


const SignUp = () => {

        
const [newUser, setNewUser] = useState(false);
const [user,setUser]=useState({
    userSignined:false,
    name:'',
    email:'',
    photo:''
})
const [loggedInUser,setLoggedInUser]=useContext(UserContext);
let history =useHistory();
let location = useLocation();

let { from } = location.state || { from: { pathname: "/" } };

   const googleSignin=()=>{
       handleGoogleSignIN()
       .then(res=>{
           setUser(res);
           setLoggedInUser(res);
           history.replace(from);
       })
   }
   const googleSignout=()=>{
       handleGoogleSignout()
       .then(res=>{
           setUser(res);
           setLoggedInUser(res);
       })
   }

   const fbSignIn = () => {
    handleFbSignIn()
    .then(res => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    })
}

  //  const handelSignup=(e)=>{
       
  //   if(newUser && user.email && user.password){
  //       createUserWithEmailandPassword(user.name,user.email,user.password)
  //       .then(res=>{
  //           setUser(res);
  //           setLoggedInUser(res);
  //           history.replace(from);

  //       })

  //       e.preventDefault(); 
  //   }
  //   // if(!newUser && user.email && user.password){
    //     loginwithEmailandPassword(user.email,user.password)
    //     .then(res=>{
    //         setUser(res);
    //         setLoggedInUser(res);
    //         history.replace(from);

    //     })  
    // }
  
   
// }
   

    const classes = useStyles();  
    const { register, handleSubmit,  errors } = useForm();
    const onSubmit = (data)=>{
      const name=data.firstName+' '+data.lastName;
      if(data.email && data.password){
        createUserWithEmailandPassword(name,data.email,data.password)
        .then(res=>{
            console.log(res);
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);
        })
    }
    } 
    
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    

    const getPassword=e=>{
      setPassword(e.target.value);
  }
  const getConfirmPassword=e=>{
      setConfirmPassword(e.target.value);
  }

 
    return (
      <div>
          <Container>
          <div className='signUp'>
        <div className={classes.root}>
     
      <Grid container spacing={3}>
        <Grid  md={7}>
        <form className="signUpForm" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <h1>Create Account</h1>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input className="form-control" type="text" name="firstName" ref={register({ required: true })} />
                {errors.firstName && <span>This field is required</span>}
            </div>
            <div className="form-group">
                <label htmlFor="lastName">LastName</label>
                <input className="form-control" type="text" name="lastName" ref={register({ required: true })} />
                {errors.lastName && <span>This field is required</span>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Username Or Email</label>
                <input className="form-control" type="text" name="email" ref={register({ required: true ,pattern:/\S+@\S+\.\S+/})} />
                {errors.email && errors.email.type==="required" && <span>This field is required</span>}
                {errors.email && errors.email.type==="pattern" && <span>Invalid Email</span>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" type="password" name="password" onChange={getPassword} ref={register({ required: true ,minLength: 6})} />
                {errors.password && errors.password.type==="required" && <span>This field is required</span>}
                {errors.password && errors.password.type==="minLength" && <span>Password length must be more than 6</span>}
                
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input className="form-control" type="password" name="confirmPassword" onChange={getConfirmPassword} ref={register({ required: true })} />
                {errors.confirmPassword && <span>This field is required</span>}
                { password !== "" && confirmPassword !== "" && password !== confirmPassword && <span className="text-danger">Password don't match</span>
                }
            </div>
            <input type="submit" className='btn btn-warning signUpButton' value="Create Account"/>
             <p>Already have an account?<Link to='/login'><span className="loginLink">Login</span></Link></p>
        </form>
  
        
        </Grid>
      </Grid>
      
    </div>
    
            </div>
            <div className="d-flex or">
            <hr className="hr-first"/>
            <p className="or-text">OR</p>
            <hr className="hr-second"/>
            </div>
           <div className='signupwithaccount'>
           <Button
        variant="contained"
        
        className='socialsignup'
        onClick={fbSignIn}
        
       
      ><img className="socialicone" src={facebook} alt='facebbok'/> <span className="signuptitle">   Countinue with facebook</span>
      </Button><br/><br/>
      <Button
        variant="contained"
        onClick={googleSignin}
        className='socialsignup'
       
      >   <img className="socialicone" src={google} alt='google'/><span className="signuptitle"> Countinue with google</span>
      </Button>

           </div>
          </Container>
      </div>
    );
};

export default SignUp;