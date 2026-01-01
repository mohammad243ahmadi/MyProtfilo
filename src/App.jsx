import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container, Typography, Button } from '@mui/material';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
      borderRadius: 16,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            padding: '12px 24px',
            borderRadius: '14px',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          },
          outlined: {
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
              transform: 'translateY(-2px)',
            },
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: '14px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              },
              '&.Mui-focused': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              }
            }
          }
        }
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

  const ogImage = "https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0";

  const PageWrapper = ({ title, subtitle, children }) => (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background: 'background.gradient',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '2px' }}>
            {subtitle || 'Explore'}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 700, mt: 1 }}>
            {title}
          </Typography>
          <Box
            sx={{
              mt: 2,
              width: 64,
              height: 4,
              borderRadius: 999,
              background: `linear-gradient(90deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
            }}
          />
        </Box>
        {children}
      </Container>
    </Box>
  );

  const HomePage = () => (
    <>
      <Helmet>
        <title>Home | M. Hussain Ahmadi</title>
        <meta
          name="description"
          content="Python and web developer delivering modern web apps, teaching programming, and creating impactful solutions."
        />
        <meta property="og:title" content="Home | M. Hussain Ahmadi" />
        <meta property="og:description" content="Python and web developer delivering modern web apps, teaching programming, and creating impactful solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      <Box component="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Box>
    </>
  );

  const AboutPage = () => (
    <>
      <Helmet>
        <title>About | M. Hussain Ahmadi</title>
        <meta
          name="description"
          content="Learn about M. Hussain Ahmadi’s background, mission, and approach to building reliable software and teaching programming."
        />
        <meta property="og:title" content="About | M. Hussain Ahmadi" />
        <meta property="og:description" content="Learn about M. Hussain Ahmadi’s background, mission, and approach to building reliable software and teaching programming." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      <PageWrapper title="About Me" subtitle="Story & Focus">
        <About />
      </PageWrapper>
    </>
  );

  const SkillsPage = () => (
    <>
      <Helmet>
        <title>Teaching & Skills | M. Hussain Ahmadi</title>
        <meta
          name="description"
          content="Explore teaching, Python expertise, and web development skills including modern frameworks and best practices."
        />
        <meta property="og:title" content="Teaching & Skills | M. Hussain Ahmadi" />
        <meta property="og:description" content="Explore teaching, Python expertise, and web development skills including modern frameworks and best practices." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      <PageWrapper title="Teaching & Skills" subtitle="What I Share">
        <Skills />
      </PageWrapper>
    </>
  );

  const ProjectsPage = () => (
    <>
      <Helmet>
        <title>Projects | M. Hussain Ahmadi</title>
        <meta
          name="description"
          content="A selection of projects showcasing web applications, teaching tools, and Python solutions built by M. Hussain Ahmadi."
        />
        <meta property="og:title" content="Projects | M. Hussain Ahmadi" />
        <meta property="og:description" content="A selection of projects showcasing web applications, teaching tools, and Python solutions built by M. Hussain Ahmadi." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      <PageWrapper title="Projects" subtitle="Built with Passion">
        <Projects />
      </PageWrapper>
    </>
  );

  const ContactPage = () => (
    <>
      <Helmet>
        <title>Contact | M. Hussain Ahmadi</title>
        <meta
          name="description"
          content="Get in touch to collaborate on web development, Python solutions, or programming education projects."
        />
        <meta property="og:title" content="Contact | M. Hussain Ahmadi" />
        <meta property="og:description" content="Get in touch to collaborate on web development, Python solutions, or programming education projects." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      <PageWrapper title="Contact" subtitle="Let’s Collaborate">
        <Contact />
      </PageWrapper>
    </>
  );

  const NotFoundPage = () => (
    <>
      <Helmet>
        <title>404 | M. Hussain Ahmadi</title>
        <meta
          name="description"
          content="The page you’re looking for doesn’t exist. Return home to continue exploring the portfolio."
        />
        <meta property="og:title" content="404 | M. Hussain Ahmadi" />
        <meta property="og:description" content="The page you’re looking for doesn’t exist. Return home to continue exploring the portfolio." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      <PageWrapper title="Page Not Found" subtitle="404">
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
          The page you’re looking for doesn’t exist. Head back to the homepage to continue exploring.
        </Typography>
        <Button
          variant="outlined"
          component={RouterLink}
          to="/"
          sx={{ borderRadius: 999, px: 3, py: 1.2 }}
        >
          Go Home
        </Button>
      </PageWrapper>
    </>
  );

  return (
    <HelmetProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet>
          <meta name="theme-color" content={currentTheme.primary} />
          <meta name="author" content="M. Hussain Ahmadi" />
        </Helmet>
        <Box sx={{ 
          minHeight: '100vh', 
          bgcolor: 'background.default',
          background: 'background.gradient',
          color: 'text.primary',
          overflow: 'hidden'
        }}>
          <Navbar />
          <Box component="main" sx={{ pt: { xs: 10, md: 12 } }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Box>
          <CustomizeDialog />
        </Box>
      </MuiThemeProvider>
    </HelmetProvider>
  );
};

export default App;