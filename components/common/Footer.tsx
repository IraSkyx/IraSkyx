import NoSsr from '@material-ui/core/NoSsr'
import { useState, cloneElement } from 'react'
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

  return (
    <NoSsr>
      {isMobile ? (
        <SpeedDial
          className="fixed bottom-16 right-4"
          ariaLabel="Social medias"
          icon={
            <lord-icon
              src="https://cdn.lordicon.com/dxjqoygy.json"
              trigger="loop"
              delay="3000"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: 32, height: 32 }}
            />
          }
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
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
        <div className="grid grid-cols-3 gap-4 min-h-64 dark:bg-flatBlack">
          {actions.map((action) => (
            <Typography
              key={action.name}
              className="flex justify-center items-center space-x-4"
              variant="subtitle1"
              onClick={openNewWindow(action.url)}
              component="a"
              color="textSecondary"
            >
              {cloneElement(action.icon, { className: 'mr-2' })} {action.name}
            </Typography>
          ))}
        </div>
      )}
    </NoSsr>
  )
}

const actions = [
  { icon: <GitHubIcon />, name: 'GitHub', url: 'https://twitter.com/Adrien_Skyx' },
  {
    icon: <LinkedInIcon />,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/adrien-lenoir-50918b157',
  },
  { icon: <TwitterIcon />, name: 'Twitter', url: 'https://github.com/IraSkyx' },
]

export default Footer
