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
  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          width: { xs: '100%', md: '100%', lg: '98%', xl: '100%' },
          mx: 'auto',
          my: 1,
          py: 0,
          px: { xs: 1, md: 2 },
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
          backgroundColor: 'transparent',
        }}
      >
        <NavBar showMenuButton />
      </Sheet>

      <Sheet
        sx={{
          width: { xs: '100%', md: '100%', lg: '98%', xl: '100%' },
          mx: 'auto',
          my: 1,
          py: 0,
          px: { xs: 1, md: 2 },
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
          backgroundColor: 'transparent',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            borderRadius: 'md',
          }}
        >
          <Card
            size="md"
            variant="solid"
            sx={{
              bgcolor: '#6c07ff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              overflow: 'hidden',
              padding: 0,
            }}
          >
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
              <CustomButton>
                SIGN ME UP!
              </CustomButton>
              <CustomButton>
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
          </Card>
        </Box>
      </Sheet>
    </CssVarsProvider>
  );
};

export default LandingPage;
