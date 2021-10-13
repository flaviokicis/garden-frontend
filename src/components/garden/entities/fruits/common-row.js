import React from 'react';
import CommonItem from './common-item';
import './row-styles.css';

const CommonRow = ({listener, items}) => {

    return (
        <>
        {
           items.map((item) => (
            <CommonItem key={"key-" + item.entityId} itemState={item} listener={listener} />
           ))
        }
        </>
    );
};

export default CommonRow;