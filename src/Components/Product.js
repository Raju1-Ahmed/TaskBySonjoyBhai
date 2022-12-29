import React, { useEffect, useState } from 'react';
import { Container, Box, Grid, Button } from '@mui/material';
import { Products } from './Products';
import { Link } from 'react-router-dom';


const Product = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://testdonebysonjoybhai.onrender.com/user')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <Container sx={{ marginBottom: '100px', marginTop: '100px', }} >
              <Box sx={{  display: 'flex', justifyContent: 'end', alignItem: 'center', }} >
                <Button>
                    <Link to='/adduser' >Add Users</Link>
                </Button>
            </Box>
            <Grid container>
            {/* <Grid item xs={6}> */}
                    {reviews.map(review => <Products
                        key={review._id}
                        review={review}
                    />)}
                {/* </Grid> */}
            </Grid>
        </Container>
    );
};

export default Product;