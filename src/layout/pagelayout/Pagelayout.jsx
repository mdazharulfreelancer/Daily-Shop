/* eslint-disable no-unused-vars */
import { Box, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartIcon from '../../component/Cart/CartIcon'
import CartModel from '../../component/Cart/CartModel'
import FooterMobail from './Footer.jsx/FooterMobail'
import Header from './Header/Header'

const Pagelayout = ({children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {cartItems} = useSelector(state => state.cartItem)
  const [open, setOpen] = React.useState(false)
  const moddelOpen = () =>{
    onOpen()
    setOpen(true)
   
  }
  const [total, setTotal] = React.useState(0)
    
  useEffect(() => { 
      let price = []
      cartItems.map(item => {
          price.push(item?.currentprice * item?.qty)
      })

     return setTotal(price.reduce((a, b) => a + b, 0))
  }, [cartItems])
 
  return (
    <>
        <VStack pos={'relative'} alignItems={"start"}>
          <Header />
          
          {
            window.innerWidth > 764 && ( 
              <>
               <Box  onClick={()=>moddelOpen()} cursor={'pointer'} zIndex={999} pos={'fixed'} top={'45vh'} right={0}>
                <CartIcon total={total} cartItems={cartItems} />
               </Box>

               <Box zIndex={99999} w={'full'}>
               <CartModel open={open} setOpen={setOpen} total={total} cartItems={cartItems}  isOpen={isOpen} onClose={onClose}/>
               </Box>
              </>
            )
          }

          <Box w={"full"}>
           {children}
           </Box>

           {
            window.innerWidth < 525 && (
              <>
                  <Box zIndex={999999} w={'full'}>
               <CartModel  cartItems={cartItems}total ={total} isOpen={isOpen} onClose={onClose}/>
               </Box>
               <Box h={'6vh'}>
              <Box pos={'fixed'} bottom={0} left={0} w={"full"}>
         
                <FooterMobail isOpen={onOpen} />
              </Box>
              </Box>
              </>
            )
           }
        </VStack>
    </>
  )
}

export default Pagelayout
