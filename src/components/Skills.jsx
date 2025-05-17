import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Container, LinearProgress, Button, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax } from 'react-parallax';

// Initial skills array with categories
const initialSkills = [
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

// Color theme presets
const colorPresets = [
  { primary: '#FF6B6B', secondary: '#4ECDC4' }, // Current theme (coral)
  { primary: '#3498db', secondary: '#2980b9' }, // Blue
  { primary: '#2ecc71', secondary: '#27ae60' }, // Green
  { primary: '#e74c3c', secondary: '#c0392b' }, // Red
  { primary: '#f39c12', secondary: '#d35400' }, // Orange
  { primary: '#9b59b6', secondary: '#8e44ad' }, // Purple
  { primary: '#f368e0', secondary: '#e84393' }, // Pink
  { primary: '#FF9A00', secondary: '#FF7B00' }, // Amber
  { primary: '#00b894', secondary: '#00a884' }, // Teal
  { primary: '#fdcb6e', secondary: '#f9ca24' }, // Yellow
  { primary: '#00cec9', secondary: '#00b5ad' }, // Cyan
];

// Font presets
const fontPresets = [
  { name: 'Poppins', family: '"Poppins", sans-serif' },
  { name: 'Playfair', family: '"Playfair Display", serif' },
  { name: 'Montserrat', family: '"Montserrat", sans-serif' },
  { name: 'Roboto', family: '"Roboto", sans-serif' },
  { name: 'Open Sans', family: '"Open Sans", sans-serif' },
  { name: 'Raleway', family: '"Raleway", sans-serif' },
  { name: 'Lora', family: '"Lora", serif' },
  { name: 'Nunito', family: '"Nunito", sans-serif' },
  { name: 'Source', family: '"Source Sans Pro", sans-serif' },
];

const Skills = () => {
  // State for skills and theme
  const [skills, setSkills] = useState(initialSkills);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(colorPresets[0]);
  const [currentFont, setCurrentFont] = useState(fontPresets[0]);
  
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});
  
  // Better image for teachers section
  const teachersImageUrl = 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80';
  
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

  // Card animation variant
  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: i => ({ 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15, 
        duration: 0.6,
        delay: i * 0.1
      }
    }),
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      scale: 1.03,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.05)",
      transition: { 
        type: "spring", 
        stiffness: 600, 
        damping: 15 
      }
    }
  };

  // Category animation
  const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 20 
      }
    }
  };

  // Title line animation
  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '60px',
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };
  
  // For color selection
  const handleColorChange = (color) => {
    setCurrentTheme(color);
  };
  
  // For font selection
  const handleFontChange = (font) => {
    setCurrentFont(font);
  };

  return (
    <>
      <Parallax
        bgImage={teachersImageUrl}
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
              backgroundColor: 'rgba(26, 26, 46, 0.85)',
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
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: 'text.primary',
                      display: 'inline-block',
                      position: 'relative',
                      fontFamily: currentFont.family,
                    }}
                  >
                    Teaching
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
                </motion.div>
                
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => setCustomizeOpen(true)}
                    sx={{
                      borderColor: currentTheme.primary,
                      color: currentTheme.primary,
                      borderRadius: '30px',
                      px: 3,
                      '&:hover': {
                        borderColor: currentTheme.secondary,
                        backgroundColor: 'rgba(255, 107, 107, 0.05)',
                      }
                    }}
                  >
                    Customize
                  </Button>
                </motion.div>
              </Box>
              
              <Typography
                variant="body1"
                component={motion.p}
                variants={itemVariants}
                sx={{
                  color: 'text.secondary',
                  mb: 5,
                  maxWidth: '700px',
                  fontFamily: currentFont.family,
                }}
              >
                I'm passionate about teaching programming skills and helping students develop their technical abilities.
                Here are the courses I teach with my proficiency level in each subject.
              </Typography>

              {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
                <Box key={category} sx={{ mb: 6 }}>
                  <motion.div 
                    variants={categoryVariants}
                    custom={categoryIndex}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: currentTheme.primary,
                        mb: 3,
                        fontWeight: 500,
                        fontFamily: currentFont.family,
                      }}
                    >
                      {category}
                    </Typography>
                  </motion.div>

                  <Grid container spacing={3}>
                    {categorySkills.map((skill, index) => (
                      <Grid item xs={12} sm={6} md={4} key={skill.name}>
                        <motion.div 
                          variants={cardVariants}
                          custom={index}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <Paper
                            elevation={2}
                            sx={{
                              p: 3,
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              background: 'linear-gradient(145deg, rgba(22, 33, 62, 0.6), rgba(26, 26, 46, 0.8))',
                              borderRadius: '16px',
                              backdropFilter: 'blur(10px)',
                              border: `1px solid rgba(${parseInt(currentTheme.primary.slice(1, 3), 16)}, ${parseInt(currentTheme.primary.slice(3, 5), 16)}, ${parseInt(currentTheme.primary.slice(5, 7), 16)}, 0.1)`,
                              transition: 'all 0.4s ease',
                              position: 'relative',
                              overflow: 'hidden',
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: `linear-gradient(135deg, rgba(${parseInt(currentTheme.primary.slice(1, 3), 16)}, ${parseInt(currentTheme.primary.slice(3, 5), 16)}, ${parseInt(currentTheme.primary.slice(5, 7), 16)}, 0.1) 0%, rgba(26, 26, 46, 0) 50%)`,
                                zIndex: 0,
                              }
                            }}
                            className="card-shine"
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                color: 'text.primary',
                                mb: 1,
                                position: 'relative',
                                zIndex: 2,
                                fontFamily: currentFont.family,
                              }}
                            >
                              {skill.name}
                            </Typography>
                            
                            <Box sx={{ mt: 2, position: 'relative', zIndex: 2 }}>
                              <Typography 
                                variant="body2" 
                                sx={{ 
                                  color: 'text.secondary',
                                  mb: 1,
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  fontFamily: currentFont.family,
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
                                  backgroundColor: `rgba(${parseInt(currentTheme.primary.slice(1, 3), 16)}, ${parseInt(currentTheme.primary.slice(3, 5), 16)}, ${parseInt(currentTheme.primary.slice(5, 7), 16)}, 0.1)`,
                                  '& .MuiLinearProgress-bar': {
                                    borderRadius: 5,
                                    background: `linear-gradient(90deg, ${currentTheme.primary} 0%, ${currentTheme.secondary} 100%)`,
                                  }
                                }}
                              />
                            </Box>
                            
                            {/* Decorative element */}
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.6 + index * 0.1 }}
                              sx={{
                                position: 'absolute',
                                top: 15,
                                right: 15,
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                border: `2px solid rgba(${parseInt(currentTheme.primary.slice(1, 3), 16)}, ${parseInt(currentTheme.primary.slice(3, 5), 16)}, ${parseInt(currentTheme.primary.slice(5, 7), 16)}, 0.3)`,
                                zIndex: 1
                              }}
                            />
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
      
      {/* Customization Dialog */}
      <Dialog 
        open={customizeOpen} 
        onClose={() => setCustomizeOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            backgroundImage: 'linear-gradient(135deg, #16213E 0%, #1A1A2E 100%)',
            borderRadius: 3,
            maxWidth: '500px',
            width: '100%',
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          pb: 2,
          fontFamily: currentFont.family,
        }}>
          <Typography variant="h5" sx={{ color: currentTheme.primary, fontFamily: currentFont.family }}>
            Customize
          </Typography>
          <IconButton onClick={() => setCustomizeOpen(false)} sx={{ color: 'text.secondary' }}>
            ✕
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'text.primary', 
                mb: 2,
                fontFamily: currentFont.family, 
              }}
            >
              Try Other Fonts
            </Typography>
            
            <Grid container spacing={2}>
              {fontPresets.map((font, index) => (
                <Grid item key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Paper 
                      onClick={() => handleFontChange(font)}
                      sx={{ 
                        width: '60px', 
                        height: '60px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        cursor: 'pointer',
                        backgroundColor: currentFont.name === font.name 
                          ? `rgba(${parseInt(currentTheme.primary.slice(1, 3), 16)}, ${parseInt(currentTheme.primary.slice(3, 5), 16)}, ${parseInt(currentTheme.primary.slice(5, 7), 16)}, 0.2)` 
                          : 'background.paper',
                        border: currentFont.name === font.name 
                          ? `2px solid ${currentTheme.primary}` 
                          : '2px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Typography 
                        sx={{ 
                          fontFamily: font.family, 
                          fontSize: '18px',
                          color: currentFont.name === font.name ? currentTheme.primary : 'text.primary',
                        }}
                      >
                        Aa
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          <Box>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'text.primary', 
                mb: 2,
                fontFamily: currentFont.family, 
              }}
            >
              Try Other Colors
            </Typography>
            
            <Grid container spacing={2}>
              {colorPresets.map((color, index) => (
                <Grid item key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Paper 
                      onClick={() => handleColorChange(color)}
                      sx={{ 
                        width: '60px', 
                        height: '60px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        cursor: 'pointer',
                        backgroundColor: 'background.paper',
                        border: (currentTheme.primary === color.primary && currentTheme.secondary === color.secondary) 
                          ? `2px solid ${color.primary}` 
                          : '2px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Box sx={{ 
                          width: 20, 
                          height: 20, 
                          borderRadius: '50%', 
                          backgroundColor: color.primary 
                        }} />
                        <Box sx={{ 
                          width: 20, 
                          height: 20, 
                          borderRadius: '50%', 
                          backgroundColor: color.secondary 
                        }} />
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Skills; 