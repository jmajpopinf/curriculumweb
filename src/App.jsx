import { Box, CssBaseline, Divider, ThemeProvider, ToggleButton, ToggleButtonGroup, createTheme } from '@mui/material';
import React from 'react';
import getLPTheme from './getLPTheme';
import PropTypes from 'prop-types';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Features from './components/Features';
import Education from './components/Education';
import Work from './components/Work';

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme}){
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color='primary'
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label='Platform'
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
           PointerEvent: 'none',
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1}} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}> Material Design 2 </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

function App() {
  const [mode, setMode] = React.useState('dark');
  const [showCustomTheme, setShowCustomTheme] = React.useState(false);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode  = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  //https://github.com/mui/material-ui/blob/v5.15.18/docs/data/material/getting-started/templates/landing-page/LandingPage.js
  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode}/>
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <Divider />
        <Features />
        <Divider />
        <Education />
        <Divider />
        <Work />
      </Box>
    </ThemeProvider>
  );
}

export default App;
