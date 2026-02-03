import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="overlay">
          <h1 className="fade-in">
            Empowering Lives, <span>Building Futures</span>
          </h1>
          <p className="slide-up">
            Peoples Action for Human Development Society (PAHDS) connects
            volunteers and communities to drive change through
            <strong> education</strong>, <strong>digital empowerment</strong>,
            <strong> women upliftment</strong>, and <strong>rural development</strong>.
          </p>
          <a href="/volunteer" className="btn">
            🤝 Join as Volunteer
          </a>

          <div className="scroll-down">
            <span></span>
            <p>Scroll to explore</p>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <h2>About PAHDS Connect</h2>
        <p>
          We are a community-driven non-profit dedicated to creating
          opportunities for education, livelihood, and sustainable growth.
          Together, we aim to bring hope, dignity, and progress to every corner
          of society.
        </p>
      </section>
    </div>
  );
}
