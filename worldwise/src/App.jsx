
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import Error from './pages/Error';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import City from './components/City';
import Form from './components/Form';
import CountryList from './components/CountryList';
import { DataWrapper } from './contexts/DataContext';


function App() {
  
  
  
  return (
    <div>
       
       {/* <p className="test">sALAM alasda</p> */}
      <DataWrapper>  
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} ></Route>
            <Route path='pricing' element={<Pricing />}></Route>
            <Route path='product' element={<Product />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/app' element={<AppLayout />}>
                <Route index element={<Navigate to='city' replace />}></Route>
                <Route path='city' element={<CityList />} ></Route>
                <Route path="city/:id" element={<City />}></Route>
                <Route path='country' element={<CountryList />}></Route>
                <Route path='form' element={<Form />}></Route>
            </Route>
            <Route path='*' element={<Error />}> </Route>
          </Routes>
        </BrowserRouter>
       </DataWrapper>
  
    </div>
  
 )
}






export default App;