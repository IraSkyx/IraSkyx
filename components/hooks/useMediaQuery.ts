import type { Breakpoint } from '@mui/system'
import useMUIMediaQuery from '@mui/material/useMediaQuery'

import { useTheme } from 'styles/theme'

export default function useMediaQuery(breakpoint: Breakpoint) {
  const theme = useTheme()
  return useMUIMediaQuery(theme.breakpoints.down(breakpoint))
}
