import Link from 'next/link'
import Image from 'next/image'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'

import { useTheme } from 'styles/theme'
import About from 'components/landing/About'
import avatar from 'public/static/avatar.png'
import Footer from 'components/common/Footer'
import Skills from 'components/landing/Skills'
import useRouter from 'components/hooks/useRouter'
import Projects from 'components/landing/Projects'
import Mobile from 'components/landing/menu/Mobile'
import Desktop from 'components/landing/menu/Desktop'
import Employment from 'components/landing/Employment'
import useMediaQuery from 'components/hooks/useMediaQuery'

const Index: React.FC = () => {
  const { push } = useRouter()
  const isMobile = useMediaQuery('md')
  const theme = useTheme()
  const color = theme.palette.mode === 'dark' ? '#ffffff' : '#121212'

  const props = {
    trigger: 'loop',
    delay: '3000',
    colors: `primary:${color},secondary:${color}`,
    style: { width: 32, height: 32 },
  }

  return (
    <>
      <Container className="flex flex-grow justify-center items-center" maxWidth="md">
        <Card className="shadow-2xl p-3 min-w-full overflow-visible mb-4">
          <IconButton onClick={push('/')} aria-label="Go home">
            <lord-icon
              src="https://cdn.lordicon.com/gmzxduhd.json"
              {...props}
            />
          </IconButton>

          <CardContent className="flex flex-col items-center space-y-3 p-6">
            <Link href="/" passHref>
              <a>
                <Image src={avatar} width={150} height={150} alt="My avatar" placeholder="blur" />
              </a>
            </Link>

            <Typography gutterBottom variant="h5" component="div" align="center">
              Adrien ‟Skyx” Lenoir
            </Typography>

            <About />
            <Projects />
            <Employment />
            <Skills />

            {isMobile ? <Mobile /> : <Desktop />}
          </CardContent>
        </Card>
      </Container>

      <Footer isMobile={isMobile} />
    </>
  )
}

export default Index
