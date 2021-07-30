import type { Breakpoint } from '@material-ui/system'
import useMUIMediaQuery from '@material-ui/core/useMediaQuery'

import { useTheme } from 'styles/theme'

export default function useMediaQuery(breakpoint: Breakpoint) {
  const theme = useTheme()
  return useMUIMediaQuery(theme.breakpoints.down(breakpoint))
}
