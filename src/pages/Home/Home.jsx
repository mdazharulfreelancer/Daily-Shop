/* eslint-disable no-unused-vars */

import { Box, VStack } from '@chakra-ui/react'
import Categories from '../../component/Home/Categories/Categories'
import HomeFastCategory from '../../component/Home/FastCategory/HomeFastCategory'
import FrashSale from '../../component/Home/FreshSale/FrashSale'
import HomeSlider from '../../component/Home/HomeSlider/HomeSlider'
import JustForYou from '../../component/Home/JustForYou/JustForYou'

const Home = () => {
 const fetchData = async () => {
      try {
        const response = await axios.get('https://daily-shop-backend.vercel.app/api/v1/flash-sale/10');
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    };

    // Call the async function
    fetchData();
  
  return (
    <>
      <VStack alignItems={"start"} w={"full"}>
          {
            window.innerWidth > 768 && (
              <>
              <Box w={"full"}>
            <HomeSlider />
          </Box>
              </>
            )
            
          }
          <Box w={"full"}>
            <HomeFastCategory />
          </Box>
          
          <Box w={"full"}>
            <FrashSale />
          </Box>

          {/* <Box w={"full"}>
            <TopRankingHome />
          </Box> */}

          <Box w={"full"}>
            <Categories />
          </Box>

          <Box w={"full"}>
            <JustForYou />
          </Box>
      </VStack>
      
     
    </>
  )
}

export default Home
