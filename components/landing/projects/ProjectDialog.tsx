import { forwardRef } from 'react'
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import Paper from '@mui/material/Paper'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import { TransitionProps } from '@mui/material/transitions'
import DialogContentText from '@mui/material/DialogContentText'

import CloseIcon from '@mui/icons-material/Close'

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
        size="large">
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
              size="large">
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
  );
}

export default ProjectDialog
