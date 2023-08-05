import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import { CssVarsProvider } from '@mui/joy';
import Sheet from '@mui/joy/Sheet';
import React from 'react';
import CampaignCard from '../components/CampaignCard';
import AppliedCampaignCard from '../components/AppliedCampaignCard';
import WorkCampaignCard from '../components/WorkCampaignCard';
import UnderReviewCampaignCard from '../components/UnderReviewCampaignCard';
import NavBar from '../components/NavBar';

export default function TabsPageExample() {
  const [index, setIndex] = React.useState(0);
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
          <Tabs
            aria-label="Pipeline"
            value={index}
            onChange={(event, value) => setIndex(value)}
          >
            <TabList
              sx={{
                pt: 2,
                justifyContent: 'center',
                [`&& .${tabClasses.root}`]: {
                  flex: 'initial',
                  bgcolor: 'transparent',
                  '&:hover': {
                    bgcolor: 'transparent',
                  },
                  [`&.${tabClasses.selected}`]: {
                    color: 'primary.plainColor',
                    '&::after': {
                      height: '3px',
                      borderTopLeftRadius: '3px',
                      borderTopRightRadius: '3px',
                      bgcolor: 'primary.500',
                    },
                  },
                },
              }}
            >
              <Tab indicatorInset>
                Your Campaigns{' '}
                <Chip
                  size="sm"
                  variant="soft"
                  color={index === 0 ? 'primary' : 'neutral'}
                  sx={{ ml: 1 }}
                >
                  2
                </Chip>
              </Tab>
              <Tab indicatorInset>
                New Campaigns{' '}
                <Chip
                  size="sm"
                  variant="soft"
                  color={index === 1 ? 'primary' : 'neutral'}
                  sx={{ ml: 1 }}
                >
                  4
                </Chip>
              </Tab>
            </TabList>
            <TabPanel value={0} sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
  <Box sx={{ maxWidth: '500px', width: '100%', marginBottom: 2, display: 'flex', justifyContent: 'center' }}>
    <WorkCampaignCard />
  </Box>
  <Box sx={{ maxWidth: '500px', width: '100%', display: 'flex', justifyContent: 'center' }}>
    <UnderReviewCampaignCard />
  </Box>
</TabPanel>
<TabPanel value={1} sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
  <Box sx={{ maxWidth: '500px', width: '100%', marginBottom: 2, display: 'flex', justifyContent: 'center' }}>
    <CampaignCard />
  </Box>
  <Box sx={{ maxWidth: '500px', width: '100%', marginBottom: 2, display: 'flex', justifyContent: 'center' }}>
    <CampaignCard />
  </Box>
  <Box sx={{ maxWidth: '500px', width: '100%', marginBottom: 2, display: 'flex', justifyContent: 'center' }}>
    <AppliedCampaignCard />
  </Box>
  <Box sx={{ maxWidth: '500px', width: '100%', display: 'flex', justifyContent: 'center' }}>
    <AppliedCampaignCard />
  </Box>
</TabPanel>



          </Tabs>
        </Box>
      </Sheet>
    </CssVarsProvider>
  );
}
