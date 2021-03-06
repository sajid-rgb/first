import React, { useState } from 'react';
import { useParams } from 'react-router';

const Details = (props) => {
    const [countries,setCountries] = useState(props.country);
    const {alpha3Code} = useParams();
    const  {name,languages,capital,flag,region,area,population,borders,nativeName,currencies,regionalBlocs} = countries.find(country => country.alpha3Code ===alpha3Code);
    const [visit,setVisit] =useState(false);
    const toVisit=()=>{
        setVisit(true);
    }
    let thankyou;
    if (visit){
        thankyou =<h1>May Allah fulfill your wish</h1>
    }
    return (
        <div className="" style={{backgroundColor:'black',paddingBottom:"20px"}}>
           
            <div className="card w-50 text-center mt-5 " style={{margin:'auto'}}>
               <img className="card-img-top " src={flag} style={{}}></img>
               <div className="card-header bg-secondary text-dark">
                   <h3 className="card-title"> {name}</h3>
                   <h5>{capital}</h5>
                   <h6>Region: {region}</h6>
               </div>
               <div className="card-body bg-success" styles={{color: 'green'}}>
                   <h6 className="card-text">
                      Language: {languages[0].name}
                   </h6>
                   <p>Area: {area}</p>
                   <p>Population: {population}</p>
                   <p>Native name: {nativeName}</p>
                   <p>Currency: {currencies[0].name} ({currencies[0].symbol})</p>
                   <p>Regional Blocs: {regionalBlocs[0].name} ({regionalBlocs[0].acronym})</p>
                   <p>
                       Borders:
                       {
                       borders.map(border=><span> {border} </span>)
                   }
                   </p>
                   <button className="btn btn-danger " onClick={toVisit}>Visit {name}</button>
               </div>
               {
                       thankyou
                   }
           </div> 

        </div>
    );
};

export default Details;