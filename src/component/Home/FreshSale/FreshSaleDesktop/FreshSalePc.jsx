import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import FreshSaleCardPc from './freashSaleCard'

const FreshSalePc = () => {
  return (
    <>
    <Box mt={'-8px'}>
    <Flex>
        <Box w={'full'}>
        <Image src={'https://raw.githubusercontent.com/mdazharul869/all-img/main/Fr%20(1).png'} alt="Fresh Sale Header" />
        </Box>
            </Flex>
    </Box>
       <VStack w={'full'} alignItems={'start'}>
           <Container w={'full'} maxW={'container.xl'}>
           <Flex className='headerflash'>
                Header
            </Flex>
           </Container>

            <Flex w={'full'} className='bodyflash'>
                <Container w={'full'} maxW={'container.xl'}>
                    <VStack alignItems={'start'}>
                        <Flex className='tittle'>
                            <Box>
                                <Text fontSize={'2xl'} fontWeight={'bold'}>Fresh Sale</Text>
                            </Box>
                        </Flex>

                        <Flex w={'full'} className='bodyflash'>
                        <Flex w={'full'}  py={1}  gap={0.5} flexWrap={'wrap'}>
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
                                <FreshSaleCardPc />
    
                
                            </Flex>
                        </Flex>

                    </VStack>
                </Container>
            </Flex>
       </VStack>
    </>
  )
}

export default FreshSalePc
