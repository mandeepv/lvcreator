import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';
import '@fontsource/inter';

const TestingPage = () => {
    const navigate = useNavigate();

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
          <Button onClick={() => navigate("/signup")}>Go to Sign Up Page</Button>
          <Button onClick={() => navigate("/signin")}>Go to Sign In Page</Button>
          <Button onClick={() => navigate("/home")}>Go to Home Page</Button>
          <Button onClick={() => navigate("/campaign")}>Go to Campaign Page</Button>
        </Sheet>
      </CssVarsProvider>
    );
};

export default TestingPage;
