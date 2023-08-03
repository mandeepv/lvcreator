import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import { useState, useEffect } from 'react';
import Typography from '@mui/joy/Typography';
import '@fontsource/inter';
import Button from '@mui/joy/Button';

const CampaignPage = () => {
    const [campaignData, setCampaignData] = useState({
      name: 'Summer Sale 2023',
      description: 'This is a social media campaign to promote our Summer Sale 2023.',
      platforms: ['Facebook', 'Instagram', 'Twitter'],
      startDate: '2023-06-01',
      endDate: '2023-08-30',
    });

    useEffect(() => {
      // Load the campaign data here from an API or other data source
      // setCampaignData(loadedData);
    }, []);

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
          <Button sx={{ mt: 1 }} onClick={() => alert('Applied to Campaign')}>
            Apply to Campaign
          </Button>
        </Sheet>
      </CssVarsProvider>
    );
};

export default CampaignPage;
