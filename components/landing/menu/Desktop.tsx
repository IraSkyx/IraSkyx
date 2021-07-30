import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'

import { items } from './config'

const Desktop: React.FC = () => {
  return (
    <AppBar className="rounded-xl bg-flatBlack" position="relative" variant="outlined" elevation={0}>
      <Toolbar className="grid grid-cols-5 gap-4 justify-center">
        {Object.keys(items).map((key: string) => (
          <Link key={key} href={`/${key.toLowerCase()}`} passHref>
            <ButtonBase className="w-full h-full rounded-full" aria-label={`Go to ${key}`}>
              <div className="flex flex-col justify-center items-center">
                {items[key]}
                <Typography variant="body1">{key}</Typography>
              </div>
            </ButtonBase>
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export default Desktop
