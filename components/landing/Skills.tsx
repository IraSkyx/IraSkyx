import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import useRouter from 'components/hooks/useRouter'

const Skills: React.FC = () => {
  const { router } = useRouter()

  return (
    <div className={router.asPath === '/skills' ? 'xyz-in' : 'xyz-out'} xyz="fade left ease-in-out">
      {router.asPath === '/skills' && (
        <>
          <Typography variant="h5" gutterBottom>
            Skills
          </Typography>

          <Divider className="m-4" />

          <div className="my-8"></div>
        </>
      )}
    </div>
  )
}

export default Skills
