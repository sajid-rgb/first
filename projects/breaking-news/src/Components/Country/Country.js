import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'
const Country = (props) => {
    const country = props.country;
    const {name,flag,capital,alpha3Code}= country;
    return (
         <section className='country-section ' >
            <div className="card w-75  mt-5 ">
            <img className="card-img-top w-100" src={flag} style={{height:'200px'}}/>
            <div className="card-header text-center">
                <h3 className="card-title text-center">
                     {name}
                </h3>
                <h6>Capital:{capital}</h6>
                <Link className="btn btn-danger" to={"/Details/"+alpha3Code}>
                    Details
                </Link>
            </div>
            
        </div>
         </section>
    );
};

export default Country;