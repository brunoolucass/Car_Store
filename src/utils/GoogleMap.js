import React from "react";
import  {  GoogleMap ,  useJsApiLoader  }  from  '@react-google-maps/api' ;

const Map = () => {

    const  { isLoaded }  =  useJsApiLoader ( { 
        id : 'google-map-script' , 
        googleMapsApiKey : "AIzaSyAPq0e7VurTHLXsshQ5ZKWuBZmMI-oS5js" ,
      } );

      return (
      <>
      { isLoaded ? (
        <GoogleMap
          mapContainerStyle={{width : "100%", height : "100%" }}
          center={{
            lat:-8.054141765392643, 
            lng:-34.8711787988196,
          }}
          zoom={15}
        >
         
        </GoogleMap>
    ) : (
        <></>
    )}
        </>
        
      );
      
    
};
    
export default Map;