import React, { useState, useEffect } from 'react';
import {
    GiShinyApple,
    GiStrawberry
} from 'react-icons/gi';


const Fruit = (props) => {
    const [fruitState, setFruitState] = useState(props.fruitState);
    useEffect(() => {
        //
    }, [fruitState]);

    const updateParent = props.listener;

    updateParent("Hello world");


    return (
        <div>
        {
         (fruitState.name === 'APPLE' ?
         <GiShinyApple className="item" size={55} style={{color: 'darkred'}}>
             </GiShinyApple>
         :
         <GiStrawberry className="item" size={55} style={{color: 'darkred'}}/>
         )
        }
        </div>
    );
};

export default Fruit;