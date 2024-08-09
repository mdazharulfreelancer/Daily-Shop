import { Box, Container, Flex, Image, Link, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNewLowPricePhone } from '../../../../../../actions/ProductAction'
import loadingimg from '../../../../../../assets/output-onlinegiftools (1).gif'
import pageNumber from '../../../../JustForYou/pageNumber'
import MiddleImage from '../../Image/MiddleImage'
import LowPriceRightCard from '../LowPricePhone/LowPriceRightCard'
import LowPricephoneLeftCard from '../LowPricePhone/LowPricephoneLeftCard'
import EverydayprocutCard from './everyproductcard'



const Everydayprocut = () => {
   const dispatch = useDispatch()
  const {everylowproduct, pagecountproduct ,resultpage , loading:loadingprodcut } = useSelector(state=>state.lowpriceproductphone)

   const [data, setdata] = useState([])
  useEffect(()=>{
  
{  window.innerWidth < 425 && (
  
    dispatch(getAllNewLowPricePhone())
  )   
}
  
  },[dispatch ])
  const [lastFourRandomNumbers , setLastFourRandomNumbers] = useState([1,3])
  const [randomNumber, setRandomNumber] = useState(3);  
  //function
  const getUniqueRandomNumber = (numbers) => { 
    //console.log(numbers)
//    console.log(numbers)
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
                console.log(randomNumber)
                dispatch(getAllNewLowPricePhone(randomNumber)) 
                setdata((predata)=>[...predata,...everylowproduct ] )
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

  },[dispatch,everylowproduct,data ,randomNumber,loadingprodcut ,pagecountproduct])



return (
        <>
                <Container maxW={'container.xl'} p={{base:'4px', sm:'1rem'}} >

                  {
                    window.innerWidth > 455 &&( 
                      <VStack alignItems={'start'}>
                      <Box cursor={{base:'none', md:'pointer'}}  as={Link} w={'full'}>
                          <Image  src='https://res.cloudinary.com/daxvmjaff/image/upload/v1705217821/evryday_afyvkj.png'/>
                      </Box>

                 <Flex w={'full'}  py={1}  gap={{base:'6px',sm:0.5}} flexWrap={'wrap'}>
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
                  <EverydayprocutCard />
     
                  </Flex>

                  <Box>
                    <MiddleImage />
                  </Box>
                     </VStack>
                    )
                  }

                  {
                    window.innerWidth < 455 &&( 
                      <VStack alignItems={'start'}>
                      <Box cursor={{base:'none', md:'pointer'}}  as={Link} w={'full'}>
                          <Image  src='https://res.cloudinary.com/daxvmjaff/image/upload/v1705217821/evryday_afyvkj.png'/>
                      </Box>

                      <Flex w={'full'} gap={2} py={1} flexWrap={'wrap'}  >

                         <Flex w={'48.5%'} h={'100%'}  py={1}  gap={{base:'6px',sm:0.5}} flexWrap={'wrap'}>
                            {
                          data &&  data?.slice(0, (data.length / 2 )).map((product, index)=>{
                                return(
                                  <LowPricephoneLeftCard key={index} product={product} index={index} />
                                )
                              })
                            }
                         </Flex>

                      
                         <Flex w={'48.5%'} h={'100%'}  py={1}  gap={{base:'6px',sm:0.5}} flexWrap={'wrap'}>
                            {
                              data &&  data?.slice((data.length / 2) , data.length ).map((product, index)=>{
                                return(
                                  <LowPriceRightCard key={index} product={product} index={index} />
                                )
                              })
                            }
                         </Flex>


                         
                        
                    
                                <Flex w={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                <Box w={'full'}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <Image w={24} h={24} src={loadingimg}  alt={'asd'}/>
                                </Box>
                            </Flex>
                         
                      </Flex>

              
                     </VStack>
                    )
                  }
              
                </Container>


        
        </>
  )
}

export default Everydayprocut
