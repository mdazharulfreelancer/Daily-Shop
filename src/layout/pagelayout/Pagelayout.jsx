/* eslint-disable no-unused-vars */
import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import FooterMobail from './Footer.jsx/FooterMobail'
import Header from './Header/Header'

const Pagelayout = ({children}) => {
  return (
    <>
        <VStack alignItems={"start"}>
          <Header />

          <Box w={"full"}>
           {children}
           </Box>

           {
            window.innerWidth < 525 && (
              <>
              <Box pos={'fixed'} bottom={0} left={0} w={"full"}>
                <FooterMobail />
              </Box>
              </>
            )
           }
        </VStack>
    </>
  )
}

export default Pagelayout
