import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHomeJustForYouPhoneLeft, getHomeJustForYouProductPc } from '../../../actions/ProductAction'
import loadingimg from '../../../assets/output-onlinegiftools (1).gif'
import JustForYouCard from './JustForYouCard'
import JustForYouPhoneLeftCard from './JustForYouPhoneLeft'
import JustForYouPhoneRightCard from './JustForYouPhoneRightCard'
import pageNumber from './pageNumber'
const JustForYou = () => {

  const producta = [
    {
        "productimage": [
                {
                    "originalname": "file",
                    "cloudinaryId": "Categories/iphhksgcbq6idggu9gcs",
                    "url": "https://res.cloudinary.com/daxvmjaff/image/upload/v1722263469/Categories/iphhksgcbq6idggu9gcs.webp",
                    "_id": "66a7a79f9dd8c208616508d6"
                },
                {
                    "originalname": "file",
                    "cloudinaryId": "Categories/ltu8eqh2ngua68wvs31i",
                    "url": "https://res.cloudinary.com/daxvmjaff/image/upload/v1722263469/Categories/ltu8eqh2ngua68wvs31i.webp",
                    "_id": "66a7a79f9dd8c208616508d7"
                }
            ],
        productname : "name is the produicty here."

    },
    
  ]
  //my code phone left data receive payload /backend
  const dispatch = useDispatch()

  const {HomeForYouProPhoneleft, pagecountproduct ,resultpage , loading:loadingprodcut } = useSelector(state=>state.HomeJustForYouProductsLeft)

  const {HomeForYouProductPC, pagecountproduct:pagecountproductpc ,resultpage:resultpagepc , loading:loadingprodcutpc } = useSelector(state=>state.HomeJustForYouProductsPc)

  const [lastFourRandomNumbers , setLastFourRandomNumbers] = useState([1,5])
  const [randomNumber, setRandomNumber] = useState(5);  
  const [data, setdata] = useState([])
  useEffect(()=>{
      window.innerWidth < 425 && (
        dispatch(getHomeJustForYouPhoneLeft())
    )   
    
     window.innerWidth > 426 && (
         dispatch(getHomeJustForYouProductPc())
    )
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
  const ButtonRef = useRef()
//phone --------------------------------------------------
  useEffect(()=>{
    const handileClickData = () =>{
            if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                getUniqueRandomNumber(pageNumber(pagecountproduct))
              //  console.log(randomNumber)
                dispatch(getHomeJustForYouPhoneLeft(randomNumber)) 
                setdata((predata)=>[...predata, ...HomeForYouProPhoneleft ] )
 
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

  },[dispatch,HomeForYouProPhoneleft,data ,randomNumber,loadingprodcut ,pagecountproduct ])
//phone -------------------------------------------

const ButtonRefpc = useRef()
const [lastFourRandomNumberspc , setLastFourRandomNumberspc] = useState([1,5])
const [randomNumberpc, setRandomNumberpc] = useState(5);  
const [datapc, setdatapc] = useState([])
  //function
  const getUniqueRandomNumberpc = (numbers) => { 
    console.log(numbers)
 //   console.log(numbers)
    if(lastFourRandomNumberspc.length === numbers.length ){
        return null
    }
    let newRandomNumber;
    do {
      newRandomNumber = Math.floor(Math.random() * numbers.length );
    } while (lastFourRandomNumberspc.includes(newRandomNumber) || newRandomNumber === 0 || newRandomNumber === 1 && newRandomNumber === 5 ) ;
    setRandomNumberpc(newRandomNumber )   
 
     setLastFourRandomNumberspc((prev) => {
      const newLastFour = [...prev, newRandomNumber];
      return newLastFour;
    })

}
//pc------------------------------------------
useEffect(()=>{
    const handileClickDatpc = () =>{
      
                getUniqueRandomNumberpc(pageNumber(pagecountproductpc))
              //  console.log(randomNumber)
                dispatch(getHomeJustForYouProductPc(randomNumberpc)) 
                setdatapc((predata)=>[...predata, ...HomeForYouProductPC ] )
 
                  
    }     
   const pageLength = (pagecountproductpc - 4) * resultpagepc
   const dataLength = datapc.length

    if( !loadingprodcut) {
        if(dataLength < pageLength)  {
          window.innerWidth > 426  && (
              ButtonRefpc.current && ButtonRefpc.current.addEventListener('click', handileClickDatpc)
              
          )     
        }  
     }

    
    return () => { 
        window.removeEventListener('load' ,handileClickDatpc)
        ButtonRefpc.current && ButtonRefpc.current.removeEventListener('click', handileClickDatpc); 
   }

  },[dispatch,HomeForYouProductPC,datapc ,randomNumberpc,loadingprodcutpc ,pagecountproductpc ,resultpagepc])
//pc------------------------------------------

const loading = useRef()
const justFor = useRef()

  useEffect(()=>{
  //  console.log(HomeForYouProductPC)
  },[  ])


  return (
     <>
         <Container  px={{base:'0.3rem',sm:'1rem',md:'1rem',lg:'1rem'}}   maxW={'container.xl'}>

              <Box py={3}>
                <Text cursor={'pointer'}  fontSize={'lxl'} ref={justFor} fontWeight={'bold'}>Just For You </Text>
                </Box>
          
          
            {
                window.innerWidth > 426 && (
                    <>
                  
                 {
                   datapc && datapc.length < resultpagepc ?(
            
                    <Flex w={'full'}   py={1}  gap={0.5} flexWrap={'wrap'}>
               
                            <>
                                  {
                                 HomeForYouProductPC && HomeForYouProductPC?.map((product, index)=>{
                                    return(
                                        <JustForYouCard key={index} product={product} />
                                    )
                                })
                                
                            }
                            </>
                
                       
                    </Flex>
                   ):(
                    <Flex w={'full'}   py={1}  gap={0.5} flexWrap={'wrap'}>
               
                    <>
                          {
                         datapc && datapc?.map((product, index)=>{
                            return(
                                <JustForYouCard key={index} product={product} />
                            )
                        })
                        
                    }
                    </>
        
               
            </Flex>
                   )
     }           
            {

         producta.length  < (2 * 3 -1) && (     
        
                    <Box py={3} w={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        {/* loadmore button */}
                    
                       {
                         !loadingprodcutpc && !loadingprodcutpc ? (
                         <Button   ref={ButtonRefpc}  w={'400px'} colorScheme="pink" variant="outline">
                            Load More
                        </Button>
                         ) :(
                            <Button  isLoading ref={ButtonRefpc}  w={'400px'} colorScheme="pink" variant="outline">
                            Load More
                        </Button>
                         )
                       
                        }
                       
                    </Box>

)}
                    </>

                
                )
            }


            {
                window.innerWidth < 425 && (
                    <>
                    <Flex w={'full'} gap={'5px'}p={0} m={0}>
                        <Flex w={'49.8%'} h={'100%'}  py={1}  gap={2} flexWrap={'wrap'}>
                        {
                            data &&  data.slice(0, (data.length / 2 )).map((product, index)=>{
                                return(
                                    <JustForYouPhoneLeftCard key={index} loading={''} product={product} />
                                )
                            })
                            
                        }

                    
                       
                        </Flex>
                        <Flex w={'49.8%'}  h={'100%'}   py={1}  gap={2} flexWrap={'wrap'}>
                 
          
                        
                        {
                           data &&  data.slice((data.length / 2) , data.length ).map((product, index)=>{
                                return(
                                    <JustForYouPhoneRightCard key={index} product={product} />
                                )
                            })
                            
                        }
                        </Flex>
                       
                    </Flex>

               
                          {
                            data && data.length < 400 ? (
                                <>
                                <Flex w={'full'}ref={ButtonRef} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <Box w={'full'}  ref={loading}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <Image w={24} h={24} src={loadingimg}  alt={'asd'}/>
                                </Box>
                                </Flex>
                                </>
                            ) :('')
                          }
                     
                    
                    </>
                    
                )
            }
            </Container>
     </>
  )
}

export default JustForYou
