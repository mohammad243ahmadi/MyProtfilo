import React from 'react';
import { Box, Typography, Grid, Container, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

const About = () => {
  // Placeholder about section image (replace with preferred image)
  const aboutImageUrl = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
  
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Parallax
      bgImage={aboutImageUrl}
      strength={300}
      blur={{ min: -15, max: 15 }}
    >
      <Box
        id="about"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 10,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(10, 25, 47, 0.9)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                sx={{
                  color: 'text.primary',
                  mb: 5,
                  display: 'inline-block',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: 0,
                    width: '60px',
                    height: '4px',
                    backgroundColor: 'primary.main',
                  },
                }}
              >
                About Me
              </Typography>
            </motion.div>

            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                    }}
                  >
                    Hello! I'm M.Hussain Ahmadi, a passionate Python and web developer with a strong
                    foundation in building modern web applications. My journey in programming started
                    with Python, and I've since expanded my skills to include full-stack web development.
                    then I started teaching programming languages like python in Safir educational center.
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                    }}
                  >
                    I enjoy creating efficient, scalable, and user-friendly applications that solve
                    real-world problems. My approach combines clean code practices with modern
                    development methodologies to deliver high-quality solutions.
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      mb: 2,
                    }}
                  >
                    Here are a few technologies I've been working with recently:
                  </Typography>
                </motion.div>

                <Grid container spacing={2}>
                  {[
                    'Python',
                    'React.js',
                    'JavaScript',
                    'Node.js',
                    'PostgreSQL',
                  ].map((tech) => (
                    <Grid item xs={6} sm={4} key={tech}>
                      <motion.div variants={itemVariants}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            '&::before': {
                              content: '"▹"',
                              color: 'primary.main',
                              mr: 1,
                              fontSize: '1.2rem',
                            },
                          }}
                        >
                          {tech}
                        </Typography>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: { xs: '250px', sm: '300px', md: '350px' },
                      height: { xs: '250px', sm: '300px', md: '350px' },
                      borderRadius: '10px',
                      overflow: 'hidden',
                      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '15px',
                        left: '15px',
                        width: '100%',
                        height: '100%',
                        border: '2px solid',
                        borderColor: 'primary.main',
                        borderRadius: '10px',
                        zIndex: -1,
                      },
                    }}
                  >
                    <Avatar
                      src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="M.Hussain Ahmadi"
                      sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '10px',
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Parallax>
  );
};

export default About; 