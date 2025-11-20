import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <img src="/images/logo.png" alt="Udemy logo" className="logo" />
        <button className="nav-explore">Explore</button>
      </div>

      <div className="nav-search">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search for anything" />
      </div>

      <nav className="nav-links">
        <a href="#">Plans &amp; Pricing</a>
        <a href="#">Udemy Business</a>
        <a href="#">Teach on Udemy</a>
      </nav>

      <div className="nav-actions">
        <button className="nav-login">Log in</button>
        <button className="nav-signup">Sign up</button>
        <button className="nav-globe">🌐</button>
      </div>
    </header>
  );
}
