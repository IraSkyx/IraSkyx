import Link from 'next/link'
import { useState } from 'react'
import { Global } from '@emotion/react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

import { items } from './config'

const drawerBleeding = 56

const Mobile: React.FC = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen)

  return (
    <>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />

      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div
          className="bg-flatBlack flex justify-center items-center absolute visible inset-x-1/2 -translate-x-1/2 rounded-tl-full rounded-tr-full -top-14 h-14 w-28"
          onClick={toggleDrawer(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </div>

        <div className="bg-flatBlack p-2 h-full overflow-auto">
          <List>
            {Object.keys(items).map((key: string) => (
              <Link key={key} href={`/${key.toLowerCase()}`} passHref>
                <ListItem onClick={toggleDrawer(false)} button>
                  <ListItemIcon className="text-white">{items[key]}</ListItemIcon>
                  <ListItemText primary={key} primaryTypographyProps={{ color: 'secondary' }} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  )
}

export default Mobile
