    import React, { useContext, useState } from 'react';
    import './Login.css';
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
import { handleFbSignIn, handleGoogleSignIN, handleGoogleSignout, initialaizeFirebaseFramework, loginwithEmailandPassword } from '../FirebaseConfig/firebasemanager';
import { UserContext } from '../../App';

    // initialaizeFirebaseFramework();

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


    const Login = () => {

              
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




        const classes = useStyles();  
        const { register, handleSubmit,  errors } = useForm();
        

const onSubmit = (data)=>{

      
      if(data.email && data.password){
        loginwithEmailandPassword(data.email,data.password)
                  .then(res=>{
                    setUser(res);
                    setLoggedInUser(res);
                    history.replace(from);
                  })
              }
    }  
        
        const [password,setPassword]=useState("");
        const [confirmPassword,setConfirmPassword]=useState("");

        

    
        return (
        <div>
            <Container>
            <div className='login'>
            <div className={classes.root}>
        
        <Grid container spacing={3}>
            <Grid  md={7}>
            <form className="loginForm" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <h1>Login</h1>
                <div className="form-group">
                    <label htmlFor="firstName">Username or Email</label>
                    <input className="form-control" type="text" name="email" ref={register({ required: true })} />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" ref={register({ required: true ,minLength: 6})} />
                    {errors.password && errors.password.type==="required" && <span>This field is required</span>}  
                </div>
                <div class="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                <label className="forgetPassword">Forgat password</label>
                </div>
                <input type="submit" className='btn btn-warning signUpButton' value="login"/>
                <p>New User? <Link to='/signup'><span className="signupLink">register</span></Link>  now</p>
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
            onClick={fbSignIn}
            className='socialsignup'
            
        
        ><img className="socialicone" src={facebook} alt='facebbok'/> <span className="signuptitle">   Countinue with facebook</span>
        </Button><br/><br/>
        <Button
            variant="contained"
            className='socialsignup'
            onClick={googleSignin}
        >   <img className="socialicone" src={google} alt='google'/><span className="signuptitle"> Countinue with google</span>
        </Button>

            </div>
            </Container>
        </div>
        );
    };

    export default Login;