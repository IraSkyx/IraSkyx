import { useState } from 'react'
import Divider from '@material-ui/core/Divider'
import ImageList from '@material-ui/core/ImageList'

import bdeIsimaIcon from 'public/static/images/bde-isima.png'
import undercoverIcon from 'public/static/images/undercover.png'
import bdeIsima from 'public/static/images/bde-isima-preview.png'
import undercover from 'public/static/images/undercover-preview.png'
import artistocratieIcon from 'public/static/images/artistocratie.png'
import artistocratie from 'public/static/images/artistocratie-preview.png'

import ProjectItem from './ProjectItem'
import ProjectDialog from './ProjectDialog'
import useRouter from 'components/hooks/useRouter'

const Projects: React.FC = () => {
  const { router } = useRouter()
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Project>()

  const onOpen = (item: Project) => () => {
    setOpen(true)
    setSelected(item)
  }

  const onClose = () => setOpen(false)

  return (
    <div xyz="fade front-3 flip-down-50% duration-10 stagger-5">
      {router.asPath === '/projects' && (
        <>
          <Divider className="m-4" />

          <ImageList
            className="grid grid-cols-1 md:grid-cols-2 my-8 p-4"
            sx={{ transform: 'translateZ(0)' }}
            gap={16}
          >
            {itemData.map((item) => (
              <ProjectItem key={item.title} item={item} onClick={onOpen(item)} />
            ))}
          </ImageList>

          <ProjectDialog open={open} item={selected} onClose={onClose} />
        </>
      )}
    </div>
  )
}

export type Project = {
  img: StaticImageData
  icon: StaticImageData
  title: string
  url: string
  content: string
  date: Date
}

const itemData: Project[] = [
  {
    img: undercover,
    icon: undercoverIcon,
    title: 'Undercover',
    url: 'https://undercovergame.app',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac suscipit ipsum. Suspendisse vel sollicitudin justo. Phasellus vel sem ullamcorper, gravida sapien quis, molestie massa. Suspendisse ultrices porttitor nulla, lobortis sodales eros. Vestibulum laoreet mauris non ligula lacinia imperdiet. Nam malesuada suscipit elit ut tincidunt. Suspendisse feugiat scelerisque odio, nec placerat risus viverra id. Quisque efficitur egestas commodo. In vitae tortor elit. Vestibulum sed tellus vestibulum, sagittis felis in, porta urna. Ut sed felis tellus.
    Nunc id placerat erat. Suspendisse nisl eros, tristique id luctus ac, luctus eget nulla. Duis nec cursus nisl. Sed sit amet ante semper est feugiat porta. Sed consequat risus id est hendrerit, sed tincidunt lacus viverra. Ut non leo gravida, maximus lacus nec, cursus dolor. Sed viverra, lorem quis auctor volutpat, elit nulla pretium mi, ac auctor augue nulla at justo. Proin blandit massa velit, et suscipit magna rutrum vel. Nullam at semper purus. Donec et neque turpis. Mauris tempus finibus augue vitae imperdiet. Sed vitae turpis et tortor sollicitudin sagittis ac sed nulla. Quisque iaculis sit amet arcu at lobortis.
    Nullam vel eros eu urna commodo accumsan id vitae justo. Praesent ipsum erat, vulputate vel dictum sed, hendrerit at ligula. Donec sagittis ullamcorper auctor. Nulla nec laoreet odio. In dolor nunc, interdum sed tortor sit amet, consectetur volutpat risus. Maecenas accumsan elit consequat, elementum lacus ac, interdum mi. Maecenas faucibus, sapien a bibendum efficitur, erat dui pulvinar felis, eu ultricies lectus tortor vel nibh. Cras posuere pretium ante, et condimentum massa laoreet eget. Fusce auctor condimentum porta. Phasellus sed efficitur orci, sed euismod sapien. Vivamus hendrerit risus in laoreet consequat. Aliquam vel risus faucibus, mollis est vel, rhoncus nisl. Nulla facilisi. Curabitur consectetur erat ac quam blandit, eu vestibulum purus egestas. Vestibulum aliquam rhoncus luctus. Phasellus semper sollicitudin consectetur.
    Etiam luctus ante in quam venenatis, vel mattis ligula aliquam. Curabitur non bibendum quam. Integer pulvinar justo vel erat semper, et tristique tellus interdum. Curabitur aliquet pulvinar tortor, ac dictum dui rhoncus in. Nunc malesuada aliquam velit, eu tincidunt erat viverra malesuada. Etiam venenatis, nulla ac sagittis sodales, lorem mauris tristique purus, viverra maximus ipsum risus sit amet tellus. Ut rhoncus in magna pellentesque vulputate. Nunc elit dui, fermentum ut nulla eget, commodo consequat libero. Curabitur varius sem ut augue porta, in lobortis tortor vehicula. Cras eget nibh ligula. Aenean ac rutrum massa. Nulla facilisi. Pellentesque vitae mollis arcu. Nulla nec mollis turpis, nec iaculis mi. Nam ut interdum justo. Donec tempor libero in lorem pulvinar volutpat.
    Praesent imperdiet arcu tincidunt, vehicula lorem eu, laoreet odio. Ut a vulputate elit. Vestibulum volutpat, leo volutpat tincidunt laoreet, lacus eros dapibus erat, eu efficitur leo ex sed lacus. Donec a sollicitudin erat, non eleifend lacus. Praesent vestibulum orci at velit facilisis elementum. Ut aliquet convallis arcu vitae tincidunt. Donec ornare tincidunt metus sit amet condimentum. Fusce at diam erat. Vestibulum vel lorem eget lacus tincidunt varius nec a felis. Nulla a lacinia enim. Integer vulputate quis nunc eget pretium.`,
    date: new Date(),
  },
  {
    img: bdeIsima,
    icon: bdeIsimaIcon,
    title: 'BDE ISIMA',
    url: 'https://bde.isima.fr',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac suscipit ipsum. Suspendisse vel sollicitudin justo. Phasellus vel sem ullamcorper, gravida sapien quis, molestie massa. Suspendisse ultrices porttitor nulla, lobortis sodales eros. Vestibulum laoreet mauris non ligula lacinia imperdiet. Nam malesuada suscipit elit ut tincidunt. Suspendisse feugiat scelerisque odio, nec placerat risus viverra id. Quisque efficitur egestas commodo. In vitae tortor elit. Vestibulum sed tellus vestibulum, sagittis felis in, porta urna. Ut sed felis tellus.
    Nunc id placerat erat. Suspendisse nisl eros, tristique id luctus ac, luctus eget nulla. Duis nec cursus nisl. Sed sit amet ante semper est feugiat porta. Sed consequat risus id est hendrerit, sed tincidunt lacus viverra. Ut non leo gravida, maximus lacus nec, cursus dolor. Sed viverra, lorem quis auctor volutpat, elit nulla pretium mi, ac auctor augue nulla at justo. Proin blandit massa velit, et suscipit magna rutrum vel. Nullam at semper purus. Donec et neque turpis. Mauris tempus finibus augue vitae imperdiet. Sed vitae turpis et tortor sollicitudin sagittis ac sed nulla. Quisque iaculis sit amet arcu at lobortis.
    Nullam vel eros eu urna commodo accumsan id vitae justo. Praesent ipsum erat, vulputate vel dictum sed, hendrerit at ligula. Donec sagittis ullamcorper auctor. Nulla nec laoreet odio. In dolor nunc, interdum sed tortor sit amet, consectetur volutpat risus. Maecenas accumsan elit consequat, elementum lacus ac, interdum mi. Maecenas faucibus, sapien a bibendum efficitur, erat dui pulvinar felis, eu ultricies lectus tortor vel nibh. Cras posuere pretium ante, et condimentum massa laoreet eget. Fusce auctor condimentum porta. Phasellus sed efficitur orci, sed euismod sapien. Vivamus hendrerit risus in laoreet consequat. Aliquam vel risus faucibus, mollis est vel, rhoncus nisl. Nulla facilisi. Curabitur consectetur erat ac quam blandit, eu vestibulum purus egestas. Vestibulum aliquam rhoncus luctus. Phasellus semper sollicitudin consectetur.
    Etiam luctus ante in quam venenatis, vel mattis ligula aliquam. Curabitur non bibendum quam. Integer pulvinar justo vel erat semper, et tristique tellus interdum. Curabitur aliquet pulvinar tortor, ac dictum dui rhoncus in. Nunc malesuada aliquam velit, eu tincidunt erat viverra malesuada. Etiam venenatis, nulla ac sagittis sodales, lorem mauris tristique purus, viverra maximus ipsum risus sit amet tellus. Ut rhoncus in magna pellentesque vulputate. Nunc elit dui, fermentum ut nulla eget, commodo consequat libero. Curabitur varius sem ut augue porta, in lobortis tortor vehicula. Cras eget nibh ligula. Aenean ac rutrum massa. Nulla facilisi. Pellentesque vitae mollis arcu. Nulla nec mollis turpis, nec iaculis mi. Nam ut interdum justo. Donec tempor libero in lorem pulvinar volutpat.
    Praesent imperdiet arcu tincidunt, vehicula lorem eu, laoreet odio. Ut a vulputate elit. Vestibulum volutpat, leo volutpat tincidunt laoreet, lacus eros dapibus erat, eu efficitur leo ex sed lacus. Donec a sollicitudin erat, non eleifend lacus. Praesent vestibulum orci at velit facilisis elementum. Ut aliquet convallis arcu vitae tincidunt. Donec ornare tincidunt metus sit amet condimentum. Fusce at diam erat. Vestibulum vel lorem eget lacus tincidunt varius nec a felis. Nulla a lacinia enim. Integer vulputate quis nunc eget pretium.`,
    date: new Date(),
  },
  {
    img: artistocratie,
    icon: artistocratieIcon,
    title: "L'Artistocratie",
    url: 'https://artistocratie.fr',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac suscipit ipsum. Suspendisse vel sollicitudin justo. Phasellus vel sem ullamcorper, gravida sapien quis, molestie massa. Suspendisse ultrices porttitor nulla, lobortis sodales eros. Vestibulum laoreet mauris non ligula lacinia imperdiet. Nam malesuada suscipit elit ut tincidunt. Suspendisse feugiat scelerisque odio, nec placerat risus viverra id. Quisque efficitur egestas commodo. In vitae tortor elit. Vestibulum sed tellus vestibulum, sagittis felis in, porta urna. Ut sed felis tellus.
    Nunc id placerat erat. Suspendisse nisl eros, tristique id luctus ac, luctus eget nulla. Duis nec cursus nisl. Sed sit amet ante semper est feugiat porta. Sed consequat risus id est hendrerit, sed tincidunt lacus viverra. Ut non leo gravida, maximus lacus nec, cursus dolor. Sed viverra, lorem quis auctor volutpat, elit nulla pretium mi, ac auctor augue nulla at justo. Proin blandit massa velit, et suscipit magna rutrum vel. Nullam at semper purus. Donec et neque turpis. Mauris tempus finibus augue vitae imperdiet. Sed vitae turpis et tortor sollicitudin sagittis ac sed nulla. Quisque iaculis sit amet arcu at lobortis.
    Nullam vel eros eu urna commodo accumsan id vitae justo. Praesent ipsum erat, vulputate vel dictum sed, hendrerit at ligula. Donec sagittis ullamcorper auctor. Nulla nec laoreet odio. In dolor nunc, interdum sed tortor sit amet, consectetur volutpat risus. Maecenas accumsan elit consequat, elementum lacus ac, interdum mi. Maecenas faucibus, sapien a bibendum efficitur, erat dui pulvinar felis, eu ultricies lectus tortor vel nibh. Cras posuere pretium ante, et condimentum massa laoreet eget. Fusce auctor condimentum porta. Phasellus sed efficitur orci, sed euismod sapien. Vivamus hendrerit risus in laoreet consequat. Aliquam vel risus faucibus, mollis est vel, rhoncus nisl. Nulla facilisi. Curabitur consectetur erat ac quam blandit, eu vestibulum purus egestas. Vestibulum aliquam rhoncus luctus. Phasellus semper sollicitudin consectetur.
    Etiam luctus ante in quam venenatis, vel mattis ligula aliquam. Curabitur non bibendum quam. Integer pulvinar justo vel erat semper, et tristique tellus interdum. Curabitur aliquet pulvinar tortor, ac dictum dui rhoncus in. Nunc malesuada aliquam velit, eu tincidunt erat viverra malesuada. Etiam venenatis, nulla ac sagittis sodales, lorem mauris tristique purus, viverra maximus ipsum risus sit amet tellus. Ut rhoncus in magna pellentesque vulputate. Nunc elit dui, fermentum ut nulla eget, commodo consequat libero. Curabitur varius sem ut augue porta, in lobortis tortor vehicula. Cras eget nibh ligula. Aenean ac rutrum massa. Nulla facilisi. Pellentesque vitae mollis arcu. Nulla nec mollis turpis, nec iaculis mi. Nam ut interdum justo. Donec tempor libero in lorem pulvinar volutpat.
    Praesent imperdiet arcu tincidunt, vehicula lorem eu, laoreet odio. Ut a vulputate elit. Vestibulum volutpat, leo volutpat tincidunt laoreet, lacus eros dapibus erat, eu efficitur leo ex sed lacus. Donec a sollicitudin erat, non eleifend lacus. Praesent vestibulum orci at velit facilisis elementum. Ut aliquet convallis arcu vitae tincidunt. Donec ornare tincidunt metus sit amet condimentum. Fusce at diam erat. Vestibulum vel lorem eget lacus tincidunt varius nec a felis. Nulla a lacinia enim. Integer vulputate quis nunc eget pretium.`,
    date: new Date(),
  },
]

export default Projects
