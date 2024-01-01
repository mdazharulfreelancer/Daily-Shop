import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import JustForYouCard from './JustForYouCard'

const JustForYou = () => {
  return (
     <>
         <Container minH={'100vh'}   maxW={'container.xl'}>
            <Box py={3}>
                <Text fontSize={'xl'} fontWeight={'bold'}>Just For You</Text>
            </Box>
                <Flex w={'full'}  py={1}  gap={0.5} flexWrap={'wrap'}>
                    <JustForYouCard />
                    <JustForYouCard />
                    <JustForYouCard />
                    <JustForYouCard />
                    <JustForYouCard />
                    <JustForYouCard />
                    <JustForYouCard />
                    <JustForYouCard />
                    <JustForYouCard />
                    <JustForYouCard />
                    <JustForYouCard />
                    <JustForYouCard />
       
                </Flex>
            </Container>
     </>
  )
}

export default JustForYou
