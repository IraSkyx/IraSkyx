import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import useRouter from 'components/hooks/useRouter'

const About: React.FC = () => {
  const { router } = useRouter()

  return (
    <div className={router.asPath === '/' ? 'xyz-in' : 'xyz-out'} xyz="fade left ease-in-out">
      {router.asPath === '/' && (
        <>
          <Typography gutterBottom variant="h5" color="text.secondary" align="center">
            Site Reliability Engineer @CGI. <br />
            Modern Jamstack web &amp; mobile developer.
          </Typography>

          <Divider className="m-4" />

          <div className="my-8"></div>
        </>
      )}
    </div>
  )
}

export default About
