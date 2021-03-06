import Country from '../Country/Country';
import './Newses.css'
const Newses = (props) => {
    const country = props.country;
    return (
       <div className="main">
            
            {
                country.map(sCountry=> <Country country={sCountry}></Country>)}
        
       </div>
    );
};

export default Newses;