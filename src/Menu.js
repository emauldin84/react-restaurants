import React from 'react';

function Menu (props) {
    return (
        <div>
            <h2>Menu</h2>
            <ul>
                {
                    props.restaurant ? props.restaurants[props.type][props.restaurant].map(
                        (menu, i) => (
                            <li key={i}>{menu}</li>
                        )
                    ) : <p>Select a restaurant</p>
                }
            </ul>

        </div>


    )
}





export default Menu;