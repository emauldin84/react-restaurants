import React from 'react';


function Types (props) {
    // console.log (props.types)

    return (
        <div>
            <h2>Types of Restaurants</h2>
            <ul>
                {
                    Object.keys(props.types).map((type, i) => (
                    <li key={i} onClick={props.displayRestaurants}>{type}</li>)
                    )
                }
            </ul>
        </div>
    )    
}



export default Types;