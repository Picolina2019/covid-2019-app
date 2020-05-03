import React,{useState,useEffect} from 'react'
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import Card from 'react-bootstrap/Card';

export const Map = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMap() {
      try {
        const response = await axios.get('https://disease.sh/v2/countries');
        const data = await response.data;
        console.log(data);
        setCountries(data);
      } catch (e) {
        console.log(e);
        setCountries([]);
        setError(true);
      }
    }
    fetchMap();
  }, []);
  const newCountries = countries.map((c) => {
    return (
      <Card className='text-center'>
        <Card.Body>
          <Card.Title>{c.country}</Card.Title>
          <Card.Text>cases:{c.cases}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  const location= countries.map((d)=>{
      const img = <img height='10px' src={d.countryInfo.flag} alt='flag'/>
      return (
          <div 
          lat={d.countryInfo.lat}
          lng={d.countryInfo.long}
          style={{
              color:'purple',
              fontWeight:'bold',
              height:'26px',
              width:'30px',
              backgroundColor:'transparent',
              textAlign:'center'
          }}
          >
        
             {img}
              <br/>
              {d.cases}
             
          </div>
      )
  })

  return (
    <>
      {error ? (
        <p style={{ color: 'red', fontSize: '26px', fontStyle: 'italic' }}>
          Map is not available
        </p>
      ) : (
          <>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyAdEJjoM20YxdZUQtZ74ZCK9G-DYm-y0fs',
            }}
            defaultCenter={{ lat: 62, lng: 15 }}
            defaultZoom={3}>
           {location}
         </GoogleMapReact>
        </div>
        </>
      )}
    </>
  );
};
