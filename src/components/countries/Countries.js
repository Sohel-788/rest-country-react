import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countries.css';

const Countries = () => {
    const [countries,setCountris]=useState([]);
    useEffect(()=>{
      const url='https://restcountries.com/v3.1/all';
      fetch(url)
      .then(res=>res.json())
      .then(data=>setCountris(data))
    },[])
    return (
        <div>
            <h1>Hello from countries: {(countries.length)}</h1>
            <div className='container'>
            {
                countries.map(country=> <Country country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;