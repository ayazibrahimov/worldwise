import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import Error from './pages/Error';
import Login from './pages/Login';



function App() {



  return (
    <div>
       
       {/* <p className="test">sALAM alasda</p> */}

       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} ></Route>
            <Route path='pricing' element={<Pricing />}></Route>
            <Route path='product' element={<Product />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='*' element={<Error />}> </Route>
          </Routes>
       </BrowserRouter>


    </div>
  )
}






export default App;