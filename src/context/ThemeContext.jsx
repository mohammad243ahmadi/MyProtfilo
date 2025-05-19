import React, { createContext, useState, useContext, useEffect } from "react";

// Color theme presets
const colorPresets = [
  { primary: "#FF6B6B", secondary: "#4ECDC4" }, // Current theme (coral)
  { primary: "#3498db", secondary: "#2980b9" }, // Blue
  { primary: "#2ecc71", secondary: "#27ae60" }, // Green
  { primary: "#e74c3c", secondary: "#c0392b" }, // Red
  { primary: "#f39c12", secondary: "#d35400" }, // Orange
  { primary: "#9b59b6", secondary: "#8e44ad" }, // Purple
  { primary: "#f368e0", secondary: "#e84393" }, // Pink
  { primary: "#FF9A00", secondary: "#FF7B00" }, // Amber
  { primary: "#00b894", secondary: "#00a884" }, // Teal
  { primary: "#fdcb6e", secondary: "#f9ca24" }, // Yellow
  { primary: "#00cec9", secondary: "#00b5ad" }, // Cyan
];

// Font presets
const fontPresets = [
  { name: "Poppins", family: '"Poppins", sans-serif' },
  { name: "Playfair", family: '"Playfair Display", serif' },
  { name: "Montserrat", family: '"Montserrat", sans-serif' },
  { name: "Roboto", family: '"Roboto", sans-serif' },
  { name: "Open Sans", family: '"Open Sans", sans-serif' },
  { name: "Raleway", family: '"Raleway", sans-serif' },
  { name: "Lora", family: '"Lora", serif' },
  { name: "Nunito", family: '"Nunito", sans-serif' },
  { name: "Source", family: '"Source Sans Pro", sans-serif' },
];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(colorPresets[0]);
  const [currentFont, setCurrentFont] = useState(fontPresets[0]);
  const [customizeOpen, setCustomizeOpen] = useState(false);

  // Load saved theme preferences from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("currentTheme");
    const savedFont = localStorage.getItem("currentFont");

    if (savedTheme) {
      try {
        setCurrentTheme(JSON.parse(savedTheme));
      } catch (e) {
        console.error("Could not parse saved theme");
      }
    }

    if (savedFont) {
      try {
        setCurrentFont(JSON.parse(savedFont));
      } catch (e) {
        console.error("Could not parse saved font");
      }
    }
  }, []);

  // Save theme preferences to localStorage when changed
  useEffect(() => {
    localStorage.setItem("currentTheme", JSON.stringify(currentTheme));
  }, [currentTheme]);

  useEffect(() => {
    localStorage.setItem("currentFont", JSON.stringify(currentFont));
  }, [currentFont]);

  const handleColorChange = (color) => {
    setCurrentTheme(color);
  };

  const handleFontChange = (font) => {
    setCurrentFont(font);
  };

  const toggleCustomizeDialog = () => {
    setCustomizeOpen(!customizeOpen);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        currentFont,
        colorPresets,
        fontPresets,
        customizeOpen,
        handleColorChange,
        handleFontChange,
        toggleCustomizeDialog,
        setCustomizeOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
