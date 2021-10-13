import React from 'react';
import './Country.css';
const Country = (props) => {
    const{svg}=props.country.flags;
    const{official}=props.country.name;
    const{capital,population,region}=props.country;


    return (
        <div className='country'>
            <img style={{width:'200px'}} src={svg} alt="" />
            <h1>Name: {official}</h1>
            <h3>Capital: {capital}</h3>
            <h4>Population: {population}</h4>
            <h4>Region: {region}</h4>
        </div>
    );
};

export default Country;