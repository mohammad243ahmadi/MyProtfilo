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
    live: "https://italian-restaurant-pied.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects and skills, built with React, Material-UI, and Framer Motion.",
    technologies: ["React", "Material-UI", "Framer Motion"],
    github: "https://github.com/mohammad243ahmadi/my_CV2",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1557682250-2b274085f9df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80",
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
      blur={{ min: -10, max: 15 }}
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
                color: "text.primary",
                mb: 1,
                display: "inline-block",
                position: "relative",
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
                  backgroundColor: currentTheme.primary,
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
                      elevation={3}
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        borderRadius: 3,
                        background:
                          "linear-gradient(145deg, rgba(22, 33, 62, 0.7), rgba(26, 26, 46, 0.9))",
                        backdropFilter: "blur(10px)",
                        border: `1px solid rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1)`,
                        transition: "all 0.4s ease",
                        position: "relative",
                      }}
                    >
                      {/* Project Image */}
                      <Box
                        sx={{
                          height: "200px",
                          overflow: "hidden",
                          position: "relative",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundImage:
                              hoveredProject === project.title
                                ? "none"
                                : "linear-gradient(rgba(10, 25, 47, 0.2), rgba(10, 25, 47, 0.6))",
                            zIndex: 1,
                            transition: "all 0.4s ease",
                          },
                        }}
                      >
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.4s ease",
                            transform:
                              hoveredProject === project.title
                                ? "scale(1.1)"
                                : "scale(1)",
                          }}
                        />
                      </Box>

                      {/* Project Details */}
                      <Box
                        sx={{
                          p: 3,
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "text.primary",
                            mb: 1,
                            fontWeight: 600,
                          }}
                        >
                          {project.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            mb: 2,
                            flexGrow: 1,
                          }}
                        >
                          {project.description}
                        </Typography>

                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{ mb: 2, flexWrap: "wrap", gap: 1 }}
                        >
                          {project.technologies.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.2)`,
                                color: currentTheme.primary,
                                borderRadius: "15px",
                                "& .MuiChip-label": {
                                  px: 1.5,
                                  py: 0.5,
                                  fontSize: "0.75rem",
                                },
                              }}
                            />
                          ))}
                        </Stack>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: 1,
                          }}
                        >
                          <Button
                            variant="text"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            component={motion.a}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            sx={{
                              color: currentTheme.primary,
                              textTransform: "none",
                              fontWeight: 600,
                              "&:hover": {
                                backgroundColor: "transparent",
                                textDecoration: "underline",
                              },
                            }}
                          >
                            GitHub
                          </Button>

                          <Button
                            variant="outlined"
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            component={motion.a}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            sx={{
                              borderColor: currentTheme.primary,
                              color: currentTheme.primary,
                              textTransform: "none",
                              fontWeight: 600,
                              borderRadius: "20px",
                              "&:hover": {
                                borderColor: currentTheme.secondary,
                                backgroundColor: `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1)`,
                              },
                            }}
                          >
                            Live Demo
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
