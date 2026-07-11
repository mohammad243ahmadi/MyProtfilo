import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import ScrollAnimation from "./common/ScrollAnimation";

// Initial skills array with categories
const initialSkills = [
  { name: "Python", level: 90, category: "Programming Languages" },
  { name: "JavaScript", level: 80, category: "Programming Languages" },
  { name: "HTML/CSS", level: 85, category: "Frontend" },
  { name: "React", level: 75, category: "Frontend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "Flask", level: 70, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Databases" },
  { name: "MySQL", level: 80, category: "Databases" },
  { name: "Git", level: 80, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
];

const Skills = () => {
  const { currentTheme } = useCustomTheme();

  // Group skills by category
  const groupedSkills = initialSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Better image for teachers section
  const teachersImageUrl =
    "https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww";

  // Derive RGB values for the theme color
  const primaryRGB = {
    r: parseInt(currentTheme.primary.slice(1, 3), 16),
    g: parseInt(currentTheme.primary.slice(3, 5), 16),
    b: parseInt(currentTheme.primary.slice(5, 7), 16),
  };

  // Progress animation variant
  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    }),
  };

  // Title line animation
  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "60px",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <Parallax
      bgImage={teachersImageUrl}
      strength={300}
      blur={{ min: -10, max: 10 }}
    >
      <Box
        id="skills"
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
            backgroundColor: "rgba(26, 26, 46, 0.85)",
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
              Teaching & Skills
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
              I'm passionate about teaching programming skills and helping
              students develop their technical abilities. Here are the courses I
              teach with my proficiency level in each subject.
            </Typography>
          </ScrollAnimation>

          {Object.entries(groupedSkills).map(
            ([category, categorySkills], categoryIndex) => (
              <Box key={category} sx={{ mb: 6 }}>
                <ScrollAnimation
                  animation="slideLeft"
                  delay={0.1 * categoryIndex}
                  threshold={0.1}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      background: `linear-gradient(90deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: 3,
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {category}
                  </Typography>
                </ScrollAnimation>

                <Grid container spacing={3}>
                  {categorySkills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={skill.name}>
                      <ScrollAnimation
                        animation={index % 2 === 0 ? "slideUp" : "slideRight"}
                        delay={0.1 + 0.1 * index}
                        threshold={0.1}
                      >
                        <motion.div
                          whileHover={{
                            y: -10,
                            boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)`,
                            scale: 1.03,
                          }}
                          whileTap={{
                            scale: 0.98,
                            boxShadow:
                              "0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.05)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Paper
                            elevation={0}
                            sx={{
                              p: 4,
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              background: `linear-gradient(135deg, rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1), rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.05))`,
                              borderRadius: "24px",
                              backdropFilter: "blur(15px)",
                              border: `1.5px solid rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.2)`,
                              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                              position: "relative",
                              overflow: "hidden",
                              "&:hover": {
                                border: `1.5px solid rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.5)`,
                                background: `linear-gradient(135deg, rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.15), rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1))`,
                                boxShadow: `0 10px 30px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.2)`,
                                "& .skill-icon": {
                                  transform: "scale(1.1) rotate(10deg)",
                                  color: currentTheme.primary,
                                }
                              }
                            }}
                          >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                              <Typography
                                variant="h6"
                                sx={{
                                  color: "text.primary",
                                  fontWeight: 700,
                                  position: "relative",
                                  zIndex: 2,
                                  letterSpacing: '0.5px'
                                }}
                              >
                                {skill.name}
                              </Typography>
                              <Box 
                                className="skill-icon"
                                sx={{ 
                                  color: `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.4)`,
                                  transition: 'all 0.3s ease'
                                }}
                              >
                                {/* We can add icons here later if needed */}
                              </Box>
                            </Box>

                            <Box
                              sx={{ mt: 'auto', position: "relative", zIndex: 2 }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "text.secondary",
                                  mb: 1.5,
                                  display: "flex",
                                  justifyContent: "space-between",
                                  fontWeight: 500
                                }}
                              >
                                <span>Proficiency</span>
                                <span style={{ color: currentTheme.primary }}>{skill.level}%</span>
                              </Typography>
                              <Box
                                sx={{
                                  height: 10,
                                  width: "100%",
                                  backgroundColor: `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1)`,
                                  borderRadius: 20,
                                  overflow: "hidden",
                                  position: "relative",
                                  border: `1px solid rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.15)`,
                                }}
                              >
                                <motion.div
                                  custom={skill.level}
                                  variants={progressVariants}
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ once: true, amount: 0.8 }}
                                  style={{
                                    height: "100%",
                                    background: `linear-gradient(90deg, ${currentTheme.primary} 0%, ${currentTheme.secondary} 100%)`,
                                    borderRadius: 20,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    boxShadow: `0 0 15px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.2)`,
                                  }}
                                />
                              </Box>
                            </Box>
                          </Paper>
                        </motion.div>
                      </ScrollAnimation>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )
          )}
        </Container>
      </Box>
    </Parallax>
  );
};

export default Skills;
