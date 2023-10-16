import CountyrItem from './CountryItem'
import Spinner from './Spinner'
import Message from './Message'
import styles from './CountryList.module.css'
import { useContext } from 'react'
import { DataProvider } from '../contexts/DataContext'

function CountryList() {


  const { cities,isLoading } = useContext(DataProvider)

  
 if(isLoading) return <Spinner />

 
 if(cities.length === 0) return <Message message='Data zad yoxdu' />



 let countries = cities.reduce((arr,cur)=>{
     if(!arr.map(data=>data.country).includes(cur.country)){
        return [...arr, {country:cur.country, emoji:cur.emoji}]
     }else return arr;
 }, [])






  return (
    <ul className={styles.countryList}>
         {
            countries.map((country,index)=>(
                <CountyrItem country={country} key={index} />
            ))
         }
    </ul>
  );
}

export default CountryList;
