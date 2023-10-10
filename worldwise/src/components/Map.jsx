import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css'

function Map() {

  const [data,setData] = useSearchParams()
  const navigate = useNavigate()
  


  const lat = data.get('lat')
  const lng = data.get('lng')


  return (
    <div className={styles.mapContainer} onClick={()=>navigate('form')}>
      Map
      <b>Lat:{lat}</b> <br />
      <b>Lng:{lng}</b>
    </div>
  )
}

export default Map; 