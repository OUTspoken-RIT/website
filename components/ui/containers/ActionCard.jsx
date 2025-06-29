import { Box } from "./SimpleBoxes";

export function ActionCard({ className, color, children }) {
  return (
    <Box color={color} className={`action-card ${className ?? ""}`}>
      {children}
    </Box>
  )
}