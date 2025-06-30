import { Container } from "./Container";

export function FancyBox({ className, color, children }) {
  return <Container color={color} className={`fancy-header ${className ?? ""}`}>{children}</Container>;
}

export function FancyBoxHeader({ children }) {
  return <header>{children}</header>;
}

export function FancyBoxContent({ children }) {
  return <section className="content">{children}</section>;
}