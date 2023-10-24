import { useSearchParams,useNavigate } from 'react-router-dom';
import styles from './Map.module.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useContext, useState } from 'react';
import { DataProvider } from '../contexts/DataContext';

function Map() {

  const [data,setData] = useSearchParams()
  const [mapPosition, setMapPosition] = useState([38.727881642324164, -9.140900099907554])

  const navigate = useNavigate();
  const {cities} = useContext(DataProvider) 


  const lat = data.get('lat')
  const lng = data.get('lng')


  return (

      <div className={styles.mapContainer}>
        <MapContainer
        className={styles.map}
        center={mapPosition} 
        zoom={13} 
        scrollWheelZoom={true}>
         <TileLayer
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
        {
          cities.map(city=>(
            <Marker key={city.id} position={[city.position.lat, city.position.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          ))
        }
      </MapContainer>
      </div>
  )
}

export default Map; 