import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {

    const [bookings,setbookings]=useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('http://localhost:5000/bookings?email='+loggedInUser.email,{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                authorization:`Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res=>res.json())
        .then(data=>setbookings(data))
    },[])
    return (
        <div>
            <h1>This is bookings</h1>
            {
                bookings.map((book)=><li>{book.name} From:{book.checkIn} To:{book.checkOut}</li>)
            }
        </div>
    );
};

export default Bookings;