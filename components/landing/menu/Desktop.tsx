import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'

import Link from 'components/utils/Link'
import useMenuConfig, { Item } from 'components/hooks/useMenuConfig'

const Desktop: React.FC = () => {
  const items = useMenuConfig()

  return (
    <AppBar className="rounded-xl bg-white/90 dark:bg-flatBlack/90 sticky bottom-6" variant="outlined" elevation={0}>
      <Toolbar className="grid grid-cols-4 gap-4 justify-center">
        {items.map((item: Item) => (
          <Link key={item.path} href={item.path} passHref>
            <ButtonBase className="w-full h-full rounded-full" aria-label={`Go to ${item.name}`}>
              <div className="flex flex-col justify-center items-center">
                {item.icon}
                <Typography variant="body1" color="textPrimary">{item.name}</Typography>
              </div>
            </ButtonBase>
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export default Desktop
