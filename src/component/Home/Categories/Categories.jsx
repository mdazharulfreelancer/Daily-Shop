import { Container, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <>
           <Container  maxW={"container.xl"} >
            <Flex w={"full"} justifyContent={'space-between'} alignItems={'center'} mb={4}>
                <Text fontSize={{base:'', md:22}} fontWeight={500} color={'gray.600'}>Categories</Text>

                <Text as={Link} to={'/all-category'} fontSize={'sm'} fontWeight={600} color={'blue.600'}  >
                  More
                </Text>
            </Flex>
            <Flex w={"full"} className='categoriesScroll'  scrollBehavior={'smooth'} overflowX={'scroll'}>
                <Grid  templateColumns='repeat(10, 1fr)'>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />

            </Grid>
            </Flex>
        </Container>
    </>
  )
}

export default Categories
