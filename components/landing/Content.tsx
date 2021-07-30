import { useRouter } from 'next/router'
import Grow from '@material-ui/core/Grow'
import Typography from '@material-ui/core/Typography'

const Content: React.FC = () => {
    const router = useRouter()

    return (
      <>
        <Grow in={router.asPath === '/'} mountOnEnter unmountOnExit>
          <div>
            <Typography gutterBottom variant="h5" component="div" align="center">
              Adrien ‟Skyx” Lenoir
            </Typography>
            <Typography gutterBottom variant="h6" color="text.secondary">
              Site Reliability Engineer @CGI. Modern Jamstack web &amp; mobile developer.
            </Typography>
          </div>
        </Grow>

        <Grow in={router.asPath === '/about'} mountOnEnter unmountOnExit>
          <Typography gutterBottom variant="body1" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Typography>
        </Grow>
      </>
    )
}

export default Content
