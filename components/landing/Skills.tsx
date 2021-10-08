import Divider from '@mui/material/Divider'

import useRouter from 'components/hooks/useRouter'

const Skills: React.FC = () => {
  const { router } = useRouter()

  return (
    <div className={router.asPath === '/skills' ? 'xyz-in' : 'xyz-out'} xyz="fade left ease-in-out">
      {router.asPath === '/skills' && (
        <>
          <Divider className="m-4" />

          <div className="my-8"></div>
        </>
      )}
    </div>
  )
}

export default Skills
