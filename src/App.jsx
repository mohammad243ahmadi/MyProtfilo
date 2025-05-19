import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomizeDialog from './components/CustomizeDialog';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const AppContent = () => {
  const { currentTheme, currentFont } = useTheme();
  
  // Updated theme with dynamic color scheme
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: currentTheme.primary,
        light: currentTheme.secondary,
        dark: currentTheme.primary,
      },
      secondary: {
        main: currentTheme.secondary,
        light: currentTheme.secondary,
        dark: currentTheme.primary,
      },
      accent: {
        main: '#FFE66D', // Accent yellow
        light: '#FFF0A8',
        dark: '#E6C92A',
      },
      background: {
        default: '#1A1A2E', // Deeper blue background
        paper: '#16213E',
        darker: '#0F172A',
        gradient: 'linear-gradient(120deg, #1A1A2E 0%, #16213E 100%)',
      },
      text: {
        primary: '#F7F7F7',
        secondary: '#B2B2B2',
        accent: currentTheme.primary,
      },
    },
    typography: {
      fontFamily: currentFont.family,
      h1: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 500,
      },
      h6: {
        fontWeight: 500,
      },
      body1: {
        lineHeight: 1.7,
      },
      body2: {
        lineHeight: 1.6,
      },
    },
    shape: {
      borderRadius: 12, // Increased border radius
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
            padding: '10px 20px',
            borderRadius: '30px', // Rounded buttons
            transition: 'all 0.3s ease',
          },
          outlined: {
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            },
          },
          contained: {
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.25)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
            backgroundImage: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7))',
            backdropFilter: 'blur(8px)',
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh', 
        bgcolor: 'background.default',
        background: 'background.gradient',
        color: 'text.primary',
        overflow: 'hidden'
      }}>
        <Navbar />
        <Box>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Box>
        <CustomizeDialog />
      </Box>
    </MuiThemeProvider>
  );
};

export default App; 