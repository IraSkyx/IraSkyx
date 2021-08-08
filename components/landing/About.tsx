import { useState } from 'react'
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'

import Link from 'components/utils/Link'
import useRouter from 'components/hooks/useRouter'

const About: React.FC = () => {
  const { router } = useRouter()
  const [part, setPart] = useState(0)

  const onNextPart = () => setPart((part) => part + 1)

  return (
    <div
      className={router.asPath === '/' ? 'w-full min-h-64' : 'h-0'}
      xyz="stagger-10"
      style={{ visibility: router.asPath === '/' ? 'visible' : 'collapse' }}
    >
      <Divider className="m-4" />

      <div className="md:p-8 grid grid-cols-5 gap-y-2">
        <LeftMessage
          className="bg-appPink rounded-3xl rounded-bl-none py-2 px-4"
          content="Welcome to my portfolio 👋, hopefully you will like it! It should reflect my personality and show off some of my IT skills."
          xyz="fade left delay-10"
        />
        <LeftMessage
          className="bg-appPink rounded-3xl rounded-l-none py-2 px-4"
          content="I am a 23 years old junior software engineer based in Clermont Ferrand (🇫🇷) who specializes in web and mobile technologies. I love challenging myself and build performance-oriented tools."
          xyz="fade left delay-20"
        />
        <LeftMessage
          className="bg-appPink rounded-3xl rounded-tl-none py-2 px-4"
          content="Are you interested in learning more about my career path?"
          xyz="fade left delay-30"
        />

        {part >= 1 && (
          <>
            <RightMessage
              className="bg-appBlue rounded-3xl xyz-in"
              content="Yes, I would be glad to 👍!"
              color="secondary"
              xyz="fade right"
            />

            <LeftMessage
              className="bg-appPink rounded-3xl rounded-bl-none py-2 px-4"
              content="I started studying IT with a BSC in computer science 🖥️, it really got me into this field! I then graduated with a Bachelor's degree in mobile development 📱."
              xyz="fade left delay-10"
            />

            <LeftMessage
              className="bg-appPink rounded-3xl rounded-tl-none py-2 px-4"
              content={
                <>
                  Ever since I started digging really deep into (mostly) web stuff 🌐. Some of my
                  projects are available{' '}
                  <Link className="underline" href="/projects">
                    here
                  </Link>
                </>
              }
              xyz="fade left delay-20"
            />
          </>
        )}

        {part >= 2 && (
          <>
            <RightMessage
              className="bg-appBlue rounded-3xl xyz-in"
              content="Do you have any hobbies besides work?"
              color="secondary"
              xyz="fade right"
            />

            <LeftMessage
              className="bg-appPink rounded-3xl rounded-bl-none py-2 px-4"
              content="Actually, I do! I love reading news article 📰 and do tech intelligence, I used to sail catamaran ⛵ and go scuba diving 🤿. I have always loved the English culture so I dedicated myself to learning it. In June 2021, I scored 985/990 in the TOEIC exam."
              xyz="fade left delay-10"
            />
          </>
        )}

        <div className="m-2 col-start-2 col-span-5 xyz-in" xyz="fade right delay-30">
          <Divider />
        </div>

        {part == 0 && (
          <RightMessage
            className="rounded-3xl xyz-in"
            content="Yes, I would be glad to 👍!"
            onClick={onNextPart}
            xyz="fade right delay-30"
          />
        )}

        {part == 1 && (
          <RightMessage
            className="rounded-3xl xyz-in"
            content="Do you have any hobbies besides work?"
            onClick={onNextPart}
            xyz="fade right delay-30"
          />
        )}
      </div>
    </div>
  )
}

interface MessageProps {
  className: string
  content: React.ReactNode
  onClick?: () => void
  color?: string
  xyz?: string
}

const LeftMessage: React.FC<MessageProps> = ({ className, content, xyz }) => {
  return (
    <div className="flex items-end col-start-1 col-span-4 xyz-in" xyz={xyz}>
      <Avatar
        className="mr-2"
        src="/static/images/favicons/favicon-32x32.png"
        sx={{ width: 32, height: 32 }}
        alt="Adrien Lenoir"
      />

      <Card className={className}>
        <Typography variant="caption" color="secondary" component="div">
          {content}
        </Typography>
      </Card>
    </div>
  )
}

const RightMessage: React.FC<MessageProps> = ({
  className,
  content,
  onClick,
  color = 'textPrimary',
  xyz,
}) => {
  return (
    <div className="flex items-end justify-self-end col-start-4 col-span-2" xyz={xyz}>
      <Card className={className}>
        <CardActionArea
          className="py-2 px-4"
          onClick={onClick}
          disableRipple={!Boolean(onClick)}
          disabled={!Boolean(onClick)}
        >
          <Typography variant="caption" color={color} component="div">
            {content}
          </Typography>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default About
