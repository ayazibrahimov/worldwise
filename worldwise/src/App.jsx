import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import Error from './pages/Error';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
// import City from './components/City';
import CountryList from './components/CountryList';


const BASE_URL = 'http://localhost:9000'


function App() {

  const [cities,setCities] = useState([])
  const [isLoading,setIsLoading] = useState(false)




  useEffect(()=>{
    
    async function fetchCities(){
       try{
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`)
        const data = await res.json()
        setCities(data);
       }catch{
        alert('There are some error...')
       } finally{
        setIsLoading(false)
       }
    }


    fetchCities()
  }, [])


  return (
    <div>
       
       {/* <p className="test">sALAM alasda</p> */}

       <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} ></Route>
            <Route path='pricing' element={<Pricing />}></Route>
            <Route path='product' element={<Product />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/app' element={<AppLayout />}>
                <Route index element={<CityList cities={cities} isLoading={isLoading} />} ></Route>
                <Route path='city' element={<CityList cities={cities} isLoading={isLoading}/>} ></Route>
                <Route path='country' element={<CountryList cities={cities} isLoading={isLoading} />}></Route>
                <Route path='form' element={<p>Form</p>}></Route>
            </Route>
            <Route path='*' element={<Error />}> </Route>
          </Routes>
       </BrowserRouter>


    </div>
  )
}






export default App;