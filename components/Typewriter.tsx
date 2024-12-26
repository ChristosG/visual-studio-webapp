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
    <div className="typewriter">
      {displayedText}
      <span className={`cursor ${isTyping ? '' : 'blink'}`}>|</span>
    </div>
  );
};

export default Typewriter;
