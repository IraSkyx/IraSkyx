import { forwardRef } from 'react'
import Box from '@material-ui/core/Box'
import Slide from '@material-ui/core/Slide'
import Paper from '@material-ui/core/Paper'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import { TransitionProps } from '@material-ui/core/transitions'
import DialogContentText from '@material-ui/core/DialogContentText'

import CloseIcon from '@material-ui/icons/Close'

import Link from 'components/utils/Link'
import type { Project } from './Projects'
import useMediaQuery from 'components/hooks/useMediaQuery'
import { getRelativeTime } from 'components/utils/functions'

interface ProjectDialogProps {
  open: boolean
  item?: Project
  onClose: () => void
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const ProjectDialog: React.FC<ProjectDialogProps> = ({ open, item, onClose }) => {
  const fullScreen = useMediaQuery('md')

  return (
    <Dialog
      maxWidth="lg"
      scroll="body"
      open={open}
      TransitionComponent={Transition}
      fullScreen={fullScreen}
      keepMounted
      onClose={onClose}
      aria-describedby="project-dialog-description"
    >
      <IconButton
        className="z-10 fixed top-6 right-6 bg-gray-700/40 text-white"
        onClick={onClose}
        aria-label="Close"
      >
        <CloseIcon />
      </IconButton>

      <DialogTitle className="p-0">
        <Paper
          className="relative bg-gray-800 text-white mb-8 bg-cover bg-no-repeat bg-top h-96"
          sx={{ backgroundImage: `url(${item?.img.src})` }}
        >
          <Box className="absolute inset-0 bg-black/30" />

          <Box className="absolute bottom-0 p-6">
            <Typography component="h1" variant="h4" color="inherit" gutterBottom>
              {item?.title}
            </Typography>
            <Typography variant="subtitle2" color="inherit">
              {item?.date && getRelativeTime(+item.date)}
            </Typography>
          </Box>

          {item && (
            <IconButton
              className="absolute bottom-6 right-6 bg-gray-700/40 text-white"
              LinkComponent={Link}
              href={item?.url}
              target="_blank noreferrer noopener"
              aria-label={`To ${item.url}`}
            >
              <lord-icon
                src="https://cdn.lordicon.com/udwhdpod.json"
                trigger="loop"
                delay="3000"
                stroke="100"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: 24, height: 24 }}
              />
            </IconButton>
          )}
        </Paper>
      </DialogTitle>

      <DialogContent className="md:px-16">
        <DialogContentText id="project-dialog-description">{item?.content}</DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectDialog
