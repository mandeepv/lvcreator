import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { CssVarsProvider } from '@mui/joy';
import Sheet from '@mui/joy/Sheet';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Card from '@mui/joy/Card';
import { Button } from '@mui/joy';

export default function InfluencerProfilePage() {
  const [socials, setSocials] = useState({
    instagram: 'instagram_handle',
    twitter: 'twitter_handle',
    // add more as necessary
  });
  const [editPlatform, setEditPlatform] = useState(null);
  const [newHandle, setNewHandle] = useState('');

  const handleSocialUpdate = (platform, handle) => {
    setSocials({
      ...socials,
      [platform]: handle,
    });
    setEditPlatform(null);
  };

  const startEdit = (platform) => {
    setNewHandle(socials[platform]);
    setEditPlatform(platform);
  };

  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          width: { xs: '100%', md: '100%', lg: '98%', xl: '100%' }, // Matching CampaignPage
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
        <Box sx={{ flexGrow: 1, borderRadius: 'md' }}>
          <NavBar showMenuButton />
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              margin: '1em 0',
              padding: '1em',
            }}
          >
            <Typography variant="h3">insta123</Typography>
            <Typography variant="h5">Posts: 200</Typography>
            <Typography variant="h5">Followers: 3000</Typography>
            <Typography variant="h5">Following: 500</Typography>
          </Card>
          <Card
  sx={{
    margin: '1em 0',
    padding: '1em',
  }}
>
  <Typography variant="h6" align="center">Social Media Handles:</Typography>
  {Object.entries(socials).map(([platform, handle]) => (
    <Box
      key={platform}
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center aligning
        alignItems: 'center',
        margin: '0.5em 0',
      }}
    >
      {editPlatform === platform ? (
        <form onSubmit={() => handleSocialUpdate(platform, newHandle)}>
          <input
            type="text"
            value={newHandle}
            onChange={(e) => setNewHandle(e.target.value)}
          />
          <Button type="submit" color="primary" variant="contained">
            Save
          </Button>
        </form>
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}> {/* Adjusting gap */}
          <Typography variant="body1" align="center">
            {platform}: {handle}
          </Typography>
          <Button color="primary" variant="contained" onClick={() => startEdit(platform)}>
            Update
          </Button>
        </Box>
      )}
    </Box>
  ))}
</Card>

        </Box>
      </Sheet>
    </CssVarsProvider>
  );
}
