import React from "react";
import { useNavigate } from "react-router-dom";
import './navbarCountries.css';

const CountriesNavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="button-navbar">
      <div className="button-container">
        <button onClick={() => navigate('/')} className="nav-button">Home</button>
        <button onClick={() => navigate('/about')} className="nav-button">About</button>
      </div>
    </nav>
  );
};

export default CountriesNavBar;
