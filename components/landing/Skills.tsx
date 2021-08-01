import { useRouter } from 'next/router'
import Typography from '@material-ui/core/Typography'

const Skills: React.FC = () => {
  const router = useRouter()

  return (
    <div className={router.asPath === '/skills' ? 'xyz-in' : 'xyz-out'} xyz="fade left ease-in-out">
      {router.asPath === '/skills' && (
        <Typography gutterBottom variant="body1" color="text.secondary">
          WIP
        </Typography>
      )}
    </div>
  )
}

export default Skills
