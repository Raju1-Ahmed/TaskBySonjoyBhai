import React from 'react';
import { Container, Box, Grid, Button } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
    const handlePlaceOrder = event => {
        event.preventDefault();
        const reviewCollect = {
           name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            gender: event.target.gender.value
        }
        axios.post('https://testdonebysonjoybhai.onrender.com/addUser', reviewCollect)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Users is Added');
                    event.target.reset();
                }
            })
    }
    return (
       
        <form onSubmit={handlePlaceOrder}>
             <Box sx={{ backgroundColor:'#ddd', width:'500px', height:'auto',  padding:'30px', border:'1px solid red', marginLeft:'300px' }} >
             <Box sx={{   display: 'flex', justifyContent: 'center',  padding:'20px' }} >
           <Box>
                <Box padding='15px'>
                <input type="text" name='name' placeholder='Name' />
                </Box>
                <Box padding='15px'>
                <input type="text" name='email' placeholder='Email' />
                </Box>
                <Box padding='15px'>
                <input type="text" name="address" placeholder='Address' />
                </Box>
            </Box>
            <Box>
                <Box padding='15px'>
                <input type="text" name="phone" placeholder='Phone' />
                </Box>
                <Box padding='15px'>
                <input type="text" name="gender" placeholder='Gender' />
                </Box>
            </Box>
             </Box>
             </Box>
             <input className='btn mt-3 w-full max-w-xs text-white' type="submit" value="Add User" />
           </form>
       
    );
};

export default AddUser;