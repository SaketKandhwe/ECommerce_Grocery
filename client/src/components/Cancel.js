import React from 'react'
import { Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Headers from './Headers';

const Cancel = () => {
  return (
    <>
    < Headers />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
<Container maxWidth="lg">
      <Typography variant="h1" align="center">
        Order Cancelled
      </Typography>
      <Typography variant="body1" align="center">
        Your order has been cancelled. We understand that things change, and we're
        here to help if you need anything else.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        sx={{ width: 200, margin: '0 auto', marginTop: 20 }}
      >
        Shop Again
      </Button>
    </Container>
    </>
  )
}

export default Cancel