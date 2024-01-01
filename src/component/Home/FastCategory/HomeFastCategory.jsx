import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import CategoryCard from './CategoryCard'

const HomeFastCategory = () => {
  return (
    <>
        <Container   maxW={"container.xl"} >
            <Flex className='categoriesScroll' w={"full"} scrollBehavior={'smooth'} overflowX={'scroll'}>

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

            </Flex>
        </Container>
    </>
  )
}

export default HomeFastCategory
