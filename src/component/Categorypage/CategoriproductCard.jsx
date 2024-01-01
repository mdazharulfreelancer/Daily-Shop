import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CategoriProductCard = () => {
  return (
        <>
             <Flex _hover={{shadow:{base:'xl', md:'2xl'}}} bg={'white'} w={{base:'49%', sm:'32.5%',md:'24.5%', lg:'24.5%'}}   className='cardshop'>
                        <VStack     as={Link} to={'/ditals-product/asdsad'}   pb={3} overflow={'hidden'} borderRadius={2} alignItems={'start'}>
                            <Box w={'full'}>
                                <Image w={'full'} src={'https://static-01.daraz.com.bd/p/ec5aa928416537680c5cf92af53a34c3.jpg_300x0q75.webp'} />
                            </Box>

                            <VStack alignItems={'start'} w={'full'} px={3}>
                            <Box>
                                <Text fontSize={'sm'} fontWeight={'sm'}>Pure and Natural Dried Fried Peanut </Text>
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

                                {/* button */}
                                <Flex w={'full'}>
                                    <Button w={'full'} h={'2rem'} borderRadius={0} colorScheme={'#00c4cc'} bg={'#00c4cc'}>Add to cart</Button>
                                </Flex>
                            </VStack>
                        </VStack>
                    </Flex>
        </>
  )
}

export default CategoriProductCard
