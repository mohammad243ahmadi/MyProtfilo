import React from 'react';
import { Box, Typography, Grid, Paper, Container, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

// Enhanced skills array with categories
const skills = [
  { name: 'Python', level: 90, category: 'Programming Languages' },
  { name: 'JavaScript', level: 80, category: 'Programming Languages' },
  { name: 'HTML/CSS', level: 85, category: 'Frontend' },
  { name: 'React', level: 75, category: 'Frontend' },
  { name: 'Node.js', level: 70, category: 'Backend' },
  { name: 'Flask', level: 70, category: 'Backend' },
  { name: 'PostgreSQL', level: 75, category: 'Databases' },
  { name: 'MySQL', level: 80, category: 'Databases' },
  { name: 'Git', level: 80, category: 'Tools' },
  { name: 'VS Code', level: 90, category: 'Tools' },
];

// Group skills by category
const groupedSkills = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {});

const Skills = () => {
  // Placeholder skills section image (replace with preferred image)
  const skillsImageUrl = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
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
      bgImage={skillsImageUrl}
      strength={300}
      blur={{ min: -15, max: 15 }}
    >
      <Box
        id="skills"
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
            backgroundColor: 'rgba(10, 25, 47, 0.93)',
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
                Skills
              </Typography>
            </motion.div>
            
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 5,
                maxWidth: '700px',
              }}
            >
              I've worked with a variety of technologies in the web development world, from frontend to backend,
              and I'm always expanding my knowledge to stay current with the latest technologies.
            </Typography>

            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <Box key={category} sx={{ mb: 6 }}>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'primary.main',
                      mb: 3,
                      fontWeight: 500,
                    }}
                  >
                    {category}
                  </Typography>
                </motion.div>

                <Grid container spacing={3}>
                  {categorySkills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={skill.name}>
                      <motion.div 
                        variants={itemVariants}
                        whileHover={{ translateY: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Paper
                          elevation={2}
                          sx={{
                            p: 3,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            background: 'linear-gradient(145deg, rgba(17, 34, 64, 0.6), rgba(27, 44, 74, 0.8))',
                            borderRadius: '10px',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(100, 255, 218, 0.1)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                              boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
                            },
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              color: 'text.primary',
                              mb: 1,
                            }}
                          >
                            {skill.name}
                          </Typography>
                          
                          <Box sx={{ mt: 2 }}>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: 'text.secondary',
                                mb: 1,
                                display: 'flex',
                                justifyContent: 'space-between'
                              }}
                            >
                              <span>Proficiency</span>
                              <span>{skill.level}%</span>
                            </Typography>
                            <LinearProgress 
                              variant="determinate" 
                              value={skill.level} 
                              sx={{
                                height: 6,
                                borderRadius: 5,
                                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                                '& .MuiLinearProgress-bar': {
                                  borderRadius: 5,
                                  backgroundColor: 'primary.main',
                                }
                              }}
                            />
                          </Box>
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
          </motion.div>
        </Container>
      </Box>
    </Parallax>
  );
};

export default Skills; 