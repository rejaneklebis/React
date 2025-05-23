import React, { useState, useEffect } from "react";

function Letreiro() {
  const text = "Venha Estudar Na Fatec!";
  const speed = 100;
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      setIndex((prevIndex) => prevIndex + 1);

      if (index >= text.length) {
        setDisplayedText(""); // Limpa o texto exibido
        setIndex(0); // Reseta o índice para começar de novo
      }
    }, speed);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmontar
  }, [index, text, speed]);

  return <h1 className="letreiro-container">{displayedText}</h1>;
}

export default Letreiro;
