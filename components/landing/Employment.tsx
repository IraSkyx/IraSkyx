import Image from 'next/image'
import { useRouter } from 'next/router'
import Divider from '@material-ui/core/Divider'
import Timeline from '@material-ui/lab/Timeline'
import Accordion from '@material-ui/core/Accordion'
import Typography from '@material-ui/core/Typography'
import TimelineItem from '@material-ui/lab/TimelineItem'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TimelineContent from '@material-ui/lab/TimelineContent'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'

import cgi from 'public/static/cgi.webp'
import rgu from 'public/static/rgu.webp'
import leclerc from 'public/static/leclerc.webp'
import uberEats from 'public/static/uberEats.webp'
import deliveroo from 'public/static/deliveroo.webp'
import hoppenCare from 'public/static/hoppenCare.webp'

const Employment: React.FC = () => {
  const router = useRouter()

  return (
    <div className={router.asPath === '/employment' ? 'w-full' : ''}>
      {router.asPath === '/employment' && (
        <>
          <Typography variant="h3" gutterBottom>
            Employment
          </Typography>

          <Divider className="mb-6" />

          <Timeline className="stagger-group" position="alternate">
            <TLItem
              date="Sept. 2020 - Aug. 2021"
              img={cgi}
              imgAlt="CGI Logo"
              title="Site Reliability Engineer"
              location="Clermont-Ferrand, Auvergne-Rhône-Alpes, France"
              summary="As a Site Reliability Engineer, I am performing a comprehensive and comparative study of state-of-the-art application monitoring tools for tracing in distributed environment including Open Telemetry, Jaeger/Zipkin, Linkerd/Istio."
            />

            <TLItem
              date="Jun. 2020 - Nov. 2020"
              img={hoppenCare}
              imgAlt="Hoppen Care Logo"
              title="Administrator"
              location="Clermont-Ferrand, Auvergne-Rhône-Alpes, France"
              summary="I was in charge of welcoming patients from the hospital of Clermont Estaing who wished to buy TV and telephone subscriptions and handle the maintenance of the equipment in the rooms. I also had to manage accounting at the end the day."
            />

            <TLItem
              date="Feb. 2018 - Jun. 2020"
              img={uberEats}
              imgAlt="Uber Eats Logo"
              title="Independant Biker"
              location="Clermont-Ferrand, Auvergne-Rhône-Alpes, France"
              summary="Worked as self-employed for Uber Eats. It was a part-time job to make extra money to pay for my studies."
            />

            <TLItem
              date="Nov. 2017 - Jun. 2020"
              img={deliveroo}
              imgAlt="Deliveroo Logo"
              title="Independant Biker"
              location="Clermont-Ferrand, Auvergne-Rhône-Alpes, France"
              summary="Worked as self-employed for Uber Eats. It was a part-time job to make extra money to pay for my studies."
            />

            <TLItem
              date="Apr. 2018 - Jun. 2018"
              img={rgu}
              imgAlt="Robert Gordon University Logo"
              title="Deep Learning internship"
              location="Aberdeen, Scotland, United Kingdom"
              summary="I performed a relevant state-of-the-art review of Deep Learning algorithms using the DGX-1 Nvidia supercomputer. I implemented classical and novel exploratory algorithms, produced re-usable code and evaluated the code extensively with proper unit tests. This work involved some original research results."
            />

            <TLItem
              date="Jul. 2017 - Aug. 2017"
              img={leclerc}
              imgAlt="Leclerc Logo"
              title="Morning shelving"
              location="Clermont-Ferrand, Auvergne-Rhône-Alpes, France"
              summary=""
            />

            <TLItem
              date="Jul. 2016 - Aug. 2016"
              img={leclerc}
              imgAlt="Leclerc Logo"
              title="Morning shelving"
              location="Clermont-Ferrand, Auvergne-Rhône-Alpes, France"
              summary=""
            />
          </Timeline>
        </>
      )}
    </div>
  )
}

interface TLItemProps {
  date: string
  img: StaticImageData
  imgAlt: string
  title: string
  location: string
  summary: string
}

const TLItem: React.FC<TLItemProps> = ({ date, img, imgAlt, title, location, summary }) => {
  return (
    <TimelineItem className="xyz-in">
      <TimelineOppositeContent
        className="my-auto mx-0"
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {date}
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineConnector />
        <div className="w-12 h-12 border border-flatBlack/20 rounded-lg">
          <Image
            className="rounded-lg"
            src={img}
            width={48}
            height={48}
            alt={imgAlt}
            placeholder="blur"
            quality={100}
          />
        </div>
        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent className="px-4 py-4">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="flex flex-col">
              <Typography className="font-bold" variant="subtitle1">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {location}
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="caption">{summary}</Typography>
          </AccordionDetails>
        </Accordion>
      </TimelineContent>
    </TimelineItem>
  )
}

export default Employment
