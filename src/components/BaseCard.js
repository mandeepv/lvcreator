import Box from '@mui/material/Box';
import Card from '@mui/joy/Card';
import * as React from 'react';

const BaseCard = ({ children }) => (
  <Box
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
        {children}
      </Card>
    </Box>
  </Box>
);

export default BaseCard;
