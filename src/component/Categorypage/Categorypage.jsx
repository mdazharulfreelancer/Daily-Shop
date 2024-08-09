import { Box, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import CategoriProductCard from './CategoriproductCard'
import CategoriProductCardLeft from './CategoriProductCardLeft'
import CategoriProductCardRight from './CategoriProductCardRight'

const Categorypage = () => {

  return (
    <>
      <Box px={{base:0, md:5}} >
          <VStack alignItems={'start'}>
             <Flex>HEader</Flex>
             {
              window.innerWidth > 764 &&(
   
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
              )
          }
          {
            window.innerWidth < 430 && (
              <Flex w={'full'} gap={'4px'}p={0} m={0}>
              <Flex  h={'100%'}  py={1} w={'49.6%'}  gap={2} flexWrap={'wrap'}>
             
                <CategoriProductCardLeft />
                <CategoriProductCardLeft />
                <CategoriProductCardLeft />
                <CategoriProductCardLeft />
                <CategoriProductCardLeft />
                <CategoriProductCardLeft />
                <CategoriProductCardLeft />
                <CategoriProductCardLeft />
                <CategoriProductCardLeft />
      
              </Flex>
              <Flex   h={'100%'} w={'49.6%'}   py={1}  gap={2} flexWrap={'wrap'}>
       
              <CategoriProductCardRight />
              <CategoriProductCardRight />
              <CategoriProductCardRight />
              <CategoriProductCardRight />
              <CategoriProductCardRight />
              <CategoriProductCardRight />
              <CategoriProductCardRight />
              <CategoriProductCardRight />
              <CategoriProductCardRight />
              <CategoriProductCardRight />
       

              
           
              </Flex>
             
          </Flex>
            )
          }
          </VStack>
      </Box>
    </>
  )
}

export default Categorypage
