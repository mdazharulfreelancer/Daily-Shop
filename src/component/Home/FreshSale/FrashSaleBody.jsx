import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import FashsaleMobailLeft from './FashsaleMobailLeft'
import FrashSaleCard from './FrashSaleCard'

const FrashSaleBody = () => {
  return (
   <>
    {
        window.innerWidth > 764 ? (
        
        <>
            <Container   maxW={'container.xl'}>
                <Flex className='frashcardScroollbar' py={1}  gap={0.5} scrollBehavior={'smooth'} overflowX={'scroll'}>
                    <FrashSaleCard />
                    <FrashSaleCard />
                    <FrashSaleCard />
                    <FrashSaleCard />
                    <FrashSaleCard />
                    <FrashSaleCard />
                    <FrashSaleCard />
                    <FrashSaleCard />
                    <FrashSaleCard />

                </Flex>
            </Container>
        </>) : (
        
        <>
            <Container py={4}  maxW={'container.xl'}>
                <Flex bg={'white'} px={1} py={4}>
                    <Flex flex={1} px={2}>
                        <VStack as={Link} to={'/fresh-sale/'} alignItems={'start'} spacing={1}>
                            <Box w={'full'}>
                                <Image src={'https://static-01.daraz.com.bd/p/aeb32271f5dce3d189a35c8e5b3a7454.jpg_200x200q80-product.jpg_.webp'} />
                            </Box>

                            <VStack px={1} alignItems={'start'} spacing={1}>
                            <Box  >
                                <Text fontSize={'sm'} fontWeight={600}  >Trending</Text>
                            </Box>

                            <Box>
                             <Text fontSize={16} color={'orange.500'}>
                                    ৳ 175
                                    </Text>
                             </Box>

                            
                             <Flex w={'full'} gap={2}>
                                    <Text fontSize={'sm'} color={'gray.500'} textDecoration={'line-through'}> ৳ 200</Text>

                                    <Text fontSize={'sm'} color={'gray.700'} > -40%</Text>
                                    
                                </Flex>

                            </VStack>
                        </VStack>
                    </Flex>
                 <Flex flex={1}>
                    <VStack spacing={5} alignItems={'start'}>
                    <FashsaleMobailLeft />
                    <FashsaleMobailLeft /> 
                     <FashsaleMobailLeft />
                    </VStack>
               
               </Flex>
            
                </Flex>
            </Container>
        </>)
    }
   </>
  )
}

export default FrashSaleBody
