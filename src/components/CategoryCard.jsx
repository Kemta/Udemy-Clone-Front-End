import React from "react";

export default function CategoryCard({ item }) {
  return (
    <article className="category-card">
      <img src={item.image} alt={item.title} className="category-image" />
      <div className="category-info">
        <div className="category-learners">{item.learners} learners</div>
        <h3>{item.title}</h3>
        <button className="category-arrow">→</button>
      </div>
    </article>
  );
}
