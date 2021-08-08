import Image from 'next/image'
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

import cgi from 'public/static/images/cgi.webp'
import rgu from 'public/static/images/rgu.webp'
import useRouter from 'components/hooks/useRouter'
import useMediaQuery from 'components/hooks/useMediaQuery'

const Employment: React.FC = () => {
  const { router } = useRouter()
  const isMobile = useMediaQuery('md')

  return (
    <div>
      {router.asPath === '/employment' && (
        <>
          <Divider className="m-4" />

          <Timeline className="stagger-group my-8 p-0" position={isMobile ? 'right' : 'alternate'}>
            <TLItem
              date="Sept. 2020 - Aug. 2021"
              img={cgi}
              imgAlt="CGI Logo"
              title="Site Reliability Engineer"
              location="Clermont-Ferrand, Auvergne-Rhône-Alpes, France"
              summary="As a Site Reliability Engineer, I conducted a comprehensive and comparative study of state-of-the-art application monitoring tools for tracing in distributed environment including Open Telemetry, Jaeger vs Zipkin, Linkerd vs Istio."
            />

            <TLItem
              date="Apr. 2018 - Jun. 2018"
              img={rgu}
              imgAlt="Robert Gordon University Logo"
              title="Deep Learning internship"
              location="Aberdeen, Scotland, United Kingdom"
              summary="I performed a relevant state-of-the-art review of Deep Learning algorithms using the DGX-1 Nvidia supercomputer. I implemented classical and novel exploratory algorithms, produced re-usable code and evaluated the code extensively with proper unit tests. This work involved some original research results."
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
  const isMobile = useMediaQuery('md')

  const TLItemContent = (
    <TimelineContent>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="flex flex-col">
            <Typography className="font-bold" variant="body2" paragraph>
              {title}
            </Typography>
            <Typography variant="caption" color="textSecondary" paragraph>
              {location}
            </Typography>
            {isMobile && (
              <Typography variant="caption" color="textPrimary">
                {date}
              </Typography>
            )}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="caption">{summary}</Typography>
        </AccordionDetails>
      </Accordion>
    </TimelineContent>
  )

  return (
    <TimelineItem className="xyz-in">
      {!isMobile && (
        <TimelineOppositeContent
          className="my-auto mx-0"
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {date}
        </TimelineOppositeContent>
      )}

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

      {TLItemContent}
    </TimelineItem>
  )
}

export default Employment
