import { Container } from "./Container";

export function Box({ className, color, children }) {
  return <Container color={color} className={`box ${className ?? ""}`}>{children}</Container>;
}

export function DashedBox({ color, children }) {
  return <Container color={color} className={"dashed-box"}>{children}</Container>;
}