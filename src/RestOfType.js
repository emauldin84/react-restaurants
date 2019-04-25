import React from 'react';

function RestOfType (props) {
    return (
        <div>
            <h2>Restaurants by Type</h2>
            <ul>
                {
                    Object.keys(props.restaurants[props.type]).map((restaurant, i) => (
                        <li key={i} onClick={props.displayMenu}>{restaurant}</li>
                    ))
                }
            </ul>
        </div>


    )
}


export default RestOfType;