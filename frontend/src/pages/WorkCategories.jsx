import React, { useState } from "react";
import "./WorkCategories.css";

export default function WorkCategories() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const categories = [
    {
      title: "Education for All",
      desc:
        "We provide free education, digital literacy training, and study materials to underprivileged children.",
      img: "https://cdn-icons-png.flaticon.com/512/201/201818.png",
      criteria: [
        "Teach or mentor underprivileged students",
        "Contribute digital study materials",
        "Help organize literacy campaigns",
      ],
      color: "orange",
    },
    {
      title: "Health & Wellness",
      desc:
        "We organize health check-ups, blood donation camps, and hygiene awareness programs.",
      img: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
      criteria: [
        "Volunteer in health camps",
        "Promote hygiene awareness",
        "Assist in donation drives",
      ],
      color: "green",
    },
    {
      title: "Women Empowerment",
      desc:
        "We support women through skill development and financial literacy programs.",
      img: "https://cdn-icons-png.flaticon.com/512/1903/1903162.png",
      criteria: [
        "Conduct women-skill workshops",
        "Support small business initiatives",
        "Lead financial education sessions",
      ],
      color: "purple",
    },
    {
      title: "Environmental Care",
      desc:
        "Our green initiatives include tree planting, clean-up drives, and sustainability awareness.",
      img: "https://cdn-icons-png.flaticon.com/512/1532/1532688.png",
      criteria: [
        "Participate in clean-up drives",
        "Organize tree plantation events",
        "Spread eco-friendly practices",
      ],
      color: "teal",
    },
    {
      title: "Community Development",
      desc:
        "We help communities by supporting local infrastructure and small businesses.",
      img: "https://cdn-icons-png.flaticon.com/512/2917/2917242.png",
      criteria: [
        "Assist in local development events",
        "Support local small businesses",
        "Collaborate for community upliftment",
      ],
      color: "blue",
    },
  ];

  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="work-section">
      <div className="work-container">
        <h1 className="work-title">🌍 Our Work Categories</h1>
        <p className="work-subtitle">
          Each initiative reflects <strong>PAHDS Connect’s</strong> mission to empower, educate,
          and create lasting change. Click on any card to see how you can contribute.
        </p>

        <div className="work-grid">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`work-card ${flippedIndex === i ? "flipped" : ""}`}
              onClick={() => toggleFlip(i)}
            >
              {/* Front Side */}
              <div className="work-front">
                <div className="work-img-wrapper">
                  <img src={cat.img} alt={cat.title} />
                </div>
                <h2>{cat.title}</h2>
                <p>{cat.desc}</p>
              </div>

              {/* Back Side */}
              <div className={`work-back work-${cat.color}`}>
                <h3>Criteria to Contribute</h3>
                <ul>
                  {cat.criteria.map((c, j) => (
                    <li key={j}>✅ {c}</li>
                  ))}
                </ul>
                <p className="click-msg">Click again to go back ↩</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
