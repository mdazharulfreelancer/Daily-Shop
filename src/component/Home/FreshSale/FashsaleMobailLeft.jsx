import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const FashsaleMobailLeft = () => {
  return (
    <>
     
                        <VStack alignItems={'start'} spacing={1}>
                            <Flex w={'full'} px={2}>
                                <Box w={'50px'}>
                                <Image src={'https://static-01.daraz.com.bd/p/d129bb4ca3b66dda90ba849bc5524b64.jpg_200x200q80-product.jpg_.webp'} />
                                </Box>

                                <Flex>
                                    <VStack px={1} alignItems={'start'} spacing={1}>
                                    <Box>
                             <Text fontSize={16} color={'orange.500'}>
                                    ৳ 175
                                    </Text>
                             </Box>

                            
                             <Flex w={'full'} gap={1}>
                                    <Text fontSize={12} color={'gray.500'} textDecoration={'line-through'}> ৳200 </Text>

                                    <Text fontSize={12} color={'gray.700'} > -40%</Text>
                                    
                                </Flex>
                                
                                    </VStack>
                                </Flex>
                            </Flex>
                        </VStack>
               
    </>
  )
}

export default FashsaleMobailLeft
