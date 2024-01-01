import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const FrashSaleCard = () => {
  return (
        <>
             <Flex bg={'white'}  className='cardshop'>
                        <VStack  as={Link} to={'/ditals-product/asdsad'}    _hover={{shadow :'2xl'}}   pb={3} overflow={'hidden'} borderRadius={2} w={'190px'} alignItems={'start'}>
                            <Box  w={'full'}>
                                <Image w={'full'} src={'https://static-01.daraz.com.bd/p/cc1dd8321a28294df34dc9f875879b0b.jpg'} />
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

export default FrashSaleCard
