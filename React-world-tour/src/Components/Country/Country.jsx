import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    // console.log(country)

const {flags,name ,area,population} = country ;


const [visit,setVisit] = useState(false);

const handleVisit = () =>{

    setVisit(!visit)

}

    return (
        <div className="box">
            <img src={flags.png} alt="" />
<h1>Name :{name.common} </h1>
<h4>Area : {area}</h4>
<p>Population : {population}</p>

<button onClick={handleVisit}><span style={{color:visit ? 'red' : 'black'}}>{visit ? 'Visited' : 'Visit'}</span> </button>

        </div>
    );
};

export default Country;