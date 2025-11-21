import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setIsLoaded(true);
    // Apply theme class to body
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [theme]);

  return (
    <>
      <Background theme={theme} />
      <div className={`app-container ${isLoaded ? 'loaded' : ''}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills theme={theme} />
          <Experience />
          <Projects />
          <Contact />
        </main>

      </div>
    </>
  );
}

export default App;
