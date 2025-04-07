const theme = {
  colors: {
    primary: '#8B5A2B', // Ciemniejszy, elegancki brąz
    secondary: '#D2B48C', // Jasny brąz/tan
    accent: '#614E1A', // Ciemny, głęboki odcień brązu
    text: '#2D2A26', // Prawie czarny z nutą brązu
    lightText: '#6D6A65', // Ciemny szary z nutą brązu
    background: '#FFFCF7', // Kremowa biel - ciepły, miękki odcień białego
    lightBackground: '#F8F4E9', // Bardzo jasny beż
    error: '#C13515', // Ciemnoczerwony - mniej krzykliwy niż standardowy czerwony
    success: '#4A7C59', // Ciemnozielony - pasujący do palety
    border: '#E8E0D0', // Jasny beż dla obramowań
    headerBackground: '#FFFCF7', // Tło dla nagłówka
    footerBackground: '#3A3633', // Ciemny brąz/szary dla stopki
    footerText: '#F8F4E9', // Jasny tekst do ciemnego tła stopki
  },
  
  fontSizes: {
    xsmall: '0.75rem',  // 12px
    small: '0.875rem',  // 14px
    medium: '1rem',     // 16px
    large: '1.25rem',   // 20px
    xlarge: '1.5rem',   // 24px
    xxlarge: '2rem',    // 32px
    xxxlarge: '2.5rem', // 40px
    huge: '3rem',       // 48px
  },
  
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  spacing: {
    xxs: '0.125rem',  // 2px
    xs: '0.25rem',    // 4px
    s: '0.5rem',      // 8px
    m: '1rem',        // 16px
    l: '1.5rem',      // 24px
    xl: '2rem',       // 32px
    xxl: '3rem',      // 48px
    xxxl: '4rem',     // 64px
    huge: '6rem',     // 96px
  },
  
  borderRadius: {
    small: '2px',
    medium: '4px',
    large: '8px',
    xl: '12px',
    round: '50%',
  },
  
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.05)',
    medium: '0 4px 12px rgba(0,0,0,0.08)',
    large: '0 8px 24px rgba(0,0,0,0.12)',
    subtle: '0 1px 3px rgba(0,0,0,0.05)',
    elevated: '0 16px 48px rgba(0,0,0,0.16)',
  },
  
  transitions: {
    short: 'all 0.2s ease',
    medium: 'all 0.3s ease',
    long: 'all 0.5s ease',
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
    narrow: '800px',
  },
  
  // Specyficzne style dla elementów typografii
  typography: {
    headingFont: "'Playfair Display', serif", // Elegancka czcionka dla nagłówków
    bodyFont: "'Roboto', sans-serif", // Czytelna czcionka dla treści
    lineHeight: {
      tight: 1.2,
      normal: 1.6,
      loose: 1.8
    }
  }
};

export default theme;