import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import useRouter from 'components/hooks/useRouter'

const About: React.FC = () => {
  const { router } = useRouter()

  return (
    <div className={router.asPath === '/' ? 'xyz-in' : 'xyz-out'} xyz="fade left ease-in-out">
      {router.asPath === '/' && (
        <>
          <Divider className="m-4" />

          <Typography gutterBottom variant="body1" color="text.secondary">
            Site Reliability Engineer @CGI. <br />
            Modern Jamstack web &amp; mobile developer.
          </Typography>

          <div className="my-8"></div>
        </>
      )}
    </div>
  )
}

export default About
