import React from 'react';
import { Box, Typography, Grid, Paper, Button, Container, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

// Enhanced project data with images
const projects = [
  {
    title: 'Fresco Italian Restaurant',
    description: 'A modern, responsive website for an upscale Italian restaurant built with React and styled-components..',
    technologies: ['React', "javaScript","paralix"],
    github: 'https://github.com/mohammad243ahmadi/ItalianRestaurant',
    live: 'https://italian-restaurant-mu.vercel.app/',
    image: 'https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  }
];

const Projects = () => {
  // Placeholder projects section image
  const projectsImageUrl = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80';
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Parallax
      bgImage={projectsImageUrl}
      strength={400}
      blur={{ min: -15, max: 15 }}
    >
      <Box
        id="projects"
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
            backgroundColor: 'rgba(10, 25, 47, 0.94)',
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
                Projects
              </Typography>
            </motion.div>
            
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 6,
                maxWidth: '700px',
              }}
            >
              Here are my project that I am working on it now. 
            </Typography>

            <Grid container spacing={6}>
              {projects.map((project, index) => (
                <Grid item xs={12} key={project.title}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        p: 0,
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                        background: 'linear-gradient(145deg, rgba(17, 34, 64, 0.7), rgba(27, 44, 74, 0.9))',
                        borderRadius: '10px',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(100, 255, 218, 0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: '100%', md: '50%' },
                          height: { xs: '250px', md: '400px' },
                          overflow: 'hidden',
                          position: 'relative',
                        }}
                      >
                        <Box
                          component="img"
                          src={project.image}
                          alt={project.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                            '&:hover': {
                              transform: 'scale(1.05)',
                            },
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          width: { xs: '100%', md: '50%' },
                          p: 4,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            color: 'primary.main',
                            mb: 2,
                            fontWeight: 600,
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'text.secondary',
                            mb: 3,
                            lineHeight: 1.8,
                          }}
                        >
                          {project.description}
                        </Typography>
                        <Stack 
                          direction="row" 
                          spacing={1} 
                          flexWrap="wrap" 
                          sx={{ 
                            mb: 4,
                            gap: 1
                          }}
                        >
                          {project.technologies.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                color: 'primary.main',
                                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                                fontWeight: 500,
                                mb: 1,
                              }}
                            />
                          ))}
                        </Stack>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: 2,
                            mt: 'auto',
                          }}
                        >
                          <Button
                            variant="outlined"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: 'primary.main',
                              borderColor: 'primary.main',
                              '&:hover': {
                                borderColor: 'primary.light',
                                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                              },
                            }}
                          >
                            GitHub
                          </Button>
                          <Button
                            variant="contained"
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              backgroundColor: 'primary.main',
                              color: 'background.default',
                              '&:hover': {
                                backgroundColor: 'primary.dark',
                              },
                            }}
                          >
                            Live Demo
                          </Button>
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Parallax>
  );
};

export default Projects; 