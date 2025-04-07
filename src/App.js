import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Importy stylów
import theme from './styles/theme';

// Bardzo uproszczone komponenty stron
const Home = () => (
  <div style={{ padding: '20px', maxWidth: '960px', margin: '0 auto' }}>
    <h1 style={{ color: '#a67c52', textAlign: 'center' }}>VOYAGER</h1>
    <p style={{ textAlign: 'center' }}>Rzemieślnicze wyroby skórzane najwyższej jakości</p>
  </div>
);

const Handbags = () => <div style={{ padding: '20px' }}><h1>Torebki</h1></div>;
const Belts = () => <div style={{ padding: '20px' }}><h1>Paski</h1></div>;
const Backpacks = () => <div style={{ padding: '20px' }}><h1>Plecaki</h1></div>;
const Personalization = () => <div style={{ padding: '20px' }}><h1>Personalizacja</h1></div>;
const AleksandraSopel = () => <div style={{ padding: '20px' }}><h1>AS | Aleksandra Sopel</h1></div>;
const AdminLogin = () => <div style={{ padding: '20px' }}><h1>Logowanie administratora</h1></div>;
const AdminPanel = () => <div style={{ padding: '20px' }}><h1>Panel administratora</h1></div>;

// Bardzo uproszczony Header
const Header = () => (
  <header style={{ 
    padding: '20px 0', 
    borderBottom: '1px solid #eee',
    marginBottom: '20px'
  }}>
    <div style={{ 
      maxWidth: '960px', 
      margin: '0 auto', 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <a href="#/" style={{ 
        fontSize: '24px', 
        fontWeight: 'bold',
        color: '#a67c52',
        textDecoration: 'none'
      }}>
        VOYAGER
      </a>
      <nav>
        <ul style={{ 
          display: 'flex', 
          listStyle: 'none', 
          gap: '20px'
        }}>
          <li><a href="#/" style={{ color: '#333' }}>Strona główna</a></li>
          <li><a href="#/torebki" style={{ color: '#333' }}>Torebki</a></li>
          <li><a href="#/paski" style={{ color: '#333' }}>Paski</a></li>
          <li><a href="#/plecaki" style={{ color: '#333' }}>Plecaki</a></li>
          <li><a href="#/personalizacja" style={{ color: '#333' }}>Personalizacja</a></li>
          <li><a href="#/aleksandra-sopel" style={{ color: '#333' }}>AS | Aleksandra Sopel</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

// Bardzo uproszczony Footer
const Footer = () => (
  <footer style={{ 
    padding: '20px 0', 
    borderTop: '1px solid #eee',
    marginTop: '40px',
    textAlign: 'center',
    color: '#777'
  }}>
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
      &copy; {new Date().getFullYear()} Voyager. Wszystkie prawa zastrzeżone.
    </div>
  </footer>
);

// Globalny styl
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

function App() {
  console.log('App component rendering');
  
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;