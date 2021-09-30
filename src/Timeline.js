// Timeline.js
import { useState, useEffect } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import { Container } from '@chakra-ui/layout'
import { TimelineItem } from './models'

export function Timeline ({children}) {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    const getTimeline = async () => {
      const timelineData = await DataStore.query(TimelineItem)
      setTimeline(timelineData)
    }

    getTimeline()
  }, [])

  return (
        <Container>
          {timeline.map(post => children({post}))}
        </Container>
      )
}