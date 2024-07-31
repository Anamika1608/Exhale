import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Breathe.css";

const circleWidth = window.innerWidth / 4;

export default function App() {
  const [inhale, setInhale] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const animationSequence = async () => {
      while (true) {
        await controls.start({ scale: 1.1, rotate: 180, transition: { duration: 4 } });
        setInhale(false);
        await controls.start({ scale: 1, rotate: 360, transition: { duration: 4 } });
        setInhale(true);
      }
    };
    animationSequence();
  }, [controls]);

  return (
    <div className="container">
      <motion.div
        className="text-container"
        initial={{ opacity: 1 }}
        animate={{ opacity: inhale ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="breathe-text">Inhale</span>
      </motion.div>
      <motion.div
        className="text-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: inhale ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="breathe-text">Exhale</span>
      </motion.div>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
        <motion.div
          key={item}
          className="circle"
          style={{
            width: circleWidth,
            height: circleWidth,
            rotate: `${item * 45}deg`,
          }}
          animate={controls}
        />
      ))}
    </div>
  );
}