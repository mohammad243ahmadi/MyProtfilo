import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Container,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import ScrollAnimation from "./common/ScrollAnimation";

// Enhanced project data with images
const projects = [
    {
        title: "Fresco Italian Restaurant",
        description:
            "A modern, responsive website for an upscale Italian restaurant built with React and styled-components.",
        technologies: ["React", "JavaScript", "paralix"],
        github: "https://github.com/mohammad243ahmadi/ItalianRestaurant",
        live: "https://italian-restaurant-mu.vercel.app/",
        image: "https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
        title: "Portfolio Website",
        description:
            "Personal portfolio website showcasing projects and skills, built with React, Material-UI, and Framer Motion.",
        technologies: ["React", "Material-UI", "Framer Motion"],
        github: "https://github.com/mohammad243ahmadi/my_CV2",
        live: "#",
        image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        title: "Telegram Bot",
        description:
            "A comprehensive Telegram bot with an admin dashboard for tracking employee work activities, breaks, and generating detailed time reports.",
        technologies: ["Python", "Flask", "Sqlite"],
        github: "https://github.com/mohammad243ahmadi/WorkingTimeLoggerBot",
        live: "#",
        image: "https://plus.unsplash.com/premium_vector-1721387158191-0005c0c504d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRpbWUlMjBsb2dnZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "Safir The Elite Educational Center",
        description:
            "A modern educational platform with a proper client/server architecture.",
        technologies: ["React", "Node.js", "Express", "PostgreSQL"],
        github: "#",
        live: "#",
        image: "https://plus.unsplash.com/premium_vector-1720082660197-b1a163e1372a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q291cnNlfGVufDB8fDB8fHww",
    },
];

const Projects = () => {
  const { currentTheme } = useCustomTheme();
  const [hoveredProject, setHoveredProject] = useState(null);

  // Placeholder projects section image
  const projectsImageUrl =
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80";

  // Derive RGB values for the theme color
  const primaryRGB = {
    r: parseInt(currentTheme.primary.slice(1, 3), 16),
    g: parseInt(currentTheme.primary.slice(3, 5), 16),
    b: parseInt(currentTheme.primary.slice(5, 7), 16),
  };

  // Title line animation
  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "60px",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  // Project card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -15,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <Parallax
      bgImage={projectsImageUrl}
      strength={400}
      blur={{ min: -10, max: 10 }}
    >
      <Box
        id="projects"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: 10,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(10, 25, 47, 0.9)",
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <ScrollAnimation animation="slideUp" threshold={0.1}>
            <Typography
              variant="h3"
              sx={{
                background: `linear-gradient(135deg, #fff 0%, ${currentTheme.secondary} 100%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1,
                display: "inline-block",
                position: "relative",
                fontWeight: 800,
              }}
            >
              Projects
              <motion.div
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: 0,
                  height: "4px",
                  background: `linear-gradient(90deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                  borderRadius: "2px",
                }}
              />
            </Typography>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.2} threshold={0.1}>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: 5,
                mt: 3,
                maxWidth: "700px",
              }}
            >
              Here are some of the projects I've worked on. Each one represents
              a unique challenge and showcases different skills and
              technologies.
            </Typography>
          </ScrollAnimation>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.title}>
                <ScrollAnimation
                  animation={
                    index % 3 === 0
                      ? "slideUp"
                      : index % 3 === 1
                      ? "slideLeft"
                      : "slideRight"
                  }
                  delay={0.1 * index}
                  threshold={0.1}
                >
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onHoverStart={() => setHoveredProject(project.title)}
                    onHoverEnd={() => setHoveredProject(null)}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        borderRadius: "24px",
                        background: `linear-gradient(135deg, rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1), rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.05))`,
                        backdropFilter: "blur(15px)",
                        border: `1.5px solid rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.2)`,
                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        "&:hover": {
                          transform: "translateY(-12px)",
                          border: `1.5px solid rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.5)`,
                          background: `linear-gradient(135deg, rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.15), rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1))`,
                          boxShadow: `0 20px 40px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.2)`,
                        }
                      }}
                    >
                      {/* Project Image */}
                      <Box
                        sx={{
                          height: "220px",
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                          whileHover={{ scale: 1.1 }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: `linear-gradient(to bottom, transparent 0%, rgba(10, 25, 47, 0.4) 100%)`,
                          }}
                        />
                      </Box>

                      {/* Project Details */}
                      <Box
                        sx={{
                          p: 4,
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            color: "text.primary",
                            mb: 1.5,
                            fontWeight: 700,
                            letterSpacing: '-0.5px'
                          }}
                        >
                          {project.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            mb: 3,
                            flexGrow: 1,
                            lineHeight: 1.6,
                            fontSize: '0.95rem'
                          }}
                        >
                          {project.description}
                        </Typography>

                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{ mb: 3, flexWrap: "wrap", gap: 1 }}
                        >
                          {project.technologies.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                background: `linear-gradient(135deg, rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.15), rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.08))`,
                                color: currentTheme.primary,
                                borderRadius: "10px",
                                border: `1.5px solid rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.25)`,
                                fontWeight: 600,
                                fontSize: "0.75rem",
                                backdropFilter: "blur(10px)",
                                transition: "all 0.3s ease",
                                "& .MuiChip-label": {
                                  px: 1,
                                },
                                "&:hover": {
                                  background: `linear-gradient(135deg, rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.25), rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.15))`,
                                  borderColor: currentTheme.primary,
                                  transform: 'scale(1.05)',
                                }
                              }}
                            />
                          ))}
                        </Stack>

                        <Box
                          sx={{
                            display: "flex",
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
                              flex: 1,
                              borderColor: currentTheme.primary,
                              color: 'text.primary',
                              textTransform: "none",
                              fontWeight: 600,
                              borderRadius: "14px",
                              py: 1.2,
                              background: `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.08)`,
                              borderWidth: '1.5px',
                              transition: 'all 0.3s ease',
                              "&:hover": {
                                borderColor: currentTheme.primary,
                                backgroundColor: `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.15)`,
                                transform: 'translateY(-2px)',
                                boxShadow: `0 8px 20px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.2)`,
                              },
                            }}
                          >
                            → GitHub
                          </Button>

                          <Button
                            variant="contained"
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              flex: 1,
                              background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                              color: "#0A192F",
                              textTransform: "none",
                              fontWeight: 700,
                              borderRadius: "14px",
                              py: 1.2,
                              boxShadow: `0 6px 20px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.4)`,
                              transition: 'all 0.3s ease',
                              "&:hover": {
                                transform: 'translateY(-3px)',
                                boxShadow: `0 10px 30px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.6)`,
                              },
                            }}
                          >
                            Visit Live →
                          </Button>
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                </ScrollAnimation>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Parallax>
  );
};

export default Projects;
