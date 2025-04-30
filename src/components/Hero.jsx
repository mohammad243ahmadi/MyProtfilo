import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

// Hero component with parallax background
const Hero = () => {
  // Placeholder hero image URL (replace with your preferred image)
  const heroImageUrl = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

  return (
    <Parallax
      bgImage={heroImageUrl}
      strength={500}
      blur={{ min: -5, max: 15 }}
    >
      <Box
        id="hero"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(10, 25, 47, 0.85)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'primary.main',
                mb: 2,
                fontFamily: 'monospace',
              }}
            >
              Hi, my name is
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: 'text.primary',
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              }}
            >
              M.Hussain Ahmadi
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: 'text.secondary',
                mb: 4,
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              I build things for the web.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mb: 5,
              }}
            >
              I'm a Python and web developer specializing in building exceptional digital experiences.
              Currently, I'm focused on building responsive web applications and backend services
              that solve real-world problems.
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: 'primary.main',
                  borderColor: 'primary.main',
                  borderRadius: '4px',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    borderColor: 'primary.light',
                    backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  },
                }}
                href="#contact"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Box>
    </Parallax>
  );
};

export default Hero; 