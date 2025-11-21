import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-card">
          <h1>Learn more, spend less — Black Friday Sale from £279.99</h1>
          <p>Sitewide savings on thousands of courses. Ends Nov 28.</p>
        </div>
        <div className="hero-image-placeholder">
          {/* In a real app you could use a real image here */}
          <img src="/images/hero-image.png" alt="Hero" />
        </div>
      </div>
    </section>
  );
}
