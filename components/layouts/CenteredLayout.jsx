import { Container } from "../ui/containers/Container";

export function CenteredLayout({ color, children }) {
  return (
    <Container className="centered-layout" color={color}>
      <div className="content">{children}</div>
    </Container>
  );
}
