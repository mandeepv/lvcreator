import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import NavBar from '../components/NavBar'; // Make sure to import your NavBar component correctly
import Box from '@mui/material/Box';
import Card from '@mui/joy/Card';
import HeroPic from '../assets/images/hero-divider-1500w.png'
import Button from '@mui/joy/Button';
import { styled } from '@mui/system';  

const CustomButton = styled(Button)({
    color: '#000',  // make the text black
    cursor: 'pointer',
    display: 'inline-block',
    padding: '15px 30px',  // increase padding to make the button bigger
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
        transform: 'translateY(10px)', // Gives the effect of the button being pressed
        boxShadow: '0px 0px 0 0 #000', // Reduces shadow to give depth perception
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
            }}
            >
            <Typography
              level="h1"
              component="h1"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                mt: 3, // Added top margin
                mb: 1, // Added bottom margin
              }}
            >
              Everybody is an Influencer
            </Typography>
            <Typography
              level="h5"
              component="h2"
              sx={{
                textAlign: 'center',
                mb: 3, // Added bottom margin
              }}
            >
              Unlock your full potential and grow with our marketing platform.
            </Typography> <Box sx={{ display: 'flex', gap: 2 }}>
              <CustomButton>
                SIGN ME UP!
              </CustomButton>
              <CustomButton>
                LOGIN
              </CustomButton>
            </Box>
            <img
              src={HeroPic}
              alt="divider"
              style={{
                width: '100%',
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Card>
        </Box>
      </Sheet>
    </CssVarsProvider>
  );
};

export default LandingPage;