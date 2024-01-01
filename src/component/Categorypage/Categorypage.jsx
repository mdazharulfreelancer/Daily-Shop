import { Box, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import CategoriProductCard from './CategoriproductCard'

const Categorypage = () => {
  return (
    <>
      <Box px={{base:0, md:5}} >
          <VStack alignItems={'start'}>
             <Flex>HEader</Flex>

             <Box>
             <Flex w={'full'}  py={1}  gap={0.5} flexWrap={'wrap'}>
                    <CategoriProductCard />
                    <CategoriProductCard />
                    <CategoriProductCard />
                    <CategoriProductCard />
                    <CategoriProductCard />
                    <CategoriProductCard />
                    <CategoriProductCard />
                    <CategoriProductCard />
                    <CategoriProductCard />
                    <CategoriProductCard />
                    <CategoriProductCard />
                    <CategoriProductCard />
                    <CategoriProductCard />
                    <CategoriProductCard />
                    <CategoriProductCard />
                    <CategoriProductCard />
                    <CategoriProductCard />
                    <CategoriProductCard />
     
       
                </Flex>
             </Box>
          </VStack>
      </Box>
    </>
  )
}

export default Categorypage
