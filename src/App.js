import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import LoginPage from './components/LoginPage';
import BookingPage from './components/BookingPage';
import ConfirmationPage from './components/ConfirmationPage';
import BookedStatusPage from './components/BookedStatusPage';
import { Snackbar, Alert } from '@mui/material';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [booking, setBooking] = useState(null);
  const [users, setUsers] = useState([]);

  // Fetch users
  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleLogin = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setIsAuthenticated(true);
      setSnackbarMessage('Login successful!');
      setShowSnackbar(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        ) : (
          <>
            <Route path="/booking" element={<BookingPage setBooking={setBooking} />} />
            <Route path="/confirmation" element={<ConfirmationPage booking={booking} setBooking={setBooking} />} />
            <Route path="/booked-status" element={<BookedStatusPage booking={booking} />} />
            <Route path="*" element={<Navigate to="/booking" />} />
          </>
        )}
      </Routes>
      <Snackbar open={showSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Router>
  );
};

export default App;
