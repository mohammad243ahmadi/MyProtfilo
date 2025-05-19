import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Box, Paper, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const CustomizeDialog = () => {
  const { 
    currentTheme, 
    currentFont, 
    customizeOpen, 
    setCustomizeOpen, 
    colorPresets, 
    fontPresets,
    handleColorChange,
    handleFontChange
  } = useTheme();

  return (
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
      }}>
        <Typography variant="h5" sx={{ color: currentTheme.primary }}>
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
  );
};

export default CustomizeDialog; 