import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText,useScrollTrigger, Fade,Button} from '@mui/material';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme as useCustomTheme } from '../context/ThemeContext';

// Hide navbar on scroll down but with a smooth fade effect
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  return (
    <Fade appear={false} in={!trigger} timeout={300}>
      {children}
    </Fade>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const { toggleCustomizeDialog, currentTheme } = useCustomTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Update active section and scrolled state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for glass effect intensity
      setScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section, [id]');
      let currentSection = 'hero';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          currentSection = section.id || section.getAttribute('id');
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Teaching', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: i => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut",
        delay: i * 0.1
      } 
    })
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      } 
    },
    exit: { 
      x: "100%",
      transition: { 
        duration: 0.3, 
        ease: "easeIn" 
      } 
    }
  };

  // Derive RGB values for the theme color to use in rgba
  const primaryRGB = {
    r: parseInt(currentTheme.primary.slice(1, 3), 16),
    g: parseInt(currentTheme.primary.slice(3, 5), 16),
    b: parseInt(currentTheme.primary.slice(5, 7), 16)
  };

  const drawer = (
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={mobileMenuVariants}
        >
          <Box sx={{ 
            padding: '30px 20px',
            height: '100%',
            backdropFilter: 'blur(20px)',
            background: 'rgba(22, 33, 62, 0.85)',
          }}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  color: 'primary.main',
                  mb: 4,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  position: 'relative',
                  display: 'inline-block',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: '25%',
                    width: '50%',
                    height: 3,
                    borderRadius: '3px',
                    background: `linear-gradient(90deg, transparent, ${currentTheme.primary}, transparent)`
                    
                  }
                }}
              >
                M.Hussain Ahmadi
              </Typography>
            </motion.div>
            <List sx={{ mt: 1 }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, type: "spring" }}
                >
                  <ListItem 
                    component={Link} 
                    to={item.to} 
                    smooth={true} 
                    duration={800}
                    offset={-70}
                    onClick={handleDrawerToggle}
                    sx={{
                      py: 2,
                      px: 3,
                      mb: 1,
                      borderRadius: "30px",
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      backgroundColor: activeSection === item.to 
                        ? `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.15)` 
                        : 'transparent',
                      '&:hover': {
                        backgroundColor: `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1)`,
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    <ListItemText 
                      primary={item.name} 
                      sx={{ 
                        color: activeSection === item.to ? 'primary.main' : 'text.primary',
                        fontWeight: activeSection === item.to ? 600 : 400,
                      }}
                      disableTypography={false}
                    />
                    {activeSection === item.to && (
                      <Box 
                        component={motion.div}
                        layoutId="mobileActiveIndicator"
                        sx={{ 
                          width: 4,
                          height: '70%',
                          backgroundColor: 'primary.main',
                          borderRadius: 10,
                          ml: 1
                        }}
                      />
                    )}
          </ListItem>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                <Button 
                  variant="outlined" 
                  fullWidth
                  onClick={() => {
                    toggleCustomizeDialog();
                    handleDrawerToggle();
                  }}
                  sx={{
                    mt: 4,
                    py: 1.5,
                    borderRadius: '30px',
                    borderWidth: 2,
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    fontSize: '1rem',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(120deg, transparent, rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.2), transparent)`,
                      transform: 'translateX(-100%)',
                    },
                    '&:hover': {
                      borderColor: 'primary.light',
                      '&::before': {
                        transform: 'translateX(100%)',
                        transition: 'transform 0.8s ease',
                      }
                    }
                  }}
                >
                  Customize
                </Button>
              </motion.div>
      </List>
    </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          background: scrolled
            ? 'rgba(22, 33, 62, 0.8)'
            : 'rgba(22, 33, 62, 0.4)',
          backdropFilter: scrolled ? 'blur(15px)' : 'blur(8px)',
          boxShadow: scrolled 
            ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)' 
            : 'none',
          borderBottom: scrolled
            ? 'none'
            : `1px solid rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1)`,
          transition: 'all 0.4s ease'
        }}
      >
        <Toolbar sx={{ py: scrolled ? 1 : 1.8, transition: 'all 0.3s ease' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={logoVariants}
            style={{ flexGrow: 1 }}
          >
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                color: 'primary.main',
                fontWeight: 'bold',
                letterSpacing: '-0.02em',
                fontSize: scrolled ? '1.2rem' : '1.4rem',
                transition: 'all 0.3s ease',
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -5,
                  left: 0,
                  width: scrolled ? '25%' : '30%',
                  height: 3,
                  backgroundColor: 'primary.main',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                }
              }}
            >
          M.Hussain Ahmadi
        </Typography>
          </motion.div>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
            <Link
              to={item.to}
              smooth={true}
                  duration={800}
                  offset={-70}
              style={{
                    position: 'relative',
                    padding: '8px 16px',
                cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    sx={{
                      position: 'relative',
                      zIndex: 2,
                      color: activeSection === item.to ? 'primary.main' : 'text.primary',
                      fontWeight: activeSection === item.to ? 600 : 400,
                      transition: 'all 0.3s ease',
                      fontSize: '0.95rem',
                      px: 1,
                      py: 0.5,
                      borderRadius: '20px',
                      backgroundColor: activeSection === item.to 
                        ? `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.15)` 
                        : 'transparent',
                '&:hover': {
                        backgroundColor: `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1)`,
                        color: 'primary.main'
                      }
                    }}
                  >
                    {item.name}
                  </Box>
                  
                  {activeSection === item.to && (
                    <Box
                      component={motion.div}
                      layoutId="desktopActiveIndicator"
                      sx={{
                        position: 'absolute',
                        bottom: -2,
                        left: '50%',
                        width: '30%',
                        height: '3px',
                        backgroundColor: 'primary.main',
                        zIndex: 1,
                        transform: 'translateX(-50%)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              custom={navItems.length}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Button
                variant="outlined"
                onClick={toggleCustomizeDialog}
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  ml: 2,
                  px: 3,
                  py: 0.8,
                  borderRadius: '30px',
                  backdropFilter: 'blur(5px)',
                  background: `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1)`,
                  borderWidth: 1,
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.light',
                    background: `rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.2)`,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  }
                }}
              >
                Customize
              </Button>
            </motion.div>
          </Box>
          
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { md: 'none' },
              color: 'primary.main',
              position: 'relative',
              zIndex: 2001
            }}
          >
            <Box
              component={motion.div}
              initial={false}
              animate={mobileOpen ? "open" : "closed"}
              sx={{ 
                width: 35,
                height: 35,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '6px',
                transform: 'scale(0.8)'
              }}
            >
              <Box 
                component={motion.span} 
                sx={{
                  width: 25,
                  height: 2,
                  borderRadius: '3px',
                  backgroundColor: 'primary.main',
                  display: 'block',
                  transformOrigin: 'center',
                }}
                variants={{
                  closed: { rotate: 0, y: 0, width: 25 },
                  open: { rotate: 45, y: 4, width: 25 }
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              />
              <Box 
                component={motion.span} 
                sx={{
                  width: 15,
                  height: 2,
                  borderRadius: '3px',
                  backgroundColor: 'primary.main',
                  display: 'block',
                  alignSelf: 'flex-start',
                }}
                variants={{
                  closed: { opacity: 1, width: 15 },
                  open: { opacity: 0, width: 0 }
                }}
                transition={{ duration: 0.2 }}
              />
              <Box 
                component={motion.span} 
                sx={{
                  width: 25,
                  height: 2,
                  borderRadius: '3px',
                  backgroundColor: 'primary.main',
                  display: 'block',
                  transformOrigin: 'center',
                }}
                variants={{
                  closed: { rotate: 0, y: 0, width: 25 },
                  open: { rotate: -45, y: -4, width: 25 }
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              />
        </Box>
        </IconButton>
      </Toolbar>
        
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
          variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 280,
              background: 'transparent',
              boxShadow: '0 0 30px rgba(0, 0, 0, 0.3)',
            },
            '& .MuiBackdrop-root': {
              backdropFilter: 'blur(5px)',
              backgroundColor: 'rgba(16, 23, 42, 0.4)'
            }
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
    </HideOnScroll>
  );
};

export default Navbar; 