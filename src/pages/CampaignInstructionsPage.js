import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { useState } from 'react';
import Modal from '@mui/joy/Modal';
import { ModalDialog } from '@mui/joy';
import { ModalClose } from '@mui/joy';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar'; // Make sure to import your NavBar component correctly

const CampaignInstructionsPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <Sheet
          sx={{
            width: {
              xs: '300px',
              sm: '300px',
              md: '400px',
              lg: '600px',
              xl: '800px',
            },
            mx: 'auto',
            my: 4,
            py: 3,
            px: { xs: 2, sm: 2, md: 3, lg: 4, xl: 5 },
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
        >
          <Typography level="h4" component="h1">
            Zomato Content Creation Guidelines
          </Typography>
          <Typography level="body-sm">
            Welcome, influencers! We're excited to have you on board for our latest campaign. Here's what we're looking for in your content:
          </Typography>
          <ul>
            <li><Typography level="body-sm">Showcase our app's user-friendly interface and how easy it is to order food.</Typography></li>
            <li><Typography level="body-sm">Highlight the wide range of restaurant options available.</Typography></li>
            <li><Typography level="body-sm">If you have a favorite restaurant or dish, make sure to give it a shout-out!</Typography></li>
            <li><Typography level="body-sm">Mention our speedy delivery times and excellent customer service.</Typography></li>
            <li><Typography level="body-sm">Please make sure to disclose the partnership with a #ad or #sponsored tag.</Typography></li>
          </ul>
          <Typography level="body-sm">
            We can't wait to see what you create. If you have any questions, don't hesitate to reach out to our team. Happy creating!
          </Typography>
          <Input type="text"></Input><Button onClick={handleOpen}>SUBMIT POST LINK</Button>
        </Sheet>
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
          <Typography align="center">Content Submitted</Typography>
          <Typography align="center">
            Your content has been submitted and is under review. We'll pay you as soon as the content passes the reviews.
          </Typography>
          <Link to="/home">
            <Button onClick={handleClose}>Go to Your Campaigns</Button>
          </Link>
        </ModalDialog>
      </Modal>
    </CssVarsProvider>
  );
};
export default CampaignInstructionsPage;
