import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import NavBar from '../components/NavBar';
import Box from '@mui/material/Box';
import Card from '@mui/joy/Card';
import Button from '@mui/joy/Button';
import { styled } from '@mui/system';  
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import HeroPic from '../assets/images/hero-divider-1500w.png'
import Link from '@mui/joy/Link';

const CustomButton = styled(Button)({
    color: '#000',
    cursor: 'pointer',
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: 15,
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

const SignInPage = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        setData({ email, password });
        if (email === "influencer@email.com" && password === "influencer") {
            navigate('/home');
        }
    };
    
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
                <NavBar showMenuButton={false} />
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
                        <Card
                            sx={{
                                backgroundColor: '#9ddadb',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '20px',
                                borderRadius: '10px',
                                margin: '20px',
                                width: { xs: '80%', sm: '80%', md: '25%', lg: '25%', xl: '25%%' },
                            }}
                        >
                            <form onSubmit={handleSubmit}>
                                <Typography level="h4" component="h1">
                                    Welcome!
                                </Typography>
                                <Typography level="body-sm">
                                    Sign in to continue.
                                </Typography>
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="johndoe@email.com"
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        placeholder="password"
                                    />
                                </FormControl>
                                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                    <CustomButton type="submit" sx={{ mt: 3, mb:3}}>
                                        Sign In
                                    </CustomButton>
                                </Box>

                                <Typography
                                    endDecorator={<Link href="/signup">Sign Up</Link>}
                                    fontSize="sm"
                                    sx={{ alignSelf: 'center' ,}}
                                >
                                    Don't have an account yet?
                                </Typography>
                            </form>
                        </Card>
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

export default SignInPage;
