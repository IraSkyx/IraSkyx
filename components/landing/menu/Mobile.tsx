import Paper from '@material-ui/core/Paper'
import { useState, SyntheticEvent } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import useRouter from 'components/hooks/useRouter'
import useMenuConfig, { Item } from 'components/hooks/useMenuConfig'

const Mobile: React.FC = () => {
  const { push } = useRouter()
  const items = useMenuConfig()
  const [value, setValue] = useState(0)

  const onChange = (event: SyntheticEvent, newValue: number) => setValue(newValue)

  return (
    <Paper className="fixed inset-x-0 bottom-0" elevation={3}>
      <BottomNavigation showLabels value={value} onChange={onChange}>
        {items.map((item: Item) => (
          <BottomNavigationAction key={item.path} label={item.name} icon={item.icon} onClick={push(item.path)} />
        ))}
      </BottomNavigation>
    </Paper>
  )
}

export default Mobile
