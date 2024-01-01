import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderMobail from "./HeaderMobail";

const Header = () => {
    const {pathname} = useLocation()
    const header = useRef(null)

    useEffect(() => { 


            {
                window.innerWidth > 768 && (
                    window.addEventListener("scroll", function () {
                        if (window.scrollY >= 100) {
                          header.current.classList.add("activePcHeader");
                         
                        } else {
                          header.current.classList.remove("activePcHeader");
                      

                        
                        }
                      })
               
                )
            }

    }, [])

  return (
    <Box w={"full"}>
        {
            window.innerWidth > 768 ? (
                <Box ref={header} w={"full"} minH={"8vh"} bg={"#00c4cc"}>
                <Container maxW={"container.xl"} >
                    <Flex w={"full"} justifyContent={"center"} alignItems={"center"}>
                        <Flex flex={1}>
                            <Flex gap={1} justify={"center"} alignItems={"center"}>
                                <Box w={12}   className="logo">
                                    <Image  src={"/Orange Minimalist E Wallet Logo.png"}></Image>
                                </Box>
                                <Text as={Link} to={'/'} fontSize={20} fontWeight={600} className="logo"> Bazer</Text>
                            </Flex>
                        </Flex>
                        <Flex flex={3}>Header</Flex>
                        <Flex flex={1}>Header</Flex>
                    </Flex>
                </Container>
            </Box>
             ) : (
                <>
                {
                    
                        <HeaderMobail />
                 
                    
                }
            
                </>
             )
        }
    </Box>
  )
}

export default Header
