import React from 'react';
import Sidebar from './sidebar';
import './styles.css';
import TableRows from './table';

const GardenContainer = (props) => {
    return (
        <>
            <div className="gardenContainer">
                <div className="firstFrame">
                <Sidebar nickname={props.nickname}/>
                    <div className="grassWrapper">
                        <div className="titleWrapper">
                            <h3 style={{ fontSize: '2.5rem' }}>Our Little Garden</h3>
                        </div>
                    </div>
                </div>
                <div className="tableOverlay">
                    <TableRows 
                    listener={props.listener}
                    fruits={props.fruits}
                    flowers={props.flowers}
                    animals={props.animals}
                    decorations={props.decorations}
                    />
                </div>
            </div>
        </>
    );
};

export default GardenContainer;