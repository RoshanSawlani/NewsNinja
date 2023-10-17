import React, { Component } from 'react';


class DarkModeToggle extends Component {
  state = {
    isDarkMode: localStorage.getItem('darkMode') === 'true',
  };

  toggleDarkMode = () => {
    const newMode = !this.state.isDarkMode;
    this.setState({ isDarkMode: newMode });
    localStorage.setItem('darkMode', newMode);
    document.body.style.backgroundColor = newMode ? '#333' : '#fff';
    document.body.style.color = newMode ? '#fff' : '#000';
  };

  render() {
    const toggleText = this.state.isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode';
    const textColor = this.state.isDarkMode ? 'white': 'white';

    return (
      <div className="form-check form-switch">
        <input
          type="checkbox"
          className="form-check-input"
          id="darkModeSwitch"
          checked={this.state.isDarkMode}
          onChange={this.toggleDarkMode}
        />
        <label className="form-check-label" htmlFor="darkModeSwitch" style={{ color: textColor }}>
          {toggleText}
        </label>
      </div>
    );
  }
}

export default DarkModeToggle;
