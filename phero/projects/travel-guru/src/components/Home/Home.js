import React from 'react';
import './Home.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import sundorbon from '../../images/Image/sundorbon.png';
import sajek from '../../images/Image/Sajek.png';
import srimongol from '../../images/Image/Sreemongol.png';
import { Link } from 'react-router-dom';

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

const Home = () => {
    const classes = useStyles();
    return (
    <div className='HomeMain'>
<div className={classes.root}>
<Container >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={5}>
        <div>
              <h3 className="title">COX'S BAZAR</h3>
              <p className="description">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
              <button className="btn btn-warning">Booking</button>
          </div>
        </Grid>
        <Grid item md={7}  container spacing={4}>
        <Grid item xs={12} sm={4}  md={4} className='imageGrid' >
       <Link to='/booking/1' > <img className="image" src={sajek} alt="sajek"/></Link>
        <h1  className='placeTitle'>Cox Bazar</h1>
        </Grid>
        <Grid item xs={12} sm={4}  md={4} className='imageGrid'>
        <Link to='/booking/2' > <img className="image" src={sundorbon} alt="sundorbon"/></Link>
        <h1 className='placeTitle'>Soundorbon</h1>
        </Grid>
        <Grid item xs={12} sm={4}  md={4} className='imageGrid'>
        <Link to='/booking/3' > <img className="image" src={srimongol} alt="srimongol"/></Link>
         <h1 className='placeTitle'>Srimongol</h1>

        </Grid>
        </Grid>
      </Grid>
      </Container>
      </div>    
    </div>
    );
};

export default Home;