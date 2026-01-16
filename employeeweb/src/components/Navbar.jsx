import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-icon">🏢</span>
          <span className="brand-text">Employee Manager</span>
        </div>

        <div className="nav-links">
          <Link to="/dashboard" className="nav-link">
            📊 Dashboard
          </Link>
        </div>

        <div className="nav-user">
          {user && (
            <>
              <span className="user-info">👤 {user}</span>
              <button onClick={onLogout} className="logout-btn">
                🚪 Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}