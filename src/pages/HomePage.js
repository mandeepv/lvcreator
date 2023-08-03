import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import SearchRounded from '@mui/icons-material/SearchRounded';
import { CssVarsProvider } from '@mui/joy';
import Sheet from '@mui/joy/Sheet';
import React from 'react';
import CampaignCard from '../components/CampaignCard';
import AppliedCampaignCard from '../components/AppliedCampaignCard';
import WorkCampaignCard from '../components/WorkCampaignCard';


export default function TabsPageExample() {
  const [index, setIndex] = React.useState(0);
  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          width: { xs: '100%', md: 500 },
          mx: 'auto',
          my: 4,
          py: 3,
          px: { xs: 1, md: 2 },
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
      >
      
    <Box
      sx={{
        flexGrow: 1,
        m: -3,
        overflowX: 'hidden',
        borderRadius: 'md',
      }}
    >
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
              1
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
        <Box
          sx={(theme) => ({
            '--bg': theme.vars.palette.background.surface,
            background: 'var(--bg)',
            boxShadow: '0 0 0 100vmax var(--bg)',
            clipPath: 'inset(0 -100vmax)',
            display: 'flex',
          })}
        >
          <TabPanel value={0} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <Typography
              level="h2"
              component="div"
              fontSize="lg"
              textColor="text.primary"
              
            >
              <WorkCampaignCard/>
            </Typography>
        




          </TabPanel>
          <TabPanel value={1}>
            <Typography
              level="h2"
              component="div"
              fontSize="lg"
              textColor="text.primary"
            >
              <CampaignCard/>
              <br/>
              <CampaignCard/>
              <br/>
              <AppliedCampaignCard/>
              <br/>
              <AppliedCampaignCard/>
            </Typography>
          </TabPanel>
        </Box>
      </Tabs>
    </Box>
    </Sheet>
    </CssVarsProvider>
  );
}
