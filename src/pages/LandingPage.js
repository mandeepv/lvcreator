import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import NavBar from '../components/NavBar';
import Box from '@mui/material/Box';
import Card from '@mui/joy/Card';
import HeroPic from '../assets/images/hero-divider-1500w.png'
import Button from '@mui/joy/Button';
import { styled } from '@mui/system';  
import { useNavigate, Link } from 'react-router-dom';
import BaseCard from '../components/BaseCard';

const CustomButton = styled(Button)({
    color: '#000',
    cursor: 'pointer',
    display: 'inline-block',
    padding: '15px 30px',
    fontSize: 18,
    boxShadow: '8px 7px 0 0 #000',
    fontStyle: 'normal',
    transition: '.3s',
    fontWeight: 600,
    borderColor: 'var(--dl-color-gray-black)',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#ffcf77',

    '&:active': {
        transform: 'translateY(10px)', 
        boxShadow: '0px 0px 0 0 #000', 
    },
});

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <CssVarsProvider>
        <NavBar showMenuButton={false} />

      <BaseCard>
    
     
     
            <Typography
              level="h1"
              component="h1"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                mt: { xs: 5, sm: 8, md: 10 },  // Responsive top margin
                mb: 1,
              }}
            >
              Everybody is an Influencer
            </Typography>
            <Typography
              level="h5"
              component="h2"
              sx={{
                textAlign: 'center',
                mb: 3, // Bottom margin, adjust as needed
                px: 2, // Added padding to the left and right
              }}
            >
              Unlock your full potential and grow with our marketing platform.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: { xs: 2, sm: 2, md: 4 }, mt:2 }}>
                
            <CustomButton
  onClick={() => {
    setTimeout(() => {
      navigate('/signup')
    }, 200);  // delay in milliseconds
  }}
>
  SIGN ME UP!
</CustomButton>
<CustomButton
  onClick={() => {
    setTimeout(() => {
      navigate('/signin')
    }, 200);  // delay in milliseconds
  }}
>
  LOGIN
</CustomButton>
            </Box>
            <Box
              sx={{
                height: { xs: '300px', md: '400px', lg: '500px' },
                width: '100%',
                backgroundImage: `url(${HeroPic})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
           </BaseCard>
    </CssVarsProvider>
  );
};

export default LandingPage;
