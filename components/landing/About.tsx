import { useRouter } from 'next/router'
import Typography from '@material-ui/core/Typography'

const About: React.FC = () => {
  const router = useRouter()

  return (
    <div className={router.asPath === '/' ? 'xyz-in' : 'xyz-out'} xyz="fade left ease-in-out">
      {router.asPath === '/' && (
        <Typography gutterBottom variant="h6" color="text.secondary" align="center">
          Site Reliability Engineer @CGI. Modern Jamstack web &amp; mobile developer.
        </Typography>
      )}
    </div>
  )
}

export default About
