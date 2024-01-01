import { StarIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const FreshSaleCategorycard = () => {
  return (
    <>
                    <Flex gap={2} bg={'white'} py={1}>
                <Box w={32}>
                    <Image src={'https://static-01.daraz.com.bd/p/a1bc218ac71ce5acd0d3ced85a3a743d.jpg_300x0q75.webp '} />
                </Box>

                <Flex>
                    <VStack alignItems={'start'}>
                        <Box>
                            <Text fontSize={14}>Merino 05 Pair Premium Quality Ankle socks for </Text>
                        </Box>
                        <VStack gap={0} alignItems={'start'}>
                            
                        <Flex gap={2}>
                        <Box>
                            <Text color={'orange.600'}>৳ 250</Text>
                        </Box>  
                        <Box>
                            <Text  color={'gray.500'} textDecoration={'line-through'}>৳ 250</Text>
                        </Box>  
                        </Flex>  

                            <Flex gap={1}>

                            <Flex py={0} bg={'yellow.500'} px={3} borderRadius={10} alignItems={'center'} gap={1}>
                            <Box w={2}>
                                <StarIcon color={'white'} w={2} h={2} />
                            </Box>
                            <Box>
                                <Text fontWeight={500}  fontSize={10} color={'white'}>4/5</Text>
                            </Box>
                        </Flex>  

                        <Flex>


                        <Flex py={0} bg={'yellow.500'} px={3} borderRadius={10} w={'100px'} alignItems={'center'} gap={1}>
                      
    
                            <Box>
                                <Text fontWeight={500}  fontSize={10} color={'white'}>19 sold</Text>
                            </Box>
                        </Flex>  


                        </Flex>
                            </Flex>
                        </VStack>    
                    </VStack>
                </Flex>
            </Flex>
    </>
  )
}

export default FreshSaleCategorycard
