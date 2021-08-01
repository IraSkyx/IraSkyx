import Image from 'next/image'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'

import Link from 'components/utils/Link'
import Menu from 'components/common/Menu'
import About from 'components/landing/About'
import avatar from 'public/static/avatar.png'
import Footer from 'components/common/Footer'
import Skills from 'components/landing/Skills'
import Projects from 'components/landing/Projects'
import Employment from 'components/landing/Employment'

const Index: React.FC = () => {
  return (
    <>
      <Container className="flex flex-grow justify-center items-center" maxWidth="md">
        <Card className="shadow-2xl p-3 min-w-full overflow-visible mb-4">
          <CardContent className="flex flex-col items-center space-y-3 p-6">
            <Link href="/" passHref>
              <Image src={avatar} width={150} height={150} alt="My avatar" placeholder="blur" />
            </Link>

            <Typography variant="h4" align="center" gutterBottom>
              Adrien ‟Skyx” Lenoir
            </Typography>

            <About />
            <Projects />
            <Employment />
            <Skills />

            <Menu />
          </CardContent>
        </Card>
      </Container>

      <Footer />
    </>
  )
}

export default Index
