// Context Api

import { Children, createContext, useEffect, useState } from "react";


const BASE_URL = 'http://localhost:9000'



const DataProvider = createContext()


function DataWrapper({children}){
      
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



  return(
    <DataProvider.Provider value={{ cities,isLoading }}>
          {children}
    </DataProvider.Provider>
  )


}



// function usageContext(){
//     const data = useContext(DataProvider)
//     return data;
// }



export {DataWrapper,DataProvider}




















