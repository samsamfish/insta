import { ChakraProvider } from '@chakra-ui/react';
import { Card } from './Card';
import { Timeline } from './Timeline';


export default function App () {
  return (
    <ChakraProvider>
      <Timeline >
        {({ post }) => (
          <Card key={post.id}>
            <Card.Header description={post.description} postTime={post.postTime}/>
            <Card.Main content={post.content}/>
          </Card>
        )}
      </Timeline>
      <div />
    </ChakraProvider>
  )
}
