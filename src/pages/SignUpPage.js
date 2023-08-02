import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import { useState } from 'react';
import Typography from '@mui/joy/Typography';
import '@fontsource/inter';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
  
      const email = event.target.elements.email.value;
      const password = event.target.elements.password.value;
      const instaid = event.target.elements.instaid.value;  
      setData({ email, password, instaid });
  
      if (email === "influencer@email.com" && password === "influencer") {
        navigate('/home');
      }
    };
  
    return (
      <CssVarsProvider>
        <Sheet
          sx={{
            width: 300,
            mx: 'auto',
            my: 4,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
        >
          <form onSubmit={handleSubmit}>  {/* Change here */}
            <div>
              <Typography level="h4" component="h1">
                Welcome!
              </Typography>
              <Typography level="body-sm">Sign up to continue.</Typography>
            </div>
    
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
            <FormControl>
              <FormLabel>Instagram Id</FormLabel>
              <Input
                name="instaid"
                type="text"
                placeholder="instaid123"
              />
            </FormControl>
            <Button type="submit" sx={{ mt: 1 }}>  {/* Change here */}
              Sign Up
            </Button>
            <Typography
              endDecorator={<Link href="/signin">Sign In</Link>}
              fontSize="sm"
              sx={{ alignSelf: 'center' }}
            >
              Already have an account?
            </Typography>
          </form>  {/* Change here */}
        </Sheet>
      </CssVarsProvider>
    );
};

export default SignUpPage;
