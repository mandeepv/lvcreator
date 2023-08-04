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
import UnderReviewCampaignCard from '../components/UnderReviewCampaignCard';
import NavBar from '../components/NavBar';
import Card from '@mui/joy/Card';

import IconButton from '@mui/joy/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';


export default function TabsPageExample() {
  const [index, setIndex] = React.useState(0);
  return (
    <CssVarsProvider>
      
      <Sheet
        sx={{
          width: { xs: '100%', md: 500 },
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
<NavBar showMenuButton/>
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
          <TabPanel value={0} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <Typography
              level="h2"
              component="div"
              fontSize="lg"
              textColor="text.primary"
              
            >
              <WorkCampaignCard/>
              <br/>
              <UnderReviewCampaignCard/>
            </Typography>
        




          </TabPanel>
          <TabPanel value={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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

      </Tabs>
    </Box>
    </Sheet>
    </CssVarsProvider>
  );
}
