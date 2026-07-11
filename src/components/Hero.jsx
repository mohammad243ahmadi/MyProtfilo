import React, { useCallback } from "react";
import { Box, Typography, Button, Container, Grid, Fade } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import DownloadIcon from '@mui/icons-material/Download';

// Hero component with parallax background
const Hero = () => {
  const { currentTheme } = useCustomTheme();
  const navigate = useNavigate();

  const developerImageUrl = `${process.env.PUBLIC_URL}/images/profile.jpg`;

  // Derive RGB values for the theme color
  const primaryRGB = {
    r: parseInt(currentTheme.primary.slice(1, 3), 16),
    g: parseInt(currentTheme.primary.slice(3, 5), 16),
    b: parseInt(currentTheme.primary.slice(5, 7), 16),
  };

  // Animation variants for the typing effect
  const typingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12 },
    },
  };

  // Animation variants for the developer image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: `0 10px 25px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.5)`,
      transition: {
        duration: 0.3,
      },
    },
  };

  const title = "Hi, I'm M.Hussain Ahmadi";
  
  // Function to handle CV download
  const handleDownloadCV = useCallback(() => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
    link.download = 'M_Hussain_Ahmadi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  // Navigate to a route
  const goTo = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        background: "linear-gradient(135deg, #0a192f 0%, #112240 100%)",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${currentTheme.primary.slice(1)}' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5,
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, py: 4 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Content */}
          <Grid item xs={12} md={7}>
            <Fade in={true} timeout={800}>
              <Typography
                variant="overline"
                sx={{
                  color: currentTheme.primary,
                  fontWeight: "bold",
                  letterSpacing: "3px",
                  display: "block",
                  mb: 3,
                  fontSize: "0.85rem",
                  background: `linear-gradient(90deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ✨ Python and Web Developer
              </Typography>
            </Fade>

            <motion.div
              variants={typingVariants}
              initial="hidden"
              animate="visible"
            >
              <Typography
                variant="h1"
                sx={{
                  background: `linear-gradient(135deg, #fff 0%, ${currentTheme.secondary} 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 800,
                  fontSize: { xs: "2.8rem", md: "4rem" },
                  mb: 4,
                  lineHeight: 1.1,
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  letterSpacing: "-0.02em",
                }}
              >
                <motion.span
                  variants={letterVariants}
                  style={{ display: "inline-block" }}
                >
                  {title}
                </motion.span>
              </Typography>
            </motion.div>

            <Fade in={true} timeout={1000}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 6,
                  fontSize: { xs: "1rem", md: "1.15rem" },
                  maxWidth: "650px",
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                A passionate Python developer and educator with expertise in
                full-stack web development. I create innovative, scalable solutions and help students master
                modern programming skills.
              </Typography>
            </Fade>

            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 8 }}>
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
                <Button
                  variant="contained"
                  onClick={() => goTo('/contact')}
                  sx={{
                    px: 5,
                    py: 2,
                    fontSize: '1.05rem',
                    borderRadius: '20px',
                    background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                    color: '#0A192F',
                    fontWeight: 700,
                    textTransform: 'none',
                    letterSpacing: '0.5px',
                    boxShadow: `0 10px 30px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.5)`,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.2)',
                      transition: 'left 0.5s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 15px 40px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.7)`,
                      '&::before': {
                        left: '100%',
                      }
                    },
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Get In Touch
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
                <Button
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  onClick={handleDownloadCV}
                  sx={{
                    px: 5,
                    py: 2,
                    fontSize: '1.05rem',
                    borderRadius: '20px',
                    borderColor: currentTheme.primary,
                    color: 'text.primary',
                    fontWeight: 600,
                    textTransform: 'none',
                    letterSpacing: '0.5px',
                    borderWidth: '2px',
                    background: `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.08)`,
                    '&:hover': {
                      borderColor: currentTheme.primary,
                      borderWidth: '2px',
                      backgroundColor: `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.15)`,
                      transform: 'translateY(-4px)',
                      boxShadow: `0 10px 30px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.3)`,
                    },
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Download CV
                </Button>
              </motion.div>
            </Box>
          </Grid>

          {/* Right Column - Image */}
          <Grid item xs={12} md={5} sx={{ display: { xs: "none", md: "block" } }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <motion.div
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={imageVariants}
              >
                <Box
                  component="img"
                  src={developerImageUrl}
                  alt="Developer Profile"
                  sx={{
                    width: "100%",
                    maxWidth: "380px",
                    height: "auto",
                    borderRadius: "20px",
                    border: `3px solid ${currentTheme.primary}`,
                    boxShadow: `0 5px 15px rgba(0,0,0,0.3)`,
                  }}
                />
              </motion.div>
            </Box>
          </Grid>
        </Grid>

        {/* Scroll Indicator */}
        <Box sx={{ 
          position: 'absolute', 
          bottom: 40, 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'block' }
        }}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
           
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
