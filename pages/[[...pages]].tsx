import Image from 'next/image'
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import avatar from 'public/static/avatar.png'
import Content from 'components/landing/Content'
import useRouter from 'components/hooks/useRouter'
import Mobile from 'components/landing/menu/Mobile'
import Desktop from 'components/landing/menu/Desktop'
import useMediaQuery from 'components/hooks/useMediaQuery'

const Index: React.FC = () => {
  const { push } = useRouter()
  const isMobile = useMediaQuery('md')

  return (
    <Container className="flex flex-grow justify-center items-center" maxWidth="md">
      <Card className="shadow-2xl p-3 min-w-full">
        <IconButton onClick={push('/')}>
          <lord-icon
            src="https://cdn.lordicon.com/gmzxduhd.json"
            trigger="loop"
            delay="3000"
            colors="primary:#121331,secondary:#9062F7"
            style={{ width: 32, height: 32 }}
          />
        </IconButton>

        <CardContent className="flex flex-col items-center space-y-3">
          <Image
            className="rounded-full"
            src={avatar}
            width={150}
            height={150}
            alt="My avatar"
            placeholder="blur"
          />

          <Content />
        </CardContent>
        <CardActions className="p-6">{isMobile ? <Mobile /> : <Desktop />}</CardActions>
      </Card>
    </Container>
  )
}

export default Index
