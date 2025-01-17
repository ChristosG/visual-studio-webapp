import React, { useState, useEffect } from 'react';
// import './Typewriter.css'; 

const Typewriter: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true); // To control blinking

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false); // Stop typing and allow cursor to blink
    }
  }, [index, text]);

  return (
    <h3 className=" font-semibold leading-snug tracking-wide">
      {displayedText}
      <span className={`cursor text-2xl md:text-3xl ${isTyping ? '' : 'blink text-2xl md:text-3xl'}`}>|</span>
    </h3>
  );
};

export default Typewriter;
