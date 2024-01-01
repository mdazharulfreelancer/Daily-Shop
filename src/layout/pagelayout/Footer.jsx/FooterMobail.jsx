import { Box, Container, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
const FooterMobail = () => {
  return (
    <>
        <Container px={0}>
            <Flex px={8} w={"full"} bg={"white"} h={'3.5rem'} borderTop={'1px solid'} borderColor={'gray.300'}>
                <Flex alignItems={'center'} w={'full'} justifyContent={'space-between'}>

                    <VStack as={Link} to={'/'}  gap={1}>
                        <Box className='iconsfooter' color={'gray.600'}  >
                            <IoHomeOutline />
                        </Box>
                        <Box>
                            <Text color={'gray.600'} fontSize={'xs'}>Home</Text>
                        </Box>
                    </VStack>

                    <VStack as={Link} to={'/all-category'} gap={1}>
                        <Box className='iconsfooter' color={'gray.600'}  >
                            <PiDotsNineBold />
                        </Box>
                        <Box>
                            <Text color={'gray.600'} fontSize={'xs'}>Categories</Text>
                        </Box>
                    </VStack>

                    <VStack gap={1}>
                        <Box className='iconsfooter' color={'gray.600'}  >
                            <FaShoppingCart />
                        </Box>
                        <Box>
                            <Text color={'gray.600'} fontSize={'xs'}>Cart</Text>
                        </Box>
                    </VStack>

                    <VStack  gap={1}>
                        <Box className='iconsfooter' color={'gray.600'}  >
                            <RiAccountPinCircleLine />
                        </Box>
                        <Box>
                            <Text color={'gray.600'} fontSize={'xs'}>Account</Text>
                        </Box>
                    </VStack>
                    
                </Flex>
            </Flex>
        </Container>
    </>
  )
}

export default FooterMobail
