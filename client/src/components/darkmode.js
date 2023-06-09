import React, { useState, useEffect } from 'react';
import './darkMode.css';
import { Switch } from "@nextui-org/react";
function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      <Switch checked={true}  onChange = {toggleTheme} />
    </div>
  );
}
export default App;