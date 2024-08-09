import { Box, Flex, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { SearchProductCard } from './SearchProductCard'
import { SearchProductLeft } from './SearchProductLeft'
import { SearchProductRight } from './SearchProductRight'
 const SearchPage = () => {

  //pcc---------------------------------
  useEffect(()=>{
    
  },[])
  return (
          <Box px={{base:0, md:5}} >
              <VStack alignItems={'start'}>
                 <Flex>HEader</Flex>
                 {
                  window.innerWidth > 764 &&(
       
                  <Box>
                   <Flex w={'full'}  py={1}  gap={0.5} flexWrap={'wrap'}>
                        <SearchProductCard />
                        <SearchProductCard />
                        <SearchProductCard />
                        <SearchProductCard />
                        <SearchProductCard />
                        <SearchProductCard />
                        <SearchProductCard />
                        <SearchProductCard />
                        <SearchProductCard />
                        <SearchProductCard />
                        <SearchProductCard />
                        <SearchProductCard />
                        <SearchProductCard />
                        <SearchProductCard />
                        <SearchProductCard />
                        <SearchProductCard />
                        <SearchProductCard />

         
           
                  </Flex>
                 </Box>
                  )
              }
              {
                window.innerWidth < 430 && (
                  <Flex w={'full'} gap={'4px'}p={0} m={0}>
                  <Flex  h={'100%'}  py={1} w={'49.6%'}  gap={2} flexWrap={'wrap'}>
                 
                    <SearchProductLeft />
                    <SearchProductLeft />
                    <SearchProductLeft />
                    <SearchProductLeft />
                    <SearchProductLeft />
                    <SearchProductLeft />
                    <SearchProductLeft />
                    <SearchProductLeft />
                    <SearchProductLeft />
                    <SearchProductLeft />
                    <SearchProductLeft />
                
          
                  </Flex>
                  <Flex   h={'100%'} w={'49.6%'}   py={1}  gap={2} flexWrap={'wrap'}>
                    <SearchProductRight />
                    <SearchProductRight />
                    <SearchProductRight />
                    <SearchProductRight />
                    <SearchProductRight />
                    <SearchProductRight />
                    <SearchProductRight />
                    <SearchProductRight />
                    <SearchProductRight />
           
    
                  
               
                  </Flex>
                 
              </Flex>
                )
              }
              </VStack>
          </Box>

      )
}
    
export default SearchPage

