import React from "react";

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="course-body">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-instructor">{course.instructor}</p>
        <div className="course-meta">
          <span className="course-rating">⭐ {course.rating}</span>
          <span className="course-ratings">({course.ratingsCount} ratings)</span>
        </div>
        <div className="course-price-row">
          <span className="course-price">{course.price}</span>
          <span className="course-old-price">{course.oldPrice}</span>
        </div>
        {course.badge && (
          <span className="course-badge">{course.badge}</span>
        )}
      </div>
    </article>
  );
}
