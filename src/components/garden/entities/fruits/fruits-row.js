import React, { useState } from 'react';
import Fruit from './fruit';
import './row-styles.css';

const FruitsRow = (props) => {

    const [fruits, setFruits] = useState([{ 
        name: 'APPLE', entityType: 'FRUIT',
        entityId: (Math.trunc((Math.random() * 120) + 1)), harvestable: true,
        waterable: false
    }]);

    return (
        <>
        {
           fruits.map((fruit) => (
            <Fruit key={fruit.entityId} fruitState={fruit} listener={props.listener} />
           ))
        }
        </>
    );
};

export default FruitsRow;