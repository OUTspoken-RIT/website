import { Box } from "."

export function BigBorder({className, color, children}) {
  return (
    <Box className={`big-border ${className ?? ""}`} color={color}>
      {children}
    </Box>
  )
}