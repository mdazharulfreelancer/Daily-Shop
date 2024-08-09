import { Box, Container, Flex, Image, Link, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFreeDalivaryPhone } from '../../../../../../../actions/ProductAction'
import loadingimg from '../../../../../../../assets/output-onlinegiftools (1).gif'
import pageNumber from '../../../../../JustForYou/pageNumber'
import NewProductLeftCard from './NewProductCardPhoneLeft'

const NewProductAllPhone = () =>  {
  const dispatch = useDispatch()
  const {freeproducts, pagecountproduct ,resultpage , loading:loadingprodcut } = useSelector(state=>state.freedalivariPhone)

  const [lastFourRandomNumbers , setLastFourRandomNumbers] = useState([1,5])
  const [randomNumber, setRandomNumber] = useState(5);  

   const [data, setdata] = useState([])
  useEffect(()=>{
{  window.innerWidth < 425 && (
    dispatch(getFreeDalivaryPhone())
  )   
}
  },[dispatch ])

    //function
    const getUniqueRandomNumber = (numbers) => { 
      console.log(numbers)
      console.log(numbers)
      if(lastFourRandomNumbers.length === numbers.length ){
          return null
      }
      let newRandomNumber;
      do {
        newRandomNumber = Math.floor(Math.random() * numbers.length );
      } while (lastFourRandomNumbers.includes(newRandomNumber) || newRandomNumber === 0 || newRandomNumber === 1 && newRandomNumber === 5 ) ;
       setRandomNumber(newRandomNumber )   
   
       setLastFourRandomNumbers((prev) => {
        const newLastFour = [...prev, newRandomNumber];
        return newLastFour;
      })
  
  }

  useEffect(()=>{
    const handileClickData = () =>{
            if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
              getUniqueRandomNumber(pageNumber(pagecountproduct))
                dispatch(getFreeDalivaryPhone(randomNumber)) 
                setdata((predata)=>[...predata,...freeproducts ] )
            }            
    }     
   const pageLength = (pagecountproduct - 4) * resultpage
   const dataLength = data.length
   if( !loadingprodcut) {
      if(dataLength < pageLength)  {
        window.innerWidth < 425  && (
            window.addEventListener('scroll', handileClickData)
        )     
      }  
   }

    return () => { 
       window.removeEventListener('scroll', handileClickData); 
   }

  },[dispatch,freeproducts,data, randomNumber,loadingprodcut ,pagecountproduct])


    return (
          <>
                  <Container maxW={'container.xl'} p={{base:'4px', sm:'1rem'}}>
                       <VStack alignItems={'start'}>
                          <Box cursor={{base:'none', md:'pointer'}}  as={Link} w={'full'}>
                              <Image  src='https://res.cloudinary.com/daxvmjaff/image/upload/v1705217546/New_Product_h63hm2.png'/>
                          </Box>
  
                        <Flex w={'full'} gap={2} py={1} flexWrap={'wrap'}>

                        <Flex w={'48.5%'} h={'100%'}  py={1}  gap={{base:'6px',sm:0.5}} flexWrap={'wrap'}>
                      {
                         data &&  data.slice(0, (data.length / 2 )).map((product, index)=>{
                              return(
                                 <NewProductLeftCard key={index}index={index} product={product} />
                                  
                              )
                          })
                      }
                    
                  
             
         
                      </Flex>

                      <Flex w={'48.5%'} h={'100%'} py={1}  gap={{base:'6px',sm:0.5}} flexWrap={'wrap'}>
                      {
                           data &&  data.slice((data.length / 2) , data.length ).map((product, index)=>{
                              return(
                                 <NewProductLeftCard key={index}index={index} product={product} />
                                  
                              )
                          })
                      }
         
                      </Flex>
                        </Flex>
  
                    
        
                          <Flex  bg={'gray.100'} w={'full'} h={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Box  w={24} h={24}>
                            <Image src={loadingimg} w={'full'} h={'full'} />
                            </Box>
                            
                          </Flex>
               
                      </VStack>
                  </Container>
  
  
          
          </>
    )
  }
  

export default NewProductAllPhone
