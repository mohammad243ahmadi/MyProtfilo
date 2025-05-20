import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import { Link } from "react-scroll";
import ScrollAnimation from "./common/ScrollAnimation";

// Hero component with parallax background
const Hero = () => {
  const { currentTheme } = useCustomTheme();

  // Placeholder hero image URL (replace with your preferred image)
  const heroImageUrl =
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  // Developer profile image - replace with your actual image path
  const developerImageUrl =
    "https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww";

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

  return (
    <Parallax bgImage={heroImageUrl} strength={500} blur={{ min: -5, max: 15 }}>
      <Box
        id="hero"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(10, 25, 47, 0.85)",
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box>
                <ScrollAnimation animation="slideUp" delay={0.2}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: currentTheme.primary,
                      fontWeight: "bold",
                      letterSpacing: "2px",
                      display: "block",
                      mb: 2,
                      
                    }}
                  >
                    Python and Web Developer
                  </Typography>
                </ScrollAnimation>

                <motion.div
                  variants={typingVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Typography
                    variant="h1"
                    sx={{
                      color: "text.primary",
                      fontWeight: 700,
                      fontSize: { xs: "2.5rem", md: "3.5rem" },
                      mb: 3,
                      lineHeight: 1.1,
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                      display: "block",
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

                <ScrollAnimation animation="slideUp" delay={0.4}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      mb: 5,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      maxWidth: "600px",
                    }}
                  >
                    A passionate Python developer and educator with expertise in
                    web development. I
                    create innovative solutions to your websites and apps and help students master
                    programming skills.
                  </Typography>
                </ScrollAnimation>

                <ScrollAnimation animation="slideUp" delay={0.6}>
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="contact"
                        smooth={true}
                        duration={800}
                        offset={-70}
                      >
                        <Button
                          variant="contained"
                          disableElevation
                          sx={{
                            bgcolor: currentTheme.primary,
                            px: 4,
                            py: 1.5,
                            borderRadius: "30px",
                            color: "#0A192F",
                            fontWeight: 600,
                            position: "relative",
                            overflow: "hidden",
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              left: "-100%",
                              width: "200%",
                              height: "100%",
                              background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
                              transition: "all 0.5s ease",
                            },
                            "&:hover": {
                              bgcolor: currentTheme.primary,
                              transform: "translateY(-3px)",
                              boxShadow: `0 4px 20px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.5)`,
                              "&::after": {
                                left: "100%",
                              },
                            },
                          }}
                        >
                          Contact Me
                        </Button>
                      </Link>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="projects"
                        smooth={true}
                        duration={800}
                        offset={-70}
                      >
                        <Button
                          variant="outlined"
                          sx={{
                            borderColor: currentTheme.primary,
                            color: currentTheme.primary,
                            px: 4,
                            py: 1.5,
                            borderRadius: "30px",
                            borderWidth: 2,
                            fontWeight: 600,
                            position: "relative",
                            overflow: "hidden",
                            transition: "all 0.3s ease",
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              background: `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0)`,
                              transition: "all 0.3s ease",
                              zIndex: -1,
                            },
                            "&:hover": {
                              borderColor: currentTheme.primary,
                              color: "#0A192F",
                              "&::before": {
                                background: currentTheme.primary,
                              },
                            },
                          }}
                        >
                          View Projects
                        </Button>
                      </Link>
                    </motion.div>
                  </Box>
                </ScrollAnimation>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{ display: { xs: "none", md: "block" } }}
            >
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

          <ScrollAnimation animation="fade" delay={1.2}>
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: 80, md: 120 },
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10,
                display: { xs: "none", md: "none" },
              }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <Box
                  sx={{
                    width: "30px",
                    height: "50px",
                    border: `2px solid ${currentTheme.primary}`,
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: "8px 0",
                  }}
                >
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: currentTheme.primary,
                    }}
                  />
                </Box>
              </motion.div>
            </Box>
          </ScrollAnimation>
        </Container>
      </Box>
    </Parallax>
  );
};

export default Hero;
