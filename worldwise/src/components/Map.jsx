import { useSearchParams,useNavigate } from 'react-router-dom';
import styles from './Map.module.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useState } from 'react';

function Map() {

  const [data,setData] = useSearchParams()
  const [mapPosition, setMapPosition] = useState([40.3957776, 49.9828595])

  const navigate = useNavigate();


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
         <Marker position={mapPosition}>
           <Popup>
             A pretty CSS3 popup. <br /> Easily customizable.
           </Popup>
         </Marker>
      </MapContainer>
      </div>
  )
}

export default Map; 