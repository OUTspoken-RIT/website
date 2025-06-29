export function Subheading({ children }) {
  return <p className="subheading">{children}</p>;
}

export function SpeechBubble({ tail, children }) {
  const validTails = ["up left", "up right", "down left", "down right"];

  const safeTail = validTails.includes(tail) ? tail : "down right";

  return <span className={`speech-bubble ${safeTail}`}>{children}</span>;
}

export function Bubble({ children }) {
  return <span className="emph">{children}</span>;
}
