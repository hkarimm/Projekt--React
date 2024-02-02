import React from 'react';
import { connect } from 'react-redux';
import { toggleDarkMode } from './darkModeActions';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  const handleToggle = () => {
    toggleDarkMode();
    // Ändrar klassen på body-elementet beroende på dark mode-status
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div>
      <label>
        Dark Mode
        <input type="checkbox" checked={darkMode} onChange={handleToggle} />
      </label>
    </div>
  );
};

// Hämtar dark mode-status från Redux Store
const mapStateToProps = (state) => ({
  darkMode: state.darkMode.darkMode,
});

const mapDispatchToProps = {
  toggleDarkMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(DarkModeToggle);
