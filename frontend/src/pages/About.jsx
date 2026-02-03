import React from "react";
import { HeartHandshake, Users, Lightbulb } from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>
          About <span>PAHDS Connect</span>
        </h1>
        <p>
          PAHDS Connect is a non-governmental organization dedicated to empowering individuals 
          and communities through education, health, and digital literacy. We aim to connect 
          hearts and hands to build a future rooted in compassion, inclusion, and sustainable growth.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At PAHDS Connect, our mission is to uplift rural and underprivileged communities by 
          bridging the digital and social gap. We strive to deliver opportunities that enable 
          people to become self-reliant, confident, and aware of their potential.
        </p>
        <p>
          We blend compassion with innovation — bringing digital literacy, skill training, and 
          awareness programs to the grassroots level. We believe that sustainable change begins 
          when people are empowered with the right knowledge and resources.
        </p>
      </section>

      {/* Vision Section */}
      <section className="about-section alternate">
        <h2>Our Vision</h2>
        <p>
          We envision a world where every person, regardless of background or geography, has access 
          to opportunities that help them lead a dignified life. Through collective participation 
          and community collaboration, PAHDS Connect aims to create sustainable solutions for 
          education, healthcare, and social development.
        </p>
        <p>
          Our volunteers and partners work hand-in-hand to create real impact — from organizing 
          health camps to conducting digital training for rural youth. Together, we strive to 
          transform empathy into lasting progress.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <HeartHandshake className="value-icon" size={50} color="#009688" />
            <h3>Compassion</h3>
            <p>
              We believe empathy and kindness can heal communities and inspire transformation at every level.
            </p>
          </div>
          <div className="value-card">
            <Users className="value-icon" size={50} color="#009688" />
            <h3>Collaboration</h3>
            <p>
              We work with volunteers, local bodies, and organizations to create meaningful, long-term change.
            </p>
          </div>
          <div className="value-card">
            <Lightbulb className="value-icon" size={50} color="#009688" />
            <h3>Innovation</h3>
            <p>
              We embrace technology to improve lives — from digital education to efficient communication and outreach.
            </p>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="about-join">
        <h2>Join Hands with Us</h2>
        <p>
          Become a part of our growing family of volunteers and changemakers. Together, we can uplift 
          communities, spread awareness, and bring equality through action and compassion.
        </p>
        <a href="/volunteer" className="join-btn">
          Become a Volunteer
        </a>
      </section>
    </div>
  );
}
