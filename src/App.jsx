import { Route, Routes } from 'react-router-dom'
import './App.css'
import FreeDelivery from './component/Home/FastCategory/FreeDelivery/FreeDelivery'
import FreshSalePc from './component/Home/FreshSale/FreshSaleDesktop/FreshSalePc'
import FreshSalePhone from './component/Home/FreshSale/Freshsalephone/FreshSalePhone'
import MoreProductPage from './component/MoreProductPage/MoreProductPage'
import Pagelayout from './layout/pagelayout/Pagelayout'
import AllGategori from './pages/AllCategory/AllGategori'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import Home from './pages/Home/Home'
import ProductDitals from './pages/ProductDitals/ProductDitals'

function App() {


  return (
    <>
    <Pagelayout>
      <Routes>
     
         <Route path='/' element={<Home  />} />
         <Route path='/ditals-product/:name' element={<ProductDitals  />} />
         <Route path='/categori/:name' element={<CategoryPage  />} />
         <Route path='/fresh-sale' element={<FreshSalePhone  />} />
         <Route path='/fresh-sale-all-shop' element={<FreshSalePc  />} />
         <Route path='/free-delivery' element={< FreeDelivery/>} />
         <Route path='/view-all-product/:name' element={< MoreProductPage/>} />
         <Route path='/all-category' element={< AllGategori/>} />
      
      </Routes>
    </Pagelayout>
    </>
  )
}

export default App
