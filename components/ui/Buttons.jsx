import Link from "next/link";
import { Icon } from "./Icon";

export function LinkButton({ href, color, children }) {
  const validColors = [
    "primary",
    "primary-dark",
    "positive",
    "negative",
    "foam",
    "white",
  ];

  const safeColor = validColors.includes(color) ? color : "primary";

  return (
    <Link href={href} className={`btn button ${safeColor}`}>
      {children}
    </Link>
  );
}

export function IconButton({ href, icon }) {
  return (
    <a href={href} className="icon-button">
      <Icon icon={icon} />
    </a>
  );
}
