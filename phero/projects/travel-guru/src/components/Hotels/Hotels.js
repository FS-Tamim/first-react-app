import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { Link, useParams } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { InputLabel, TextField } from '@material-ui/core';
import hotelsData from '../Fake-data/Hotels';
import Hotel from '../Hotel/Hotel';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:150,
    },
  }));
const Hotels = () => {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [hotels,setHotels]=useState(hotelsData);
    return (
        <div className={classes.root}>

        <Container >
       <Grid container spacing={2}>
    
         <Grid item xs={12} sm={12} md={6}>
         
           <div>
            {
                hotels.map(hotel=><Hotel hotel={hotel}></Hotel>)
            }
               
           </div>
         </Grid>
         <Grid item xs={12} sm={12} md={5}>

            
         </Grid>
       </Grid>
       </Container>
     </div>
    );
};
export default Hotels;