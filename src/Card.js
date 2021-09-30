import { Box, Image, Flex, Avatar, Text, Spacer, IconButton } from '@chakra-ui/react';
import { ChatIcon, AddIcon, EmailIcon } from '@chakra-ui/icons';
import { Content } from './models';


export function Card ({ children }) {
    return (
      <Box maxW='lg' borderWidth='1px' borderRadius='md' overflow='hidden' m={5}>
        {children}
      </Box>
    )
  }

  Card.Header = function ({description,postTime}){
      return (
          <Box p={2}>
              {description}
              <br />
              {postTime}
          </Box>
      )
  }
  Card.Main = function ({ content }) {
      let  cardContent = <Image src={content.source}/>
    
    return (
      <Box>{cardContent}</Box>
    )
  }