/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Box, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useRef, useState } from 'react';
import { BsCashCoin, BsInfoSquare } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { PiHandshake } from 'react-icons/pi';
import { RxDividerHorizontal } from "react-icons/rx";
import { TbAwardOff } from "react-icons/tb";
import ReactStarts from "react-rating-stars-component";
import { Link, useParams } from 'react-router-dom';
import "./ProductDitalsPage.scss";
import img from './image/Orange Minimalist E Wallet Logo.png';



export default  function ProductDitalsPage  ()  {
    const [open , setopen] = useState(false)
    const [openService , setopenService] = useState(false)


  //  console.log(open)
    const menuRef = useRef()
    const IconsRef = useRef()

//     console.log(d)

const openDelevari = (e) =>{      
    setopenService(false)   
        setopen(!open)  

}
const openservice = (e) =>{      
    setopenService(!openService)   
        setopen(false)  


}



    window.addEventListener('click', (e) =>{
        
        let x = document.querySelector(".DeliveryIonsa svg")
        let y = document.querySelector(".DeliveryIonsb svg")


 
      //  console.log(e.target)       
         if(e.target === x) {
            console.log(true)
         }else{
           setopen(false)         
            
         }
         if(e.target === y) {
            console.log(true)
         }else{
           setopenService(false)         
            
         }
           
        
     })    

     const [openDescription , setopenDesciprtion] = useState(true)
     const [openReview , setopenReview] = useState()

     const OpenDescrip = () =>{
        setopenDesciprtion(true)
        setopenReview(false)
     }

     const OpenRivews= () =>{
        setopenDesciprtion(false)
        setopenReview(true)
      
     }

//console.log(openService)

const [isHovering, setIsHovering] = useState(1)
const [isHoveringCount, setIsHoveringCount] = useState(0)
const handleMouseOver = () => {
    setIsHovering(true);
};

  const handleMouseOuta = () =>{
    setIsHovering(true)
  }

   

  


    const options = {
        edit:false,
        size:window.innerWidth < 600 ? 15 : 20,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        value:5,
        isHalf :true
      }
      const data = [

        {
            name : "Free Delevari",
            img : "https://static-01.daraz.com.bd/p/c6aa4e594fcf3fd9fef4e2f4bebf7dbf.jpg"
        }
        ,
        {
            name : "Free Delevari",
            img : "https://static-01.daraz.com.bd/brand/f2e2c20cb8fa797bec5cc637eab2e662.jpg"
        }
        ,
        {
            name : "Free Delevari",
            img : "https://static-01.daraz.com.bd/p/a09d2c25700c21bb4260c7cd1e0c3135.jpg"
        }
        ,
        {
            name : "Free Delevari",
            img : "https://static-01.daraz.com.bd/brand/singer_10119d098be0b3abc6056e4eeacb187b.jpg"
        }
        ,
        {
            name : "Free Delevari",
            img : "https://static-01.daraz.com.bd/brand/walton_a03b0e581a84c5bb09fbe317cb53e880.jpg"
        },
        {
            name : "Free Delevari",
            img : "https://static-01.daraz.com.bd/p/4e9a555bec8ce4e11e9dd3f6ac772e5b.jpg"
        },
        {
            name : "Free Delevari",
            img : "https://static-01.daraz.com.bd/p/ffcf343471dee4fc40a816484a5938e9.jpg"
        },
        {
            name : "Free Delevari",
            img : "https://static-01.daraz.com.bd/brand/apollo.jpg"
        },
        {
            name : "Free Delevari",
            img : "https://static-01.daraz.com.bd/p/cfe538c17b3d569eeb45c111b64fe06a.jpg"
        },
        {
            name : "Free Delevari",
            img : "https://static-01.daraz.com.bd/p/a62039f7306afcf9e0b102ae9d9556e7.jpg"
        },
    
    
        
    ]
    const latestproducts = [
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/36d6b6b57dffa3b2f6e2c832fb9a440e.jpg"
        },
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/6ed41de0f7aabf47309bc8fecfedc0b4.jpg"
        },
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/39f7424ef5c72851760eb09d81b99083.jpg_200x200q75-product.jpg_.webp"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            price : 125,
            reguler : 100,
            img: "https://bd-live-21.slatic.net/kf/Sfa0166639231427985b9f69f7a6845e4P.jpg"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/d9c923ff6c32c631f082bd478db063d2.jpg_200x200q75-product.jpg_.webp"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/1200862fdab259e261695433537ed500.jpg_200x200q75-product.jpg_.webp"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            price : 125,
            reguler : 100,
            img: "https://bd-live-21.slatic.net/kf/Sd87fe719b9b64a68b6cda8953fe96419Q.jpg"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/c7a4563ac63db823905fe759abf920b4.jpg_200x200q75-product.jpg_.webp"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/028b3598f5e538568ee7f2cb8c75885e.jpg_200x200q75-product.jpg_.webp"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/b07e2f351171f031e99232b05bb2ba2e.jpg_200x200q75-product.jpg_.webp"
        }
        ,
        {
            name : "I phone 15 pro max (bestDial) Phone Category is best",
            price : 125,
            reguler : 100,
            img: "https://static-01.daraz.com.bd/p/2b48bd952180d0415ee6fb39af6baa7e.jpg_200x200q80-product.jpg_.webp"
        }
    ]

    const productImage = {
        img : [          
                {
                    id : 1,
                    image : "https://static-01.daraz.com.bd/p/2a004fec98afbce8651a5afe038e81af.jpg"
                },
                {
                    id : 2 ,
                    image : "https://static-01.daraz.com.bd/p/91ce5f7f8038a9028770d29c6fa008ce.jpg"
                },
                {
                    id : 3,
                    image : "https://static-01.daraz.com.bd/p/c2d5d4eb2b1d5ffcd472040d41543ce8.jpg  "
                }
    
              ],
        name : "P47 - Wireless Bluetooth Headphone - Neckband - Neckband - Neckband - Wireless Earbud"
    }
    const {name} = useParams()
    //console.log("trackInfoClick",name)


        // slider button slide latest product Slider 
        const HomeProductSlidebtnPreLatest = useRef()

        const HomeProductbtnPreLatest = () =>{
            HomeProductSlidebtnPreLatest.current.scrollLeft -= 250  
        }
      
        
        const HomeProductbtnNextLatest = () =>{
            HomeProductSlidebtnPreLatest.current.scrollLeft += 250  
       }

      // sl
  return (

    <div className='ProductDitalsPageSection'>
  
 

    <div  className='containerProductPage'>

      {/* Category header Page start---------------md Azharul---------------- */}
      <div className='CategoryHeaderShow'>
        <div className='categoryHeaderContantShow'>
          <Link > Home <span>/</span> </Link>
          <Link >{name} <span>/</span></Link>
         
        </div>
      </div>
      {/* Category header Page end---------------md Azharul---------------- */}

{/* ----------------Md azharul creator this---------------md-azharul---------------------------*/}

      {/* Category 2nd Category Chosse start---------------md Azharul---------------- */}


      {/* Category 2nd Category Chosse end---------------md Azharul---------------- */}

{/* ----------------Md axharul creator this---------------md-axharul---------------------------*/}

      {/* Product Ditals main Page Start---------------md Azharul---------------- */}
      <div className='categoryPage productDitals-Page'>
        <div className='categoryPageParta Description-Reviewpart Product-Diatls-Page-Part '>

      {/* Product Ditals main Page LeftSide Start---------------md Azharul---------------- */}
          <div className='ProductDitalsLeftSidePage'>
             <div className='ProductDitalsLeftContainer'>
                <div className='ProductDitalsLeftConatant'>

                    
                   {
                   productImage.img &&   productImage.img.map((item, index)=>{
                        return(
                        <div key={index}>
                            {
                  
                                isHovering ? (
                                    <div  className={`   ${ index === isHoveringCount ? "Block" : "Hidden" }  ProductDitalsLeftMainImageContainer`}>
                                    <div className='ProductDitalsLeftMainImage'>
                                        
                                        
                                                <img src={item.image } alt='' />
                                            
                                        
                                    
                                    </div>            
                                </div>
                                ) : (
                                    <div  className={`   ${ index === 0 ? "Block" : "Hidden" }  ProductDitalsLeftMainImageContainer`}>
                                    <div className='ProductDitalsLeftMainImage'>
                                        
                                        
                                                <img src={item.image } alt='' />
                                            
                                        
                                    
                                    </div>            
                                </div>
                                )

                           }
                        </div>

                        )
                    })
                   }
 
                    <div className='ProductDitalsLeftSubImage'>
                    <div className='ProductDitalsLeftSubImageContainer'>


                    {
                    
                    productImage.img.map((ele, index) =>{
                        return(
                            <div key={index}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOuta}  className='ProductDitalsSubImageItem'>
                            <img onMouseOver={()=>setIsHoveringCount(index)}  src={ele?.image}
                             alt='' />
                            </div>                           
                        )
                    })

                    }

        
        

                    </div>

                    </div> 




                </div>

             </div>
          </div>

      {/* Category main Page Middle Part Start---------------md Azharul---------------- */}

          <div className='ProductDitalseMiddleSide'>
            <div className='ProductDitalsMiddleContainer'>
    {/* Middile Products Ditals page Start-------Md Azharul Creator-------Md-Azharul----  */}
                <div className='ProductDitalsMiddleContant'>

                    <div className='ProductName'>
                        <h3> {productImage.name}</h3>
                    </div>

                    <div className='productRatings'>
                        <ReactStarts {...options} />
                        <Link className="customA">3 Ratings</Link>
                    </div>

                    <div className='ProductDitalsbrand'>
                        <Link className='brand  '>brand :</Link>
                        <Link className='BrandBorder customA'>No brand</Link>
                        <Link className='bordeBrand customA'>more adio for brand</Link>
                    </div>

                    <div className='ProductDetalsPrice'>
                    <VStack alignItems={'start'} spacing={0} gap={0}>
                                    <Box>
                                    <Text fontSize={18} color={'orange.500'}>
                                    ৳ 175
                                    </Text>
                                </Box>

                                <Flex w={'full'} gap={2}>
                                    <Text fontSize={'sm'} color={'gray.500'} textDecoration={'line-through'}> ৳ 200</Text>

                                    <Text fontSize={'sm'} color={'gray.700'} > -40%</Text>
                                    
                                </Flex>
                                </VStack>
                    </div>

                    <div className='ProductDitalsbrand'>
                        <span className='brand'>Location :</span>
                        <Link className='customA'>Bangladesh</Link>
                    </div>

                    <div className='ProductDitalsbrand CategoryProductDetals'>
                        <span className='brand'>Category :</span>
                        <Link className='customA'>Table</Link>
                    </div>

                    
                    <div className='ProductDitalsbrand CategoryProductDetals'>
                        <span className='brand'>Dailay Shop recomanded :</span>
                        <span className=''>Recomanded</span>
                    </div>

                    <div className='ProductDitalsbrand CategoryProductDetals'>
                        <span className='brand'>Seler Varifaied By:</span>
                        <Link className='customA'>Varifaied </Link>
                    </div>

                    <div className='ProductDitalsbrand CategoryProductDetals'>
                        <span className='brand'>Product Comapnay:</span>
                        <Link className='customA'>Mall & Mart </Link>
                    </div>

                    <div className='ProductDitalsbrand CategoryProductDetals'>
                        <span className='brand'>Free Dalivari:</span>
                        <span className=''>Free  </span>
                    </div>

                    
                    <div className='ProductDitalsbrand CategoryProductDetals'>
                        <span className='brand'>Offer:</span>
                        <span className='customA'>20% </span>
                    </div>


                    <div className='ProductDitalsbrand CategoryProductDetals'>
                        <span className='brand'>Warranty :</span>
                        <span className=''>Available </span>
                    </div>



                    <div className='ProductDitalsQuantity'>
                        <Flex alignItems={'center'} w={'full'} gap={2}>
                            <Box>
                                <Text fontSize={18} fontWeight={600} color={'gray.500'}>Quantity</Text>
                             </Box>
                                <Flex gap={2}>
                                    <Box cursor={'pointer'}  bg={'#00c4cc'} h={'2rem'} borderRadius={0} w={'40px'} type='number' display={'flex'} justifyContent={'center'} alignItems={'center'}  value={1}>
                                        <RxDividerHorizontal />
                                    </Box>
                                    <Input color={'#fff'} bg={'#00c4cc'} h={'2rem'} borderRadius={0} w={'65px'} type='number' readOnly value={1} />
                                    <Box cursor={'pointer'}  bg={'#00c4cc'} h={'2rem'} borderRadius={0} w={'40px'} type='number' display={'flex'} justifyContent={'center'} alignItems={'center'}  value={1}>
                                        <RxDividerHorizontal />
                                    </Box>
                                </Flex>
                         
                        </Flex>
                    </div>

                    <div className='ProductDitalsAdcardbutton'>
                        <button>By Now</button>
                        <button>Ad Card</button>
                    </div>



                </div>
     {/* Middile Products Ditals  page End-------Md Azharul Creator-------Md-Azharul---- */}

              
            </div>
          </div>

      {/* Category main Page Right Part Start---------------md Azharul---------------- */}
      <div className='ProductDitalsRightSide'>
            <div className='ProductDitalsRightContainer'>
    {/* Right Products Ditals page Start-------Md Azharul Creator-------Md-Azharul----  */}
                <div className='ProductDitalsRightContant'>

                    <div className='ProductRightDeleveri'>


                        <div className='ProductRightDeleveriItemTittle'>

                                        {/*On Click To Open This Tab------start---md Azharul----------  */}
                {
                    open && (
             <motion.div ref={menuRef} animate={ {height: open ? "37vh" : "0px", width : open ? "" : "0" }  } 
            className='ToggoleTabOpenContainer'>

                        <div 
                         className='ToggoleTabOpenContant'>
                        <div className="ToggoleTabOpenContantTittle">
                            <h4>Delevary</h4>
                        </div>
    
                    <div className="ToggoleTabOpenContantItemAll">
                        <div className="ToggoleTabOpenContantItem">
                            <span className="ToggoleTabOpenContantItemTittle"><PiHandshake /></span>
                            <span className="ToggoleTabOpenContantItemTittle">Free Delivery :</span>
                            <span className="ToggoleTabOpenContantItemTittle">Enjoy delivery of your order directly to the doorstep!</span>
    
    
                        </div>
    
                        <div className="FindOut">
                                <span className="">Find out more</span>
                            </div>
                    </div>
    
    
                    <div className="ToggoleTabOpenContantItemAll">
                        <div className="ToggoleTabOpenContantItem">
                            <span className="ToggoleTabOpenContantItemTittle"><PiHandshake /></span>
                            <span className="ToggoleTabOpenContantItemTittlea">Cash on Delivery Available!</span>
    
    
                        </div>
                    </div>
                    </div>
                
            
            
            </motion.div>
                )
                }
           
            {/*On Click To Open This Tab------end---md Azharul----------  */}

                            <span>Delivery</span>
                            <span id="fffdddeea" ref={IconsRef} onClick={openDelevari} className='DeliveryIons DeliveryIonsa'><BsInfoSquare /></span>
                        </div>

                        <div className='ProductRightDeleveriItemContant'>
                            <span className='Locationiocons'><IoLocationOutline /></span>
                            <span className='ProductRightDeleveriItemContantInfo'>Dhaka, Dhaka North, Banani Road No. 12 - 19</span>
                            <Link className='CHANGE'>CHANGE</Link>
                        </div>  
                    </div>


                    <div className='ProductRightFreeDeleveri'>
                        <div className='ProductRightFreeDeleveriItemTittle ProductRightDeleveriItemTittle'>
                            <h4>Free Delivery</h4>
                            <h5>Free</h5>
                        </div>

                        <div className='ProductRightDeleveriItemContant'>
                        
                            <span className='FreeDeliveryInfo'>Enjoy free shipping promotion with minimum spend of ৳ 499 from<Link> SM Trust Shop.</Link></span>
                          
                        </div>  
                    </div>


                    <div className='ProductRightCashonItemContant'>
                            <span className='Locationiocons'><BsCashCoin /></span>
                            <span>Cash on Delivery Available</span>
                    </div> 

                    <div className='ProductRightDeleveri ServicePartProductDitals'>
                        <div className='ProductRightDeleveriItemTittle'>



            {/* 2nd open tab Open and Fast Cloasae  */}
            {
                 openService && (
             <motion.div ref={menuRef} animate={ {height: openService ? "37vh" : "0px", width : openService ? "" : "0" }  } 
            className='ToggoleTabOpenContainerService'>

                        <div 
                         className='ToggoleTabOpenContant'>
                        <div className="ToggoleTabOpenContantTittle">
                            <h4>Service</h4>
                        </div>
    
                    <div className="ToggoleTabOpenContantItemAll">
                        <div className="ToggoleTabOpenContantItem">
                            <span className="ToggoleTabOpenContantItemTittle"><PiHandshake /></span>
                            <span className="ToggoleTabOpenContantItemTittle">Free Delivery :</span>
                            <span className="ToggoleTabOpenContantItemTittle">Enjoy delivery of your order directly to the doorstep!</span>
    
    
                        </div>
    
                        <div className="FindOut">
                                <span className="">Find out more</span>
                            </div>
                    </div>
    
    
                    <div className="ToggoleTabOpenContantItemAll">
                        <div className="ToggoleTabOpenContantItem">
                            <span className="ToggoleTabOpenContantItemTittle"><PiHandshake /></span>
                            <span className="ToggoleTabOpenContantItemTittlea">Cash on Delivery Available!</span>
    
    
                        </div>
                    </div>
                    </div>
                
            
            
            </motion.div>
                )
                }



                            <span >Service</span>
                            <span onClick={openservice} className='DeliveryIons  DeliveryIonsb'><BsInfoSquare /></span>
                        </div>

                        <div className='ProductRightDeleveriItemContantSerbice'>
                            <div className='ProductRightDeleveriItemContantSerbicefast'>
                                <span className='Locationiocons'><FaHandshake /></span>
                                <div className='ProductRightDeleveriItemContantInfoServiceContent'>
                                <span className='ProductRightDeleveriItemContantInfoService'>7 Days Returns</span>
                                <span className='CHANGE'>Change of mind is not applicable</span>
                                </div>

                            </div>

                            <div className='ProductRightDeleveriItemContantSerbicefast ProductRightDeleveriItemContantInfoServiceWarenty'>
                                <span className='Locationiocons'><TbAwardOff /></span>
                                <div className='ProductRightDeleveriItemContantInfoServiceContent'>
                                <span className='ProductRightDeleveriItemContantInfoService '>Warranty not available</span>
                            
                                </div>

                            </div>

                           
                        </div>  
                    </div>




                </div>
     {/* Right Products Ditals  page End-------Md Azharul Creator-------Md-Azharul---- */}

              
            </div>
      </div>


        </div>
      </div>   
      {/* Category main Page end---------------md Azharul---------------- */}

{/* ----------------Md axharul creator this---------------md-axharul---------------------------*/}

  <div className="Review-Description-section">
        <div className="Description-review">
            <div className="conatiner">
                <div className="Description-Reviewpart">

                    <div className="Description-Rivew-Conatiner">
                        
                        <div className="Description-Rivew-Conatnt">

                        <div className="SectionTittleSectionHeaderpart">
                            <div className="ReviewBtnContainer">

                                <div className={`ReviewPartBtnOpen ${openDescription ? "ActiveColor" : ""}`}>
                                    <button onClick={OpenDescrip}>Description</button>
                                </div>

                                <div className={`ReviewPartBtnOpen ${openReview  ? "ActiveColors" : ""}`}>
                                    <button onClick={OpenRivews}>Riview</button>
                                </div>

                            </div>

                        </div>

                        <div className="Middlepart-Rivew-DescriptionContainerMiddle">

                            <div className="MiddleFastPartDesRivewContainer">
                                
                                {
                                    openDescription && (
                                    
                                  <div className="DescriptioninfoTExtAll">
                                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus itaque veritatis molestiae deserunt optio beatae repudiandae fugit. Dicta ad reiciendis dolorem veniam, quasi modi, mollitia blanditiis ipsa odio voluptas excepturi vero, aliquid accusamus eligendi suscipit. Odio, illo cumque! Dolorem exercitationem temporibus debitis, aliquid nihil illum repellendus iusto assumenda ut ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, veritatis nam. Recusandae dolor saepe officia iste possimus veniam molestias animi excepturi autem? Quo praesentium ad perferendis ex eligendi rem nobis numquam tempore deserunt illo maxime aperiam hic labore consequuntur quae possimus vero quis, doloribus id! Beatae, tenetur obcaecati. Reprehenderit fuga corporis provident velit consectetur repellat, possimus obcaecati est labore recusandae eos dolorum ducimus neque et, eligendi excepturi. Excepturi facilis deleniti pariatur ut. Tempora molestiae incidunt molestias, ex modi ut excepturi culpa eveniet voluptatem suscipit, quo, sed maiores! Mollitia cumque at iste veritatis totam sequi possimus tenetur eum officiis quisquam? Libero qui quos maxime quisquam impedit eius earum! Corporis voluptatem eius quasi quia aut illum, fuga sapiente nostrum iste aperiam dolorum rerum sint possimus ab molestias saepe, accusamus doloremque provident repellat. Qui officiis velit voluptatem aspernatur commodi vel magnam tempore nostrum ea, nam dolorum et aliquid tempora beatae in dolor dolore unde expedita error fuga placeat quae possimus eaque iure! Voluptatem amet est, tempora eos corrupti maiores repellendus officia et quae qui. Accusamus voluptate architecto quisquam culpa reprehenderit atque, nemo, perferendis ipsum, aperiam voluptatibus sint. Reprehenderit, culpa corporis? Vitae qui ab eaque voluptatum quas laboriosam id illum aut, deleniti facilis nobis at blanditiis eos accusamus, quae, facere dolores eligendi quaerat veritatis libero fugit quia. Tempore non, repellat accusamus fuga consequatur, assumenda possimus odio distinctio ab quos, voluptate dignissimos voluptatibus facilis maiores ducimus vitae quis officiis recusandae suscipit! Maxime est totam doloribus. Maxime itaque error eius aliquam a id. Fuga, nostrum exercitationem. Enim debitis non veniam, reiciendis minima eligendi labore nihil, consectetur mollitia asperiores nisi natus nulla praesentium illo nam eius vel necessitatibus maxime, ducimus exercitationem. Quos eos facilis accusantium, optio vel ad sed unde suscipit repellat quibusdam dolore officia expedita officiis quam quas, nobis eveniet! Tempore delectus praesentium dolore cupiditate. Corrupti exercitationem molestias omnis praesentium? Magni labore rerum amet architecto? Aperiam adipisci mollitia nisi voluptate. Mollitia voluptates atque hic vitae voluptas similique animi laborum reprehenderit eum praesentium illum, aliquam ullam, eos laboriosam veritatis fugiat, quasi ea reiciendis harum assumenda corporis. Nam officia ab quasi eos quidem quo sunt praesentium laboriosam laborum eum, vitae nobis, omnis aspernatur nisi explicabo necessitatibus perspiciatis iure aut asperiores corporis reiciendis debitis! Aut aperiam nostrum amet officiis esse explicabo vitae earum provident quis placeat voluptate praesentium, ratione at voluptatibus, quas, veritatis rem consequatur modi? Consectetur laboriosam possimus aliquid cum labore modi officiis odit fuga incidunt quasi quae quibusdam aliquam magni vel ab temporibus sapiente sed, ducimus illo tempore minima fugit impedit expedita! Laborum ex tempora ullam ratione! Eos quibusdam vel molestiae, temporibus fugiat corrupti ipsa aut eligendi aperiam earum optio, illum fugit cupiditate culpa obcaecati veniam possimus perferendis, voluptate facere blanditiis officia rerum. Neque nisi aliquam natus maxime itaque! Culpa unde velit neque eaque sapiente explicabo laboriosam assumenda quae. Ab magnam nulla nihil delectus fugiat dolores quam minima! Culpa iste iusto, assumenda hic laudantium aut ex similique reiciendis fuga delectus accusamus voluptate saepe. Quaerat obcaecati odio laudantium explicabo amet, sint, aut omnis eligendi quod, modi ratione recusandae? This is a Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis magni, accusantium voluptatum doloremque alias omnis. Ducimus deserunt est nesciunt laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vero ullam sint ex recusandae placeat ea non necessitatibus unde iusto. Praesentium, numquam. Pariatur illum provident reprehenderit, optio delectus fugit omnis error perferendis tempore quis asperiores soluta similique corrupti magnam aspernatur maiores voluptas tempora voluptate amet. Voluptatem facere odio magnam quam placeat, perferendis consectetur, eligendi ab cum harum quaerat. Quaerat, distinctio possimus. Architecto fugit fugiat accusamus nulla ea at quam cupiditate eos? Iure possimus est facilis aperiam! Quo, laboriosam quam. Nesciunt aperiam cumque consequuntur in enim minima qui. Repellendus doloremque non, porro libero corporis consequatur expedita ut repellat voluptatibus debitis consequuntur!</h4>
                       
                                </div>

                                    )
                                }

                                {
                                    openReview &&(

                                        <div className="RivewConatinerOpen">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum doloribus, deleniti quis necessitatibus, odio explicabo est, voluptate perferendis repudiandae pariatur quod! Illum repudiandae magnam vero qui pariatur voluptatem totam, laudantium doloribus accusantium quasi repellat dolores quisquam? Ab adipisci excepturi unde. Eveniet nisi obcaecati eligendi excepturi exercitationem iste omnis pariatur voluptatibus, reprehenderit quas consectetur officiis temporibus ad corporis architecto quam maxime dolor ea. Minima iure laborum hic, officiis explicabo voluptatum nostrum totam quae libero fugit aperiam, debitis rerum vel odio? Cumque adipisci non quidem odit ab veritatis est, deleniti dignissimos vitae nulla sed fugiat ullam repellendus aliquam laudantium numquam quaerat voluptatibus fugit reprehenderit quasi, similique natus? Quasi ad temporibus iure possimus rem facere ex et saepe odit incidunt nihil minima consequatur ipsum corporis voluptatum veritatis placeat obcaecati dolore, error ducimus maxime accusamus architecto sequi beatae! Consequuntur inventore hic minima nemo eum distinctio exercitationem temporibus veritatis laborum, voluptate quaerat officia incidunt blanditiis similique at sapiente eos ipsam excepturi a natus! Impedit sit consequuntur similique eveniet doloribus. Tenetur laborum sint vero corporis officiis nemo adipisci est aliquam nulla minima, asperiores quidem veniam illum numquam quam ad nesciunt. Corrupti quaerat autem impedit similique libero accusantium dignissimos quo. Nobis necessitatibus quibusdam nemo, culpa a excepturi?</div>
                                    )
                                }
                
            
                            </div>

                            
                            <div className="MiddleSecendrandomConatiner">

                                <div className="MiddleSecendContant">

                                    <div className="ProductCard">

                                        <Link className="Card">

                                            <div className="ProductImage">
                                                <img src={img} alt="" />
                                            </div>

                                            <div className="ProductName">
                                                <h4>P47 - Wireless Conn </h4>
                                            </div>

                                            <div className="ProductPrice">
                                                <span className="CurrentProduct">$104</span>
                                                <span className="RegularPRice">$204</span>
                                            </div>
                                        </Link>
                                    </div>

                                    
                                    <div className="ProductCard">

                                        <Link className="Card">

                                            <div className="ProductImage">
                                                <img src={img} alt="" />
                                            </div>

                                            <div className="ProductName">
                                                <h4>P47 - Wireless Conn </h4>
                                            </div>

                                            <div className="ProductPrice">
                                                <span className="CurrentProduct">$104</span>
                                                <span className="RegularPRice">$204</span>
                                            </div>
                                        </Link>
                                    </div>

                                    
                                    <div className="ProductCard">

                                        <Link className="Card">

                                            <div className="ProductImage">
                                                <img src={img} alt="" />
                                            </div>

                                            <div className="ProductName">
                                                <h4>P47 - Wireless Conn </h4>
                                            </div>

                                            <div className="ProductPrice">
                                                <span className="CurrentProduct">$104</span>
                                                <span className="RegularPRice">$204</span>
                                            </div>
                                        </Link>
                                        
                                    </div>


                                </div>
                            </div>

                        </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div> 



{/* ---------------------------Md Azharul------------------------------------------------ */}
          {/* latest Products page Start-------Md Azharul Creator-------Md-Azharul----  */}
   
          {/* Latest product page End-------Md Azharul Creator-------Md-Azharul---- */}




    </div>
  </div>
  )
}


