import { Box, Button, Container, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const FrashSalehader = () => {
  return (
   <>
       {
        window.innerWidth > 768 ?(<>
            <Container maxW={'container.xl'}>
                <VStack borderBottom={'1px solid'} pb={2} borderColor={'gray.300'} alignItems={'start'}>
                    <Box>
                        <Text color={'gray.600'} fontSize={'2xl'} fontWeight={'bold'}>Fresh Sale</Text>
                    </Box>
                    <Flex bg={'#ffffff'} py={2} alignItems={'center'} w={'full'}>
                        <Flex flex={1}>
                            <Text fontSize={'md'} px={3} color={'red.500'}>on sale now</Text>
                        </Flex>
                        <Flex flex={3}>
                            <Flex alignItems={'center'} gap={2}>
                                <Text fontSize={'sm'} px={3} color={'red.500'}>Ending End</Text>

                                <Flex gap={2}>
                                    <Box px={4} py={1} bg={'red.400'}>2</Box>
                                    <Box px={4} py={1} bg={'red.400'}>2</Box>
                                    <Box px={4} py={1} bg={'red.400'}>2</Box>
                                    
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex flex={1}>
                            <Button as={Link} to={'/fresh-sale-all-shop/'} border={'1px solid '} borderColor={'blue.500'} fontWeight={400} color={'blue.500'}>Shop More</Button>
                        </Flex>
                    </Flex>
            </VStack>
            </Container>
        </>) : (<>
        
            <VStack w={'full'} alignItems={'start'}>
                  <Flex px={3} alignItems={'center'} w={'full'} justifyContent={'space-between'}>
                    <Box>
                        <Text fontSize={'xl'} fontWeight={600}>Fresh Sale</Text>
                    </Box>
     
                        <Flex >
                            <Box as={Link} to={'/fresh-sale/'} fontWeight={400} color={'blue.500'} >Shop More</Box>
                        </Flex>
                    </Flex>

                    <Flex justifyItems={'center'} justifyContent={'center'} py={2} w={'full'} bg={'blue.500'}>
                    <Flex w={'full'} justifyContent={'center'} flex={3}>
                            <Flex alignItems={'center'} gap={2}>
                                <Text fontSize={'sm'} px={3} color={'white'}>Ending End</Text>

                                <Flex gap={2}>
                                    <Box px={4} py={1} bg={'whiteAlpha.800'} borderRadius={2}>2</Box>
                                    <Box px={4} py={1} bg={'whiteAlpha.800'} borderRadius={2}>2</Box>
                                    <Box px={4} py={1} bg={'whiteAlpha.800'} borderRadius={2}>2</Box>
                    
                                    
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                   
            </VStack>
        </>)
       }
   </>
  )
}

export default FrashSalehader
