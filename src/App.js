import React from 'react';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import CampaignPage from './pages/CampaignPage';
import TestingPage from './pages/TestingPage';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';

import '@fontsource/inter';

import { BrowserRouter as Router, Route, Routes }from 'react-router-dom';
import CampaignInstructionsPage from './pages/CampaignInstructionsPage';
import NavBarTester from './pages/NavBarTester';
import InfluencerProfilePage from './pages/InfluencerProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/testing" element={<TestingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/campaign" element={<CampaignPage />} />
        <Route path="/instructions" element={<CampaignInstructionsPage />} />
        <Route path='/profile' element={<InfluencerProfilePage />} />




        
        <Route path="/testNav" element={<NavBarTester />} />
      </Routes>
    </Router>
  );
}

export default App;
