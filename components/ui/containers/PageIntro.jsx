import { Box } from "./SimpleBoxes";

export function PageIntro({children}) {
  return (
    <Box className={"page-intro"}>
      {children}
    </Box>
  )
}