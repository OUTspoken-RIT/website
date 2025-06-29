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
    <a href={href} className={`button ${safeColor}`}>
      {children}
    </a>
  );
}

export function IconButton({ href, icon }) {
  return (
    <a href={href} className="icon-button">
      <Icon icon={icon} />
    </a>
  );
}
