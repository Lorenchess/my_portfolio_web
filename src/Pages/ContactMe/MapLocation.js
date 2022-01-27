import React, {useRef, useEffect} from 'react';
import "./ContactInfo.scss"

const MapLocation = ({center, zoom}) => {
  
  const mapRef = useRef();


  useEffect(() => {
   const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom
   });
   new window.google.maps.Marker({position: center, map: map});

  }, [center, zoom]);


   return (
   <div ref={mapRef} className="map"></div>
   );
 
  
};

export default MapLocation
