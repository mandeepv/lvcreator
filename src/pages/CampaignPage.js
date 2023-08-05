import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Box from '@mui/joy/Box';
import NavBar from '../components/NavBar';

const CampaignPage = () => {
  const [campaignData, setCampaignData] = useState({
    name: 'Summer Sale 2023',
    description: 'This is a social media campaign to promote our Summer Sale 2023.',
    platforms: ['Facebook', 'Instagram', 'Twitter'],
    startDate: '2023-06-01',
    endDate: '2023-08-30',
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // Load the campaign data here from an API or other data source
    // setCampaignData(loadedData);
  }, []);

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
        <Box
          sx={{
            flexGrow: 1,
            borderRadius: 'md',
          }}
        >
          <NavBar showMenuButton />
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
            <Typography level="h4" component="h1">
              {campaignData.name}
            </Typography>
            <Typography level="body-sm">
              {campaignData.description}
            </Typography>
            <Typography level="body-sm">
              Platforms: {campaignData.platforms.join(', ')}
            </Typography>
            <Typography level="body-sm">
              Start Date: {campaignData.startDate}
            </Typography>
            <Typography level="body-sm">
              End Date: {campaignData.endDate}
            </Typography>
            <Button sx={{ mt: 1 }} onClick={handleOpen}>
              Apply to Campaign
            </Button>
          </Sheet>
        </Box>
      </Sheet>
      <Modal open={open} onClose={handleClose}>
        <ModalDialog
          sx={{
            width: ['90%', '60%', '40%'],
            maxWidth: '600px',
            mx: 'auto',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <ModalClose />
          <Typography align="center">Application Submitted</Typography>
          <Typography align="center">
            Your application has been submitted and is under review. It will appear in 'Your Campaigns' if selected.
          </Typography>
          <Link to="/home">
            <Button onClick={handleClose}>Go to Your Campaigns</Button>
          </Link>
        </ModalDialog>
      </Modal>
    </CssVarsProvider>
  );
};

export default CampaignPage;
