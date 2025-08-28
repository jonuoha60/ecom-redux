import React, { useState } from "react";
import "./css/reviews.css";
import heroImg from "../assets/buffet.jpeg";

export const Reviews = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const reviews = [
    {
      name: "Chinedu O.",
      rating: 5,
      comment: "Absolutely delicious! The Jollof Rice was perfectly spiced and delivered hot."
    },
    {
      name: "Ada E.",
      rating: 4,
      comment: "Great flavors and fast delivery. Loved the Egusi Soup!"
    },
    {
      name: "Emeka N.",
      rating: 5,
      comment: "Chinwe Kitchen never disappoints. Fresh, authentic Nigerian dishes every time."
    },
    {
      name: "Ngozi K.",
      rating: 4,
      comment: "The food tastes like home. Loved the Ukodo, very comforting!"
    },
  ];

  const renderStars = (count) => {
    return "★".repeat(count) + "☆".repeat(5 - count);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="review-top">
      <section
        style={{
          background: `linear-gradient(rgba(50,49,54,0.7), rgba(50,49,54,0.7)), url(${heroImg}) no-repeat center center`,
          backgroundSize: "cover",
          color: "white",
          padding: "5rem 0",
          position: "relative",
          textAlign: "center",
        }}
        className="hero"
      >
        <div className="hero-quote">
          <h1>"Good food brings family together."</h1>
          <p>- Chinwe Kitchen</p>
        </div>
      </section>

      <section className="reviews-section">
        <h1>What are customers saying?</h1>
        <p className="subtext-reviews">If you enjoyed, tell us!</p>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <h3>{review.name}</h3>
              <p className="stars">{renderStars(review.rating)}</p>
              <p className="comment">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Newsletter Signup Form */}
        <div className="newsletter">
          <h2>Want To Know What's New For Us?</h2>
          <p>Get the latest when you sign up for our newsletter.</p>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          ) : (
            <p className="thankyou">Thank you for subscribing!</p>
          )}
        </div>
      </section>
    </div>
  );
};
