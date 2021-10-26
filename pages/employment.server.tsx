import Image from 'next/image'
import Divider from '@mui/material/Divider'
import Timeline from '@mui/lab/Timeline'
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import TimelineItem from '@mui/lab/TimelineItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TimelineContent from '@mui/lab/TimelineContent'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'

import cgi from 'public/static/images/cgi.webp'
import rgu from 'public/static/images/rgu.webp'
import kmtx from 'public/static/images/kmtx.png'
import useMediaQuery from 'components/hooks/useMediaQuery'

const Employment: React.FC = () => {
  const isMobile = useMediaQuery('md')

  return (
    <div xyz="fade down-100% back-5 stagger-3">
      <Divider className="m-4" />

      <Timeline className="my-8 p-0" position={isMobile ? 'right' : 'alternate'}>
        <TLItem
          date="Sept. 2021 - Now"
          img={kmtx}
          imgAlt="KMTX Logo"
          title="Junior Software Engineer"
          location="Remote - Paris, Île-de-France, France"
          summary="Building the ad platform of the Open Web https://vibe.co"
        />

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
