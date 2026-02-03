import React, { useState } from "react";
import "./Badges.css";
import {motion, AnimatePresence } from "framer-motion";

export default function Badges() {
  const [selectedBadge, setSelectedBadge] = useState(null);

  const badges = [
    {
      name: "Community Star",
      desc: "Awarded to volunteers completing 25+ hours of community service and outreach.",
      icon: "https://cdn-icons-png.flaticon.com/512/2583/2583314.png",
      color: "teal",
      criteria: [
        "Complete at least 25 verified community service hours.",
        "Participate in 2 or more PAHDS outreach programs.",
        "Maintain consistent volunteer attendance.",
      ],
      rewards: "Certificate of Appreciation & digital badge for your profile.",
    },
    {
      name: "Helping Hand",
      desc: "Given for organizing or leading social awareness or NGO-driven events.",
      icon: "https://cdn-icons-png.flaticon.com/512/3063/3063825.png",
      color: "cyan",
      criteria: [
        "Lead or co-lead at least one major social or NGO event.",
        "Coordinate 5+ volunteers successfully.",
        "Positive feedback from team and event supervisors.",
      ],
      rewards: "Recognition on the PAHDS website & exclusive volunteer perks.",
    },
    {
      name: "Change Maker",
      desc: "Recognizes volunteers who bring innovation, compassion, and lasting social impact.",
      icon: "https://cdn-icons-png.flaticon.com/512/2907/2907398.png",
      color: "yellow",
      criteria: [
        "Introduce or contribute to a project that creates real social impact.",
        "Demonstrate leadership and innovation in problem-solving.",
        "Sustain your contribution for at least one semester.",
      ],
      rewards: "‘Change Maker’ digital medal, profile highlight, and letter of recognition.",
    },
  ];

  return (
    <section className="badges-section">
      <div className="badges-container">
        <motion.h1
          className="badges-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🏅 Badges & Rewards
        </motion.h1>

        <motion.p
          className="badges-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Click any badge below to learn about the <strong>criteria</strong> and <strong>rewards</strong> you can earn through your dedication and effort.
        </motion.p>

        <div className="badges-grid">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              className={`badge-card badge-${badge.color}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedBadge(badge)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="badge-icon">
                <motion.img
                  src={badge.icon}
                  alt={badge.name}
                  animate={{
                    y: [0, -6, 0],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <h2>{badge.name}</h2>
              <p>{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === MODAL POPUP === */}
      <AnimatePresence>
        {selectedBadge && (
          <motion.div
            className="badge-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBadge(null)}
          >
            <motion.div
              className="badge-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedBadge.icon} alt={selectedBadge.name} />
              <h2>{selectedBadge.name}</h2>
              <p className="modal-desc">{selectedBadge.desc}</p>

              <h3>🎯 Criteria to Earn:</h3>
              <ul>
                {selectedBadge.criteria.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>

              <h3>🏆 Rewards:</h3>
              <p className="modal-reward">{selectedBadge.rewards}</p>

              <button
                className="close-btn"
                onClick={() => setSelectedBadge(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
