import React, { useState } from 'react'
import { Container, Box, Typography, Grid, Button, Modal } from '@mui/material';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Products = ({ review }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [products, setProducts] = useState([]);
    const [updated, setUpdated] = useState(false);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://testdonebysonjoybhai.onrender.com/order/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(service => service._id !== id);
                    setProducts(remaining);
                    setUpdated(!updated)

                })
        }
    }
    const { _id, name, phone, gender, email, address, about } = review;
    return (
        <Box  >

            {/* <Grid container spacing={2}>   */}
            <Grid item xs={6} spacing={4}>
                <Box sx={{ borderRadius: '9px', width: '400px', backgroundColor: '#e4e4e4', margin: '30px', padding: '20px' }} >
                    <Box >
                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItem: 'center', flexDirection: 'column', textAlign: 'start', paddingBottom: '10px' }}>
                            <Typography>{name}</Typography>
                            <Typography>{email}</Typography>
                            <Typography>{address}</Typography>
                            <Typography>{phone}</Typography>
                            <Typography>{gender}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItem: 'center', }} >
                        <Button
                            sx={{ backgroundColor: 'green', borderRadius: '5px', color: 'white', }}
                            onClick={() => handleDelete(review._id)}
                        >Delete</Button>
                        <Button
                            sx={{ backgroundColor: 'green', borderRadius: '5px', color: 'white', }}
                            onClick={handleOpen}
                        >Edit</Button>
                    </Box>
                </Box>
            </Grid>
            {/* </Grid>  */}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{

                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <form  >
                        <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#ddd', padding: '30px' }} >
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
                        <input className='btn mt-3 w-full max-w-xs text-white' type="submit" value="Add User" />
                    </form>
                </Box>
            </Modal>
        </Box>
    )
}
