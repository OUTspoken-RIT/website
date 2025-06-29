import { Container } from "../ui/containers/Container";

export function TwoColumnLayout({ stack, color, children }) {
  const validStacks = ["right-over-left", "left-over-right"];
  const safeStack = validStacks.includes(stack) ? stack : "left-over-right";

  return (
    <Container color={color} className={`two-column-layout ${safeStack}`}>
      {children}
    </Container>
  );
}

export function LeftColumn({ color, children }) {
  return (
    <Container color={color} className="column-left">
      {children}
    </Container>
  );
}

export function RightColumn({ color, children }) {
  return (
    <Container color={color} className="column-right">
      {children}
    </Container>
  );
}
