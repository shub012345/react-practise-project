import  { useState } from 'react';
import './ThemeCode.css';

const themes = {
  light: {
    background: '#ffffff',
    color: '#333333',
  },
  dark: {
    background: '#333333',
    color: '#ffffff',
  },
};

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div style={{ ...themes[theme] }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
    </div>
  );
};

const ThemeCode = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Example</h1>
        <p>This is a theme!</p>
      </div>
    </ThemeProvider>
  );
};

export default ThemeCode;
