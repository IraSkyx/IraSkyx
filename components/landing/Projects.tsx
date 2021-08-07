import Image from 'next/image'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import ImageList from '@material-ui/core/ImageList'
import Typography from '@material-ui/core/Typography'
import ImageListItem from '@material-ui/core/ImageListItem'

import bdeIsima from 'public/static/images/bde-isima.png'
import undercover from 'public/static/images/undercover.png'
import artistocratie from 'public/static/images/artistocratie.png'

import useRouter from 'components/hooks/useRouter'

const Projects: React.FC = () => {
  const { router } = useRouter()

  return (
    <div
      className={router.asPath === '/projects' ? 'xyz-in' : 'xyz-out'}
      xyz="fade flip-up flip-left"
    >
      {router.asPath === '/projects' && (
        <>
          <Typography variant="h5" gutterBottom>
            Projects
          </Typography>

          <Divider className="m-4" />

          <ImageList className="my-8" sx={{ transform: 'translateZ(0)' }} gap={0}>
            {itemData.map((item) => {
              const cols = item.featured ? 2 : 1
              const rows = item.featured ? 2 : 1

              return (
                <ImageListItem
                  key={item.title}
                  className="relative group flex justify-center items-center drop-shadow-lg border-2 border-primary"
                  cols={cols}
                  rows={rows}
                >
                  <Paper
                    className="invisible group-hover:visible absolute bottom-6 right-6 z-50 p-2"
                    variant="outlined"
                  >
                    <Typography>{item.title}</Typography>
                  </Paper>
                  <a href={item.url} target="_blank noreferrer noopener">
                    <div className="group-hover:blur-sm">
                      <Image
                        className="group-hover:scale-110"
                        src={item.img}
                        alt={item.title}
                        placeholder="blur"
                      />
                    </div>
                  </a>
                </ImageListItem>
              )
            })}
          </ImageList>
        </>
      )}
    </div>
  )
}

const itemData = [
  {
    img: undercover,
    title: 'Undercover',
    url: 'https://undercovergame.app',
    featured: true,
  },
  {
    img: bdeIsima,
    title: 'BDE ISIMA',
    url: 'https://bde.isima.fr',
  },
  {
    img: artistocratie,
    title: "L'Artistocratie",
    url: 'https://artistocratie.fr',
  },
]

export default Projects
