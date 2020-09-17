import React from 'react';
import './Booking.css'
import { useParams } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import places from '../Fake-data/Fake-data';
import { InputLabel, TextField } from '@material-ui/core';
// import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



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

const Booking = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
  setSelectedDate(date);
  };
    const classes = useStyles();
    const {id}=useParams();
    const selectedPlace=places.find(place=>place.id===id)
    return (
        <div className='HomeMain'>
        <div className={classes.root}>
        <Container >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={5}>
                <div>
    <h3 className="title">{selectedPlace.name}</h3>
    <p className="description">{selectedPlace.fullDescription}</p>
             
          </div>
                
                </Grid>
                <Grid item md={7}  container spacing={4}>
                
                
                <form className="bookingform" noValidate autoComplete="off">
                <InputLabel htmlFor="outlined-full-width">Origin</InputLabel>
           < TextField
          id="outlined-full-width"
     
          style={{ margin: 8 }}
          value="Dhaka"
         
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <InputLabel htmlFor="outlined-full-width">Destination</InputLabel>
        < TextField
          id="outlined-full-width"
          value={selectedPlace.name}
        
          style={{ margin: 8 }}
         
         
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={5}> 
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="From"
                                style={{ marginRight: 8 }}
                                format="dd/mm/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    </Grid> 
                    <Grid item xs={12} sm={12} md={5}> 
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="To"
                                format="dd/mm/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    </Grid> 
                </Grid><br/>
        <button className='btn btn-warning bookingbtn'>Book Now</button>
 
               </form>
                
        
                </Grid>
              </Grid>
              </Container>
              </div>    
            </div>
    );
};

export default Booking;