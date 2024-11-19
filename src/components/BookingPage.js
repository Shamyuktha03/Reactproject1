import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const vehicleOptions = [
  {
    label: 'Car',
    value: 'car',
    brands: [
      { name: 'Toyota', imageUrl: 'https://www.motortrend.com/uploads/2022/05/2023-Toyota-GR-Corolla-Morizo-Edition-2.jpg' },
      { name: 'Honda', imageUrl: 'https://cdn.motor1.com/images/mgl/BXAnqM/s1/honda-e-n2-concept-rear-three-quarter-view.webp' },
      { name: 'BMW', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtSVo6VBMeGx1jQmDc9eFWk5S61tZiyAcAg&s' },
      { name: 'Mercedes', imageUrl: 'https://blackfoxmotors.de/wp-content/uploads/2021/02/SAM_1209-1920x1280.jpg' },
      { name: 'Audi', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AA8HL1CJoyFE4OYQUWcgIXf8_XICTCIt6g&s' },
      { name: 'Ford', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLI9uwDxOUOxBizEK3u78tiM44jvRv0akIA&s' },
    ],
  },
  {
    label: 'Bike',
    value: 'bike',
    brands: [
      { name: 'Harley Davidson', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlqN2pKGYS6zsBusMzdQuhuuE0C2XggPTFeQ&s' },
      { name: 'Yamaha', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSUBSSo9ALpyWh8jQo_16jvKPYaF20EEzBQ&s' },
      { name: 'Ducati', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RE2qqqN1M7sXfZScQO7hAhyN1gfvOD8cRJl0qMLABrcQ09QpOZUlPcGQKh3R2csFFBo&usqp=CAU' },
      { name: 'Kawasaki', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWGU35edf_VD2PivIjccxdTOGEvZul8m-LA&s' },
      { name: 'Suzuki', imageUrl: 'https://c4.wallpaperflare.com/wallpaper/445/215/699/suzuki-gsx-r-motorcycle-wallpaper-preview.jpg' },
      { name: 'Royal Enfield', imageUrl: 'https://www.iamabiker.com/wp-content/uploads/2020/09/Royal-Enfield-Classic-350-BS6-Stealth-Black-HD-wallpapers-9.jpg' },
    ],
  },
  {
    label: 'Bus',
    value: 'bus',
    brands: [
      { name: 'Volvo', imageUrl: 'https://t3.ftcdn.net/jpg/08/68/40/18/360_F_868401801_WuVskug032UYfDrO9XD9lMjv3rK7OMaO.jpg' },
      { name: 'Mercedes', imageUrl: 'https://png.pngtree.com/background/20231016/original/pngtree-compact-touring-bus-in-black-ideal-for-travel-3d-render-picture-image_5579807.jpg' },
      { name: 'Scania', imageUrl: 'https://t3.ftcdn.net/jpg/08/68/40/18/360_F_868401801_WuVskug032UYfDrO9XD9lMjv3rK7OMaO.jpg' },
      { name: 'MAN', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbCxmia317T2Bcase1Neq2OuHF1y-57_KjfscQ-WEnO8Klrm4czdThKSqqUtw1dCv6bk&usqp=CAU' },
      { name: 'Ashok Leyland', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpiThN669fP_PMRrq2sK1Ey4bWLFE_UvfASwTOAaz7NW7dAPZx2J55-_k5C4-Ncxp5EQ&usqp=CAU' },
      { name: 'Tata', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkr2hoq5N8L8L0qze1nptda0fMSKKRp-K1w&s' },
    ],
  },
];

const BookingPage = ({ setBooking }) => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const slideshowImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1tWI1D7bnqOanebU052AZysIwujEnQonIQ&s',
    'https://mrwallpaper.com/images/hd/black-yamaha-yzf-r6-1920x1080-hd-bikes-pgp74h4ielflwlg3.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwAvWcNbXKitnKO3T6pTUA6kf_3nPnjDpNMg&s',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  const handleBooking = () => {
    const bookingDetails = { vehicleType: selectedVehicle, brand: selectedBrand };
    setBooking(bookingDetails); // Save booking details in the state
    navigate('/confirmation'); // Navigate to ConfirmationPage
  };

  return (
    <Container
  sx={{
    width: '100vw', // Slightly less than full width to leave space for rounding
    height: '100vh', // Slightly less than full height to leave space for rounding
    p: 4,
    backgroundColor: 'rgba(34, 34, 34, 0.7)', // Dark grey with transparency for blur effect
    backdropFilter: 'blur(10px)', // Blur the background behind the container
    borderRadius: '20px', // Rounded edges
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.5)', // Shadow for depth
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    color: '#ffffff',
    background: 'black', // Black background behind the grey container
  }}
>

      {/* Vehicle Type Selection Centered at the Top */}
      <TextField
        select
        label="Select Vehicle Type"
        value={selectedVehicle}
        onChange={(e) => setSelectedVehicle(e.target.value)}
        fullWidth
        margin="normal"
        sx={{ width: '300px', mb: 1, backgroundColor: '#ffffff', borderRadius: 2 }}
      >
        {vehicleOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
<br></br>
      <Typography variant="h5" align="center" marginBottom={3} sx={{ color: 'white', fontWeight: 'bold' }} fontFamily={'serif'}>
        CHOOSE A BRAND
      </Typography>

      {/* Slideshow of Vehicle Images */}
      <Box
        sx={{
          width: '100%',
          height: '250px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 4,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {slideshowImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slideshow ${index}`}
            style={{
              width: '50%',
              height: '200%',
              position: 'absolute',
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              borderRadius: 1,
            }}
          />
        ))}
      </Box>

      {/* Display Brands Based on Selected Vehicle */}
      {selectedVehicle && (
        <>
          {/* <Typography variant="h6" align="center" sx={{ mt: 2, mb: 2, color: 'white' }}>
            Choose a Brand
          </Typography> */}
          <Grid container spacing={4}>
            {vehicleOptions
              .find((option) => option.value === selectedVehicle)
              .brands.map((brand) => (
                <Grid item xs={12} sm={6} md={4} key={brand.name}>
                  <Card sx={{ backgroundColor: 'WHITE' }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={brand.imageUrl}
                      alt={brand.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" fontFamily={'serif'}>
                        {brand.name}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          setSelectedBrand(brand.name);
                          handleBooking(); // Automatically proceed to booking on brand selection
                        }}
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default BookingPage;