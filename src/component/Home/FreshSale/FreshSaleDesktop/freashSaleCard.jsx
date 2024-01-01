import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const FreshSaleCardPc = () => {
  return (
        <>
             <Flex _hover={{shadow:{base:'xl', md:'2xl'}}} bg={'white'} w={{base:'49.5%', sm:'32.5%',md:'24.5%', lg:'16.5%'}}   className='cardshop'>
                        <VStack  as={Link} to={'/ditals-product/asdsad'}   pb={3} overflow={'hidden'} borderRadius={2} alignItems={'start'}>
                            <Box w={'full'}>
                                <Image w={'full'} src={'https://static-01.daraz.com.bd/p/d56ba97af6e4f5a7e71ce71bd9049694.jpg_300x0q75.webp'} />
                            </Box>

                            <VStack alignItems={'start'} w={'full'} px={3}>
                            <Box>
                                <Text fontSize={13} fontWeight={'sm'}>Pure and Natural Dried Fried Peanut with Sea </Text>
                            </Box>

                                <VStack alignItems={'start'} spacing={0} gap={0}>
                                    <Box>
                                    <Text fontSize={18} color={'orange.500'}>
                                    ৳ 175
                                    </Text>
                                </Box>

                                <Flex w={'full'} gap={2}>
                                    <Text fontSize={11} color={'gray.500'} textDecoration={'line-through'}> ৳ 200</Text>

                                    <Text bg={'blue.600'} px={2}  fontSize={11} color={'white'} borderRadius={5} > -40%</Text>
                                    
                                </Flex>

                                <Flex pt={1} w={'full'}>
                                    <VStack w={'full'} alignItems={'start'} spacing={0} gap={0}>
                                        <Box pos={'relative'} borderRadius={10} w={'120px'} h={2} bg={'gray.300'}>
                                            <Box pos={'absolute'} top={0} left={0} borderRadius={10} w={'60px'} h={2} bg={'blue.600'}></Box>
                                        </Box>

                                        <Box>
                                            <Text fontSize={9} fontWeight={500}>49 sold out</Text>
                                        </Box>
                                    </VStack>
                                </Flex>
                                </VStack>
                            </VStack>
                        </VStack>
                    </Flex>
        </>
  )
}

export default FreshSaleCardPc
