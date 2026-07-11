import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your user ID (public key)
    // This initialization is optional as you're passing the user ID with each send call
    // But it's recommended as a best practice
    emailjs.init("wBbAChWzwh8V6pXIg");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual EmailJS service, template, and user IDs
    const serviceId = "service_s648v8q";
    const templateId = "template_yjsotxy";
    const userId = "wBbAChWzwh8V6pXIg";
    const senderName = formData.name.trim();
    const senderEmail = formData.email.trim();
    const senderMessage = formData.message.trim();

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: senderName,
          email: senderEmail,
          from_name: senderName,
          from_email: senderEmail,
          user_name: senderName,
          user_email: senderEmail,
          reply_to: senderEmail,
          message: senderMessage,
        },
        userId
      )
      .then(() => {
        setSnackbar({
          open: true,
          message: "Message sent successfully!",
          severity: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setSnackbar({
          open: true,
          message: "Failed to send message. Please try again later.",
          severity: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Contact section background image
  const contactImageUrl =
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  return (
    <Parallax
      bgImage={contactImageUrl}
      strength={300}
      blur={{ min: -10, max: 10 }}
    >
      <Box
        id="contact"
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
            backgroundColor: "rgba(10, 25, 47, 0.93)",
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
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
                  background: `linear-gradient(135deg, #fff 0%, #64ffda 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 5,
                  display: "inline-block",
                  position: "relative",
                  fontWeight: 800,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-10px",
                    left: 0,
                    width: "60px",
                    height: "4px",
                    background: `linear-gradient(90deg, #64ffda, #64ffda)`,
                  },
                }}
              >
                Get In Touch
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 5,
                  maxWidth: "600px",
                }}
              >
                I'm currently looking for new opportunities. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you as soon as possible!
              </Typography>
            </motion.div>

            <Paper
              elevation={0}
              sx={{
                p: 0,
                background: "linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(100, 255, 218, 0.05) 100%)",
                borderRadius: "24px",
                backdropFilter: "blur(15px)",
                border: "1.5px solid rgba(100, 255, 218, 0.25)",
                overflow: "hidden",
                boxShadow: '0 25px 50px -12px rgba(100, 255, 218, 0.2)',
              }}
            >
              <Grid container>
                <Grid item xs={12} md={6} sx={{ p: { xs: 4, md: 6 } }}>
                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="h4"
                      sx={{
                        background: `linear-gradient(90deg, #64ffda, #64ffda)`,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        mb: 4,
                        fontWeight: 700,
                        letterSpacing: '-0.5px'
                      }}
                    >
                      ✉️ Send Me a Message
                    </Typography>
                  </motion.div>

                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                    }}
                  >
                    <motion.div variants={itemVariants}>
                      <TextField
                        required
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            color: "white",
                            backgroundColor: "rgba(100, 255, 218, 0.05)",
                            borderRadius: "12px",
                            transition: "all 0.3s ease",
                            "& fieldset": {
                              borderColor: "rgba(100, 255, 218, 0.2)",
                              borderWidth: "1.5px",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(100, 255, 218, 0.4)",
                              borderWidth: "1.5px",
                            },
                            "&.Mui-focused": {
                              backgroundColor: "rgba(100, 255, 218, 0.08)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "primary.main",
                              borderWidth: "1.5px",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255, 255, 255, 0.6)",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "primary.main",
                          },
                        }}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            color: "white",
                            backgroundColor: "rgba(100, 255, 218, 0.05)",
                            borderRadius: "12px",
                            transition: "all 0.3s ease",
                            "& fieldset": {
                              borderColor: "rgba(100, 255, 218, 0.2)",
                              borderWidth: "1.5px",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(100, 255, 218, 0.4)",
                              borderWidth: "1.5px",
                            },
                            "&.Mui-focused": {
                              backgroundColor: "rgba(100, 255, 218, 0.08)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "primary.main",
                              borderWidth: "1.5px",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255, 255, 255, 0.6)",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "primary.main",
                          },
                        }}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <TextField
                        required
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            color: "white",
                            backgroundColor: "rgba(100, 255, 218, 0.05)",
                            borderRadius: "12px",
                            transition: "all 0.3s ease",
                            "& fieldset": {
                              borderColor: "rgba(100, 255, 218, 0.2)",
                              borderWidth: "1.5px",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(100, 255, 218, 0.4)",
                              borderWidth: "1.5px",
                            },
                            "&.Mui-focused": {
                              backgroundColor: "rgba(100, 255, 218, 0.08)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "primary.main",
                              borderWidth: "1.5px",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255, 255, 255, 0.6)",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "primary.main",
                          },
                        }}
                      />
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={loading}
                        sx={{
                          mt: 4,
                          py: 2,
                          background: `linear-gradient(135deg, #64ffda, #64ffda)`,
                          color: "#0A192F",
                          borderRadius: "14px",
                          fontWeight: 700,
                          fontSize: '1rem',
                          textTransform: 'none',
                          position: 'relative',
                          overflow: 'hidden',
                          "&::before": {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'rgba(255, 255, 255, 0.2)',
                            transition: 'left 0.5s ease',
                          },
                          "&:hover": {
                            transform: 'translateY(-3px)',
                            boxShadow: `0 12px 30px rgba(100, 255, 218, 0.5)`,
                            '&::before': {
                              left: '100%',
                            }
                          },
                          "&:disabled": {
                            opacity: 0.7,
                          }
                        }}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    bgcolor: "background.paper",
                    p: { xs: 3, md: 5 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="h5"
                      sx={{
                        background: `linear-gradient(90deg, #64ffda, #64ffda)`,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        mb: 4,
                        fontWeight: 700,
                      }}
                    >
                      🌐 Connect With Me
                    </Typography>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        mb: 4,
                      }}
                    >
                      Feel free to connect with me on social media or send me an
                      email. I'm always open to discussing new projects,
                      creative ideas, or opportunities to be part of your
                      vision.
                    </Typography>
                  </motion.div>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: { xs: "center", md: "flex-start" },
                      gap: 2,
                      mb: 4,
                    }}
                  >
                    <motion.div variants={itemVariants}>
                      <Button
                        href="mailto:mohammad243ahmadi@gmail.com"
                        fullWidth
                        variant="outlined"
                        sx={{
                          justifyContent: "flex-start",
                          color: "primary.main",
                          borderColor: "rgba(100, 255, 218, 0.4)",
                          borderRadius: "12px",
                          py: 1.5,
                          borderWidth: "1.5px",
                          backgroundColor: "rgba(100, 255, 218, 0.05)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            borderColor: "primary.main",
                            backgroundColor: "rgba(100, 255, 218, 0.12)",
                            transform: "translateX(5px)",
                            boxShadow: "0 6px 20px rgba(100, 255, 218, 0.2)",
                          },
                        }}
                      >
                        📧 mohammad243ahmadi@gmail.com
                      </Button>
                    </motion.div>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: { xs: "center", md: "flex-start" },
                      gap: 2,
                    }}
                  >
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.08 }}
                    >
                      <Button
                        href="https://github.com/mohammad243ahmadi"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        sx={{
                          minWidth: "120px",
                          color: "primary.main",
                          borderColor: "rgba(100, 255, 218, 0.4)",
                          borderRadius: "12px",
                          borderWidth: "1.5px",
                          backgroundColor: "rgba(100, 255, 218, 0.05)",
                          transition: "all 0.3s ease",
                          fontWeight: 600,
                          "&:hover": {
                            borderColor: "primary.main",
                            backgroundColor: "rgba(100, 255, 218, 0.12)",
                            transform: 'translateY(-3px)',
                            boxShadow: "0 8px 20px rgba(100, 255, 218, 0.2)",
                          },
                        }}
                      >
                        → GitHub
                      </Button>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.08 }}
                    >
                      <Button
                        href="https://www.instagram.com/mohammad.243ahmadi?utm_source=qr&igsh=MTBkZnFmbTAydTZoNg=="
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        sx={{
                          minWidth: "120px",
                          color: "primary.main",
                          borderColor: "rgba(100, 255, 218, 0.4)",
                          borderRadius: "12px",
                          borderWidth: "1.5px",
                          backgroundColor: "rgba(100, 255, 218, 0.05)",
                          transition: "all 0.3s ease",
                          fontWeight: 600,
                          "&:hover": {
                            borderColor: "primary.main",
                            backgroundColor: "rgba(100, 255, 218, 0.12)",
                            transform: 'translateY(-3px)',
                            boxShadow: "0 8px 20px rgba(100, 255, 218, 0.2)",
                          },
                        }}
                      >
                        → Instagram
                      </Button>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.08 }}
                    >
                      <Button
                        href="https://api.whatsapp.com/send?phone=+93785173338&text=Hello%20"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        sx={{
                          minWidth: "120px",
                          color: "primary.main",
                          borderColor: "rgba(100, 255, 218, 0.4)",
                          borderRadius: "12px",
                          borderWidth: "1.5px",
                          backgroundColor: "rgba(100, 255, 218, 0.05)",
                          transition: "all 0.3s ease",
                          fontWeight: 600,
                          "&:hover": {
                            borderColor: "primary.main",
                            backgroundColor: "rgba(100, 255, 218, 0.12)",
                            transform: 'translateY(-3px)',
                            boxShadow: "0 8px 20px rgba(100, 255, 218, 0.2)",
                          },
                        }}
                      >
                        → Whatsapp
                      </Button>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.08 }}
                    >
                      <Button
                        href="https://www.facebook.com/mohammad.hah.96"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        sx={{
                          minWidth: "120px",
                          color: "primary.main",
                          borderColor: "rgba(100, 255, 218, 0.4)",
                          borderRadius: "12px",
                          borderWidth: "1.5px",
                          backgroundColor: "rgba(100, 255, 218, 0.05)",
                          transition: "all 0.3s ease",
                          fontWeight: 600,
                          "&:hover": {
                            borderColor: "primary.main",
                            backgroundColor: "rgba(100, 255, 218, 0.12)",
                            transform: 'translateY(-3px)',
                            boxShadow: "0 8px 20px rgba(100, 255, 218, 0.2)",
                          },
                        }}
                      >
                        → Facebook
                      </Button>
                    </motion.div>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
        </Container>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Parallax>
  );
};

export default Contact;
