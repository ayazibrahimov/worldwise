import CityItem from './CityItem'
import Spinner from './Spinner'
import Message from './Message'
import styles from './CityList.module.css'

function CityList({ cities,isLoading }) {
  
 if(isLoading) return <Spinner />


 if(cities.length === 0) return <Message message='Data zad yoxdu' />


  return (
    <ul className={styles.cityList}>
         {
            cities.map((data,index)=>(
                <CityItem data={data} key={index} />
            ))
         }
    </ul>
  );
}

export default CityList;