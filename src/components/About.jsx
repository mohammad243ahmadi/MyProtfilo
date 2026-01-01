import React from 'react';
import { Box, Typography, Grid, Container, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { useTheme as useCustomTheme } from '../context/ThemeContext';
import ScrollAnimation from './common/ScrollAnimation';

const About = () => {
  const { currentTheme } = useCustomTheme();
  
  // Placeholder about section image
  const aboutImageUrl = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
  
  // Derive RGB values for the theme color
  const primaryRGB = {
    r: parseInt(currentTheme.primary.slice(1, 3), 16),
    g: parseInt(currentTheme.primary.slice(3, 5), 16),
    b: parseInt(currentTheme.primary.slice(5, 7), 16)
  };
  
  // Title line animation
  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '60px',
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };
  
  // Avatar animation
  const avatarVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        delay: 0.2
      }
    }
  };
  
  // Technologies
  const technologies = [
    'Python',
    'React.js',
    'JavaScript',
    'Node.js',
    'PostgreSQL',
    'Web Development',
    'express.js'
  ];

  return (
    <Parallax
      bgImage={aboutImageUrl}
      strength={300}
      blur={{ min: -10, max: 10 }}
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
          <ScrollAnimation animation="slideUp" threshold={0.1}>
            <Typography
              variant="h3"
              sx={{
                color: 'text.primary',
                mb: 1,
                display: 'inline-block',
                position: 'relative',
              }}
            >
              About Me
              <motion.div
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  height: '4px',
                  backgroundColor: currentTheme.primary,
                  borderRadius: '2px',
                }}
              />
            </Typography>
          </ScrollAnimation>

          <Grid container spacing={6} alignItems="center" sx={{ mt: 5 }}>
            <Grid item xs={12} md={6}>
              <ScrollAnimation animation="slideRight" delay={0.2} threshold={0.1}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '1.1rem'
                  }}
                >
                  Hello! I'm <span style={{ color: currentTheme.primary, fontWeight: 700, background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>M.Hussain Ahmadi</span>, a passionate Python and web developer with a strong
                  foundation in building modern web applications. My journey started with Python and has evolved into comprehensive full-stack web development expertise.
                </Typography>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slideRight" delay={0.3} threshold={0.1}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '1.1rem'
                  }}
                >
                  I'm passionate about teaching at <span style={{ color: currentTheme.primary, fontWeight: 600 }}>Safir Educational Center</span>, where I guide students to master programming concepts through hands-on projects and practical exercises, building strong foundations for their coding careers.
                </Typography>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slideUp" delay={0.4} threshold={0.1}>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.primary',
                    mb: 3,
                    fontWeight: 700,
                    letterSpacing: '0.5px'
                  }}
                >
                  Technologies I work with:
                </Typography>
                
                <Grid container spacing={2}>
                  {technologies.map((tech, index) => (
                    <Grid item xs={6} sm={4} key={tech}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            p: 1.8,
                            borderRadius: '14px',
                            background: `linear-gradient(135deg, rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.12), rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.06))`,
                            border: `1.5px solid rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.2)`,
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            backdropFilter: 'blur(10px)',
                            '&:hover': {
                              transform: 'translateY(-5px)',
                              background: `linear-gradient(135deg, rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.18), rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.12))`,
                              borderColor: currentTheme.primary,
                              color: 'text.primary',
                              boxShadow: `0 8px 20px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.2)`,
                            }
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                            <span style={{ color: currentTheme.primary, marginRight: '8px', fontSize: '1.2em' }}>✦</span>
                            {tech}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </ScrollAnimation>
            </Grid>
            
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <ScrollAnimation animation="scale" threshold={0.1}>
                <motion.div
                  variants={avatarVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      maxWidth: '380px',
                      p: 2,
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(135deg, rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.2), rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.05))`,
                        border: `2px solid rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.4)`,
                        borderRadius: '24px',
                        zIndex: 1,
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                    <Avatar
                      src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="M.Hussain Ahmadi"
                      variant="rounded"
                      sx={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '1/1',
                        borderRadius: '16px',
                        position: 'relative',
                        zIndex: 2,
                        boxShadow: `0 20px 40px rgba(0, 0, 0, 0.4)`,
                        filter: 'grayscale(20%) contrast(1.1)',
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          filter: 'grayscale(0%) contrast(1)',
                        }
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: -15,
                        right: -15,
                        width: '100px',
                        height: '100px',
                        background: `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1)`,
                        borderRadius: '50%',
                        filter: 'blur(30px)',
                        zIndex: 0
                      }}
                    />
                  </Box>
                </motion.div>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Parallax>
  );
};

export default About; 