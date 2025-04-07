import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Importy styli
import theme from './styles/theme';

// Importy komponentów stron
import Home from './components/pages/Home';
import Handbags from './components/pages/Handbags';
import Belts from './components/pages/Belts';
import Backpacks from './components/pages/Backpacks';
import Personalization from './components/pages/Personalization';
import AleksandraSopel from './components/pages/AleksandraSopel';
import AdminLogin from './components/admin/AdminLogin';
import AdminPanel from './components/admin/AdminPanel';

// Importy komponentów wspólnych
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { AuthProvider } from './contexts/AuthContext';

// Globalny styl
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${props => props.theme.typography.bodyFont};
    line-height: ${props => props.theme.typography.lineHeight.normal};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.typography.headingFont};
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button, input, select, textarea {
    font-family: ${props => props.theme.typography.bodyFont};
  }
  
  /* Dodatkowe style dla scrollbara */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.lightBackground};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.accent};
  }
`;

function App() {
  // Efekt do ustawienia tytułu strony
  useEffect(() => {
    document.title = "Voyager | Rzemieślnicze wyroby skórzane";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Router>
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/torebki" element={<Handbags />} />
                <Route path="/paski" element={<Belts />} />
                <Route path="/plecaki" element={<Backpacks />} />
                <Route path="/personalizacja" element={<Personalization />} />
                <Route path="/aleksandra-sopel" element={<AleksandraSopel />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/*" element={<AdminPanel />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;