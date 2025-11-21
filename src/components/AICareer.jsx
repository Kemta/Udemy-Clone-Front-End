import React from "react";

export default function AICareer() {
  return (
    <section className="ai-career">
      <div className="ai-card">
        <div className="ai-text">
          <h2>Reimagine your career in the AI era</h2>
          <p>
            Future-proof your skills with Personal Plan. Get access to a variety
            of fresh content from real-world experts.
          </p>

          <ul className="ai-list">
            <li><span>✨</span> Learn AI and more</li>
            <li><span>🎓</span> Prep for a certification</li>
            <li><span>🤖</span> Practice with AI coaching</li>
            <li><span>🚀</span> Advance your career</li>
          </ul>

          <button className="ai-button">Learn more</button>
          <p className="ai-price">Starting at £204.00/month</p>
        </div>

        <div className="ai-media">
          <div className="career-main" />
          <div className="career-orange" />
          <div className="career-purple" />
        </div>
      </div>
    </section>
  );
}
