import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage = ({ booking, setBooking }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    // Logic to confirm booking
    console.log('Booking confirmed:', booking);
    alert('Booking confirmed!'); // Replace with actual confirmation logic
  };

  const handleUpdate = () => {
    console.log('Navigating back to BookingPage for updating:', booking);
    navigate('/booking'); // Navigate to the booking page
  };

  const handleDelete = () => {
    console.log('Deleting booking:', booking);
    setBooking(null); // Reset booking state
    alert('Booking deleted!'); // Replace with actual deletion logic
  };

  return (
    <Container
      sx={{
        width: '100vw',
        height: '100vh',
        p: 4,
        backgroundColor: 'rgba(34, 34, 34, 0.7)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
      }}
    >
      <Typography variant="h4" margin="normal" fontFamily={'serif'}>
        Confirm Your Booking
      </Typography>

      {booking ? (
        <>
          <Typography variant="h5" margin="normal" fontFamily={'serif'}>
            Vehicle Type: {booking.vehicleType}, Brand: {booking.brand}
          </Typography>
          <Button variant="contained" color="primary" fullWidth onClick={handleConfirm}>
            Confirm
          </Button>
          <Button variant="contained" color="primary" fullWidth onClick={handleUpdate} sx={{ mt: 2 }}>
            Update Booking
          </Button>
          <Button variant="contained" color="error" fullWidth onClick={handleDelete} sx={{ mt: 2 }}>
            Delete Booking
          </Button>
        </>
      ) : (
        <Typography variant="h6" margin="normal" color="error">
          No booking details available.
        </Typography>
      )}
    </Container>
  );
};

export default ConfirmationPage;
