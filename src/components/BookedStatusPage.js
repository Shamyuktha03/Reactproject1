import React from 'react';
import { Container, Typography } from '@mui/material';

const BookedStatusPage = ({ booking }) => {
  return (
    <Container
      sx={{
        height: '100vh', // Full height of the viewport
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        backgroundColor: 'rgba(34, 34, 34, 0.7)', // Optional: Semi-transparent background
        color: '#ffffff', // Text color
      }}
    >
      <Typography variant="h5" align="center" margin="normal">
        Booking Successful!
      </Typography>
      <Typography variant="body1" align="center" margin="normal">
        {`Vehicle Type: ${booking.vehicleType}, Brand: ${booking.brand}`} {/* Corrected template literals */}
      </Typography>
    </Container>
  );
};

export default BookedStatusPage;
