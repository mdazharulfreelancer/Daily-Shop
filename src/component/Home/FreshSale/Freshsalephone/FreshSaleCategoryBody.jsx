import { Container, VStack } from '@chakra-ui/react'
import React from 'react'
import FreshSaleCategorycard from './FreshSaleCategorycard'

const FreshSaleCategoryBody = () => {
  return (
    <Container  maxW={'container.xl'} p={0}>
        <VStack alignItems={'start'}>
            {
                <>
                <FreshSaleCategorycard />
                <FreshSaleCategorycard />
                <FreshSaleCategorycard />
                <FreshSaleCategorycard />
                <FreshSaleCategorycard />
                <FreshSaleCategorycard />
                <FreshSaleCategorycard />
                <FreshSaleCategorycard />
                <FreshSaleCategorycard />
                <FreshSaleCategorycard />
                
                </>

             

            }

        </VStack>
    </Container>
  )
}

export default FreshSaleCategoryBody
