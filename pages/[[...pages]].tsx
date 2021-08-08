import Image from 'next/image'
import Card from '@material-ui/core/Card'
import NoSsr from '@material-ui/core/NoSsr'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'

import { useTheme } from 'styles/theme'
import Link from 'components/utils/Link'
import Menu from 'components/common/Menu'
import About from 'components/landing/About'
import Footer from 'components/common/Footer'
import Skills from 'components/landing/Skills'
import avatar from 'public/static/images/avatar.png'
import Employment from 'components/landing/Employment'
import Projects from 'components/landing/projects/Projects'

const Index: React.FC = () => {
  const theme = useTheme()

  return (
    <>
      <Container className="flex flex-col flex-grow justify-center items-center" maxWidth="md">
        <Card className="shadow-2xl p-3 min-w-full overflow-visible mt-16 mb-36 md:mb-4">
          <CardContent className="flex flex-col items-center space-y-3 p-6">
            <Link href="/" passHref>
              <Image src={avatar} width={150} height={150} alt="My avatar" placeholder="blur" />
            </Link>

            <div>
              <Typography variant="h4" align="center">
                Hi, I&apos;m Adrien Lenoir
              </Typography>

              <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
                {globalThis.description}
              </Typography>
            </div>

            <About />
            <Projects />
            <Employment />
            <Skills />

            <Menu />
          </CardContent>
        </Card>
      </Container>

      <NoSsr>
        <div className="flex flex-grow w-full self-end relative min-h-64">
          <svg
            className="h-16 w-full z-10 absolute inset-x-0 bottom-16 md:bottom-0"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28 "
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax1">
              <use xlinkHref="#gentle-wave" x="50" y="3" fill="#FD8224" />
            </g>
            <g className="parallax2">
              <use xlinkHref="#gentle-wave" x="50" y="0" fill="#9062F7" />
            </g>
            <g className="parallax3">
              <use xlinkHref="#gentle-wave" x="50" y="9" fill="#22B1EF" />
            </g>
            <g className="parallax4">
              <use
                xlinkHref="#gentle-wave"
                x="50"
                y="6"
                fill={theme.palette.mode === 'light' ? '#fff' : '#121212'}
              />
            </g>
          </svg>
        </div>
      </NoSsr>

      <Footer />
    </>
  )
}

export default Index
