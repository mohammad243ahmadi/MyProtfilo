import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
  LinearProgress,
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
    "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80";

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
      blur={{ min: -15, max: 15 }}
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
                color: "text.primary",
                mb: 1,
                display: "inline-block",
                position: "relative",
              }}
            >
              Teaching
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
                      color: "primary.main",
                      mb: 3,
                      fontWeight: 500,
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
                            elevation={2}
                            sx={{
                              p: 3,
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              background:
                                "linear-gradient(145deg, rgba(22, 33, 62, 0.6), rgba(26, 26, 46, 0.8))",
                              borderRadius: "16px",
                              backdropFilter: "blur(10px)",
                              border: `1px solid rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1)`,
                              transition: "all 0.4s ease",
                              position: "relative",
                              overflow: "hidden",
                              "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: `linear-gradient(135deg, rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1) 0%, rgba(26, 26, 46, 0) 50%)`,
                                zIndex: 0,
                              },
                            }}
                            className="card-shine"
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                color: "text.primary",
                                mb: 1,
                                position: "relative",
                                zIndex: 2,
                              }}
                            >
                              {skill.name}
                            </Typography>

                            <Box
                              sx={{ mt: 2, position: "relative", zIndex: 2 }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "text.secondary",
                                  mb: 1,
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <span>Proficiency</span>
                                <span>{skill.level}%</span>
                              </Typography>
                              <Box
                                sx={{
                                  height: 6,
                                  width: "100%",
                                  backgroundColor: `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1)`,
                                  borderRadius: 5,
                                  overflow: "hidden",
                                  position: "relative",
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
                                    borderRadius: 5,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                  }}
                                />
                              </Box>
                            </Box>

                            {/* Decorative element */}
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.6 + index * 0.1 }}
                              sx={{
                                position: "absolute",
                                top: 15,
                                right: 15,
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                border: `2px solid rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.3)`,
                                zIndex: 1,
                              }}
                            />
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
