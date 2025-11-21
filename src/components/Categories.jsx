import React from "react";
import categories from "../data/categories";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories-text">
        <h2>Learn essential career and life skills</h2>
        <p>
          Udemy helps you build in-demand skills fast and advance your career in
          a changing job market.
        </p>
      </div>

      <div className="categories-slider">
        {categories.map((item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </div>

      <div className="categories-dots">
        <span className="dot active" />
        <span className="dot" />
        <span className="dot" />
      </div>
    </section>
  );
}
