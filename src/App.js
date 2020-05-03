import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Cards} from './components/Card/Card';
import classes from './App.module.css'
import axios from 'axios';
import {Map} from './components/Map/Map'


function App() {
  const [data,setData]= useState({});
  const [error,setError]=useState(false);
  const [loading, setLoading]=useState(false);
  
  useEffect(()=>{
   async function fetchData(){
    try{  
   setLoading(true)
   const response = await axios.get('https://disease.sh/v2/all');
   const data = await response.data
   console.log(data)
   setLoading(false);
   setData(data);
     }catch (e){
       console.log(e);
       setData({});
       setError(true);
     }
    }fetchData()
    },[]);
const date = new Date(parseInt(data.updated));
const time = date.toDateString()
  return (
     <div className={classes.container}>
       {error ? (<p style={{fontSize:'30px', color:'red'}}>Error! Something went wrong</p>):
       <>
      <h1>COVID-19 STATISTICS</h1>
       <Cards cases={data.cases} deaths={data.deaths}
       recovered={data.recovered} loading={loading} time={time}/>
       <br/><br/>
       
     
       <Map/>
       </>}
     </div>
  );
}

export default App;
