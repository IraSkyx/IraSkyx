import NoSsr from '@mui/material/NoSsr'
import Paper from '@mui/material/Paper'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import ButtonBase from '@mui/material/ButtonBase'
import Typography from '@mui/material/Typography'
import { useState, SyntheticEvent, useEffect } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

import type { Item } from 'adlenoir'
import Link from 'components/utils/link.client'
import useRouter from 'components/hooks/useRouter'
import useMediaQuery from 'components/hooks/useMediaQuery'
import useMenuConfig from 'components/hooks/useMenuConfig'

const Menu: React.FC = () => {
  const { router, push } = useRouter()
  const items = useMenuConfig()
  const isMobile = useMediaQuery('md')
  const [value, setValue] = useState(-1)

  const onChange = (event: SyntheticEvent, newValue: number) => setValue(newValue)

  useEffect(() => {
    setValue(items.findIndex((x) => x.path === router.asPath))
  }, [router.isReady, router.asPath, items])

  return (
    <NoSsr>
      {isMobile ? (
        <Paper className="fixed inset-x-0 bottom-0 z-50" elevation={3}>
          <BottomNavigation showLabels value={value} onChange={onChange}>
            {items.map((item: Item) => (
              <BottomNavigationAction
                key={item.path}
                label={item.name}
                icon={item.icon}
                onClick={push(item.path)}
              />
            ))}
          </BottomNavigation>
        </Paper>
      ) : (
        <AppBar
          className="rounded-xl bg-white/90 dark:bg-flatBlack/90 sticky bottom-6"
          variant="outlined"
          elevation={0}
        >
          <Toolbar className="grid grid-cols-4 gap-4 justify-center">
            {items.map((item: Item) => (
              <Link key={item.path} href={item.path} passHref>
                <ButtonBase
                  className="w-full h-full rounded-full"
                  aria-label={`Go to ${item.name}`}
                >
                  <div className="flex flex-col justify-center items-center">
                    {item.icon}
                    <Typography variant="body1" color="textPrimary">
                      {item.name}
                    </Typography>
                  </div>
                </ButtonBase>
              </Link>
            ))}
          </Toolbar>
        </AppBar>
      )}
    </NoSsr>
  )
}

export default Menu
