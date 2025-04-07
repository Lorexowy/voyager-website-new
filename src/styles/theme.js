// Upewnij się, że ten plik istnieje w lokalizacji src/styles/theme.js
// Jeśli nie, utwórz go z poniższą zawartością

const theme = {
  colors: {
    primary: '#a67c52', // Kolor brązowy - nawiązanie do skóry
    secondary: '#d4b483', // Jaśniejszy odcień brązu
    accent: '#8c7851', // Ciemniejszy, ziemisty odcień
    text: '#333333', // Ciemny szary dla tekstu
    lightText: '#777777', // Jaśniejszy szary dla mniej ważnego tekstu
    background: '#ffffff', // Białe tło
    lightBackground: '#f9f7f4', // Jasne beżowe tło dla sekcji
    error: '#d32f2f', // Czerwony dla błędów
    success: '#388e3c', // Zielony dla komunikatów sukcesu
    border: '#e0e0e0', // Jasny szary dla obramowań
  },
  
  fontSizes: {
    small: '0.875rem', // 14px
    medium: '1rem',    // 16px
    large: '1.25rem',  // 20px
    xlarge: '1.5rem',  // 24px
    xxlarge: '2rem',   // 32px
  },
  
  spacing: {
    xs: '0.25rem',  // 4px
    s: '0.5rem',    // 8px
    m: '1rem',      // 16px
    l: '1.5rem',    // 24px
    xl: '2rem',     // 32px
    xxl: '3rem',    // 48px
  },
  
  borderRadius: {
    small: '2px',
    medium: '4px',
    large: '8px',
  },
  
  shadows: {
    small: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    medium: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    large: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
  },
  
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    largeDesktop: '1200px',
  },
  
  container: {
    padding: '1rem',
    maxWidth: '1200px',
  },
};

export default theme;