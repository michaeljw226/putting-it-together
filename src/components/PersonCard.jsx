
import React, { useState } from 'react';

const PersonCard = (props) => {
    
    const { firstName, lastName, age, hairColor } = props;
    
    const [ ages , setAge ] = useState({
        ageVal: age
    });
    
    const ageHandler = () => {
        setAge({
            ageVal : ages.ageVal + 1
        })
    }

    return(
        
        <div>
            <h1 style={{color:"red"}}>{lastName}, {firstName}</h1>
            <p>Age: {ages.ageVal} </p>
            <p>Hair Color: {hairColor}</p>
            
            <button onClick={ageHandler}> Birthday Button for {firstName} {lastName} </button>
        </div>
    );
}
export default PersonCard;
