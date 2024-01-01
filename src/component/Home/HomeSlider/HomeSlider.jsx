import { Box, Container, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { GoDot } from "react-icons/go";
import { Link } from 'react-router-dom';
import SimpleSlider from './Slider';

const HomeSlider = () => {
    const categories = [
        {
            name :"Women's & Girls' Fashion"
        },
        {
            name :"Women's & Girls' Fashion"
        }
        ,
        {
            name :"Women's & Girls' Fashion"
        },
        {
            name :"Women's & Girls' Fashion"
        },
        {
            name :"Women's & Girls' Fashion"
        },
        {
            name :"Women's & Girls' Fashion"
        }
        ,
        {
            name :"Women's & Girls' Fashion"
        }
        ,
        {
            name :"Women's & Girls' Fashion"
        }
        ,
        {
            name :"Women's & Girls' Fashion"
        }
        ,
        {
            name :"Women's & Girls' Fashion"
        }
     ]

    const slides = [
        { url: "https://icms-image.slatic.net/images/ims-web/2f2a89a2-159d-41a3-981c-b6c72738db00.jpg", title: "beach" },
        { url: "https://icms-image.slatic.net/images/ims-web/95ea403f-5b21-44dd-9eae-c2b5792c8b83.jpg", title: "boat" },
        { url: "https://icms-image.slatic.net/images/ims-web/95ea403f-5b21-44dd-9eae-c2b5792c8b83.jpg", title: "forest" },
        { url: "https://icms-image.slatic.net/images/ims-web/05da6bc6-a6e4-4e27-81ab-d3572a9b2433.jpg", title: "city" },
        { url: "https://icms-image.slatic.net/images/ims-web/54ab8c87-35df-421f-8d2f-c0089b6b350c.jpg_1200x1200.jpg", title: "italy" },
      ];

      const containerStyles = {
        width: "100%",
        height: "350px",
        margin: "0 auto",
        transition :'0.8s'
      };
        
  return (
    <>
        <Container pb={6} maxW={'container.xl'}>
            <Flex w={'full'}>

                <Flex flex={1}>
                    <VStack alignItems={'start'} bg={'white'} w={'95%'} p={3}>

                        {
                            categories && categories.map((category, index) => {
                                return (
                                    <>
                                                                                  <Box key={index} _hover={{color:'red'}}>
                            <Flex  as={Link} alignItems={'center'} >
                                <Box>
                                    <GoDot />
                                </Box>

                                <Text _hover={{color:'red'}} fontSize={14} fontWeight={500} color={'gray.600'}>{
                                    category.name
                                }</Text>
                                </Flex>
                            </Box>
                                    </>
                                )
                            })   
                        }

                    </VStack>
                </Flex>

                <Flex flex={4} >
                    <Box w={'full'}>
                    <div style={containerStyles}>
                        <SimpleSlider slides={slides} />
                    </div>

                
                    </Box>
                </Flex>

            </Flex>

       
        </Container>
    </>
  )
}

export default HomeSlider
