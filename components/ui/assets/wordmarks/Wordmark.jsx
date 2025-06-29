import Lockup from "./lockup.svg";
import WordmarkColor from "./wordmark-color.svg";
import WordmarkMono from "./wordmark-mono.svg";
import WordmarkOut from "./wordmark-out.svg";
import BigOut from "./big-out.svg";

export function Wordmark({ style }) {
  const validStyles = {
    lockup: Lockup,
    color: WordmarkColor,
    mono: WordmarkMono,
    alternate: WordmarkOut,
    alt: WordmarkOut,
    out: BigOut,
  };

  const safeWordmark = validStyles[style] ?? WordmarkMono;

  return (
    <img src={safeWordmark.src} alt="outspoken" />
  );
}
