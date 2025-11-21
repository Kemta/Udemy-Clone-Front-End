import React, { useState } from "react";
import courses from "../data/courses";
import CourseCard from "./CourseCard";

const tabs = [
  "Artificial Intelligence (AI)",
  "Python",
  "Microsoft Excel",
  "AI Agents & Agentic AI",
  "Digital Marketing",
  "Amazon AWS"
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="skills">
      <h2>Skills to transform your career and life</h2>
      <p className="skills-subtitle">
        From critical skills to technical topics, Udemy supports your professional
        development.
      </p>

      <div className="skills-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={
              "skills-tab" + (tab === activeTab ? " skills-tab-active" : "")
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <a href="#" className="skills-link">
        Show all Artificial Intelligence (AI) courses →
      </a>
    </section>
  );
}
