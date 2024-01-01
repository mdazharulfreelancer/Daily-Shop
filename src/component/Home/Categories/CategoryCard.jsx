import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const CategoryCard = () => {
  return (
   <>
                  <Flex borderRight={'0.5px solid'} borderColor={'gray.200'}  _hover={{color:'red', boxShadow:'2xl'}} as={Link} to={'/categori/t-shrt'} alignItems={'center'} >
                    <VStack alignItems={'center'} justifyContent={'center'} py={2} px={2} bg={"#ffffff"} w={{base:'110px',md:'123px'}}>
                        <Box  w={{base:"60px",md:"75px"}}>
                            <Image w={'full'} h={'full'} src={"https://static-01.daraz.com.bd/p/2701222b6cafe73b8c99dff13654f2cb.jpg"} />
                        </Box>
                        <Text display={'flex'} justifyContent={'center'} flexDirection={'wrap'} fontSize={{base:14, md:16}} alignItems={'center'} w={'full'} overflow={"hidden"} >Wholesale </Text>
                    </VStack>
                </Flex>
   </>
  )
}

export default CategoryCard
