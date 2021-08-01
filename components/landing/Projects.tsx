import Image from 'next/image'
import { useRouter } from 'next/router'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'

import bdeIsima from 'public/static/bde-isima.png'
import undercover from 'public/static/undercover.png'
import artistocratie from 'public/static/artistocratie.png'
import { Divider, Paper, Typography } from '@material-ui/core'

const Projects: React.FC = () => {
  const router = useRouter()

  return (
    <div
      className={router.asPath === '/projects' ? 'xyz-in' : 'xyz-out'}
      xyz="fade flip-up flip-left"
    >
      {router.asPath === '/projects' && (
        <>
          <Typography variant="h3" gutterBottom>
            Projects
          </Typography>

          <Divider className="mb-6" />

          <ImageList sx={{ transform: 'translateZ(0)' }} gap={0}>
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
