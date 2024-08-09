import { Container, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from './CategoryCard'



const Categories = () => {
  const category = [
    {
      name : 'Phone',
      image : 'https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-13-Midnight-frontimage'
    },
    {
      name : 'Man Cloth',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__vzmRSkzntC4dzhMrYa1_epRDVvVjyN7eQ&s'
    },
    {
      name : 'Phone',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3ySw37ZQa5RkZM9hA0gK-46xcfyM-GDA2g&s'
    },
    {
      name : 'Falme Cloth',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToOY7wpvkimnYnNJ4oMmP6HGBiNItTeKQ_g&s'
    }
    ,
    {
      name : 'Cloth',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwlQxnLZY7nIRMA009xy8cLjZHA9aRuXjPw&s'
    }
    ,
    {
      name : 'Router',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1nJXoR4J9q1VfQtR1ei0Ar3i-SAXl0hq8g&s'
    }
    ,
    {
      name : 'Computer',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGltL7mh2s7iC4IuPP6v7Da6hgBRhYxdS3Q&s'
    }
    ,
    {
      name : 'Cable',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9N73w4Tj7lPkzEMckovuM9bibsMc1BrQxw&s'
    }
    ,
    {
      name : 'Vagetable',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ZUJLWEUWA8p2HhaMfXYfB4uU4M9_L3uKmA&s'
    }
    ,
    {
      name : 'Potatos',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEbpicNfSCYpy0b6zkgo11J2tW9S2vNkWSg&s'
    }
    ,
    {
      name : 'Sandle',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMJHymsCgFVgUwv7yzogfLIHRRBLPUV8_Hg&s'
    }
    ,
    {
      name : 'Cable',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9N73w4Tj7lPkzEMckovuM9bibsMc1BrQxw&s'
    }
    ,
    {
      name : 'Cable',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9N73w4Tj7lPkzEMckovuM9bibsMc1BrQxw&s'
    }
    ,
    {
      name : 'Buttary Fan',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQuy496ziC_0B8THA3SCJrQGhMYldyVsZug&s'
    }
    ,
    {
      name : 'Rice',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92cz0F2G965i6gqFbj26nJblA7Gd4rBtmcg&s'
    }
    ,
    {
      name : 'Cable',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9N73w4Tj7lPkzEMckovuM9bibsMc1BrQxw&s'
    }
    ,
    {
      name : 'Mini Fan',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGt3OeuKoAurTIvcDZKkRxLQ10Irsbe1dPzg&s'
    }
    ,
    {
      name : 'Kitcen',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAu8cnyHFPPrXek8jYoNxzzxR5SdZmAb3AA&s'
    }

    ,
    {
      name : 'Fan',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ_BVePiLnIikrnj8-snB0SwVHgnkxBWYbgA&s'
    }
    ,
    {
      name : 'Wall Plated',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7h32d3dTamQdqIUj93WJB1GYZXVpZb7hmXA&s'
    }
  ]
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
                  {
                    category && category.map((el, index)=>{
                     return (
                      <CategoryCard item = {el} key={index} />
                     )
                    })
                  }
           
         

            </Grid>
            </Flex>
        </Container>
    </>
  )
}

export default Categories
