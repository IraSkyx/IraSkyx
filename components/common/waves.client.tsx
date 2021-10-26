import { NoSsr } from '@mui/material'
import { useTheme } from 'styles/theme'

const Waves: React.FC = () => {
  const theme = useTheme()

  return (
    <NoSsr>
      <div className="flex flex-grow w-full self-end relative min-h-64">
        <svg
          className="h-16 w-full z-10 absolute inset-x-0 bottom-16 md:bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28 "
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax1">
            <use xlinkHref="#gentle-wave" x="50" y="3" fill="#FD8224" />
          </g>
          <g className="parallax2">
            <use xlinkHref="#gentle-wave" x="50" y="0" fill="#9062F7" />
          </g>
          <g className="parallax3">
            <use xlinkHref="#gentle-wave" x="50" y="9" fill="#22B1EF" />
          </g>
          <g className="parallax4">
            <use
              xlinkHref="#gentle-wave"
              x="50"
              y="6"
              fill={theme.palette.mode === 'light' ? '#fff' : '#121212'}
            />
          </g>
        </svg>
      </div>
    </NoSsr>
  )
}

export default Waves
