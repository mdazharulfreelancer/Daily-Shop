import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const CategoryCard = ({item}) => {
  return (
   <>
                  <Flex borderRight={'0.5px solid'} borderColor={'gray.200'}  _hover={{color:'red', boxShadow:'2xl'}} as={Link} to={'/categori/t-shrt'} alignItems={'center'} >
                    <VStack alignItems={'center'} justifyContent={'center'} py={2} px={2} bg={"#ffffff"} w={{base:'110px',md:'123px'}}>
                        <Box  w={{base:"90%",md:"90%"}} h={'90px'}>
                            <Image w={'full'} h={'full'} src={`${item?.image}`} alt='categori' />
                        </Box>
                        <Text display={'flex'} justifyContent={'center'} flexDirection={'wrap'} fontSize={{base:14, md:16}} alignItems={'center'} w={'full'} overflow={"hidden"} >{item?.name} </Text>
                    </VStack>
                </Flex>
   </>
  )
}

export default CategoryCard
