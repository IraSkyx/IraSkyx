import { Item } from 'adlenoir'
import { useTheme } from 'styles/theme'

const useMenuConfig = () => {
  const theme = useTheme()
  const color = theme.palette.mode === 'dark' ? '#ffffff' : '#121212'

  const props = {
    trigger: 'loop',
    delay: '3000',
    colors: `primary:${color},secondary:${color}`,
    style: { width: 48, height: 48 },
  }

  return [
    {
      name: 'About',
      path: '/',
      icon: <lord-icon src="https://cdn.lordicon.com/rqqkvjqf.json" {...props} />,
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: <lord-icon src="https://cdn.lordicon.com/fhtaantg.json" {...props} />,
    },
    {
      name: 'Employment',
      path: '/employment',
      icon: <lord-icon src="https://cdn.lordicon.com/oswatybr.json" {...props} />,
    },
    {
      name: 'Skills',
      path: '/skills',
      icon: <lord-icon src="https://cdn.lordicon.com/dtgezzsi.json" {...props} />,
    },
  ] as Item[]
}

export default useMenuConfig
