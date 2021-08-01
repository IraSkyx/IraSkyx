import { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import SpeedDial from '@material-ui/core/SpeedDial'
import Typography from '@material-ui/core/Typography'
import SpeedDialAction from '@material-ui/core/SpeedDialAction'

import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import useMediaQuery from 'components/hooks/useMediaQuery'

const Footer: React.FC = () => {
  const isMobile = useMediaQuery('md')
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const openNewWindow = (url: string) => () => window.open(url, '_blank noreferrer noopener')

  return isMobile ? (
    <SpeedDial
      ariaLabel="Social medias"
      className="fixed bottom-16 right-4"
      icon={
        <lord-icon
          src="https://cdn.lordicon.com/koyivthb.json"
          trigger="loop"
          delay="3000"
          colors="primary:#ffffff,secondary:#ffffff"
          style={{ width: 32, height: 32 }}
        />
      }
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      FabProps={{ className: 'bg-flatBlack/90 active:bg-flatBlack/90 focus:bg-flatBlack/90' }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen={isMobile}
          onClick={openNewWindow(action.url)}
        />
      ))}
    </SpeedDial>
  ) : (
    <Paper className="flex flex-col justify-center items-center opacity-80" variant="outlined">
      <div className="grid grid-cols-3 gap-4 m-4">
        <Typography
          variant="subtitle1"
          color="textSecondary"
          component="a"
          href="https://twitter.com/Adrien_Skyx"
          target="_blank noreferrer noopener"
        >
          <TwitterIcon /> Twitter
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          component="a"
          href="https://github.com/IraSkyx"
          target="_blank noreferrer noopener"
        >
          <GitHubIcon /> Github
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          component="a"
          href="https://www.linkedin.com/in/adrien-lenoir-50918b157"
          target="_blank noreferrer noopener"
        >
          <LinkedInIcon /> Linkedin
        </Typography>
      </div>
    </Paper>
  )
}

const actions = [
  { icon: <GitHubIcon />, name: 'GitHub', url: 'https://twitter.com/Adrien_Skyx' },
  { icon: <TwitterIcon />, name: 'Twitter', url: 'https://github.com/IraSkyx' },
  {
    icon: <LinkedInIcon />,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/adrien-lenoir-50918b157',
  },
]

export default Footer
