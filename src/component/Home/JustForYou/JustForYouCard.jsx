import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const JustForYouCard = () => {
  return (
        <>
             <Flex _hover={{shadow:{base:'xl', md:'2xl'}}} bg={'white'} w={{base:'49.5%', sm:'32.5%',md:'24.5%', lg:'16.5%'}}   className='cardshop'>
                        <VStack     as={Link} to={'/ditals-product/asdsad'}   pb={3} overflow={'hidden'} borderRadius={2} alignItems={'start'}>
                            <Box w={'full'}>
                                <Image w={'full'} src={'https://static-01.daraz.com.bd/p/747f598bd39e700f8896883eb23a9c1b.jpg_200x200q80-product.jpg_.webp'} />
                            </Box>

                            <VStack alignItems={'start'} w={'full'} px={3}>
                            <Box>
                                <Text fontSize={'sm'} fontWeight={'sm'}>Pure and Natural Dried Fried Peanut with Sea </Text>
                            </Box>

                                <VStack alignItems={'start'} spacing={0} gap={0}>
                                    <Box>
                                    <Text fontSize={18} color={'orange.500'}>
                                    ৳ 175
                                    </Text>
                                </Box>

                                <Flex w={'full'} gap={2}>
                                    <Text fontSize={'sm'} color={'gray.500'} textDecoration={'line-through'}> ৳ 200</Text>

                                    <Text fontSize={'sm'} color={'gray.700'} > -40%</Text>
                                    
                                </Flex>
                                </VStack>
                            </VStack>
                        </VStack>
                    </Flex>
        </>
  )
}

export default JustForYouCard
