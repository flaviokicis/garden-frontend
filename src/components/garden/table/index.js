
import React from 'react';
import FruitsRow from '../entities/fruits/fruits-row';
import './styles.css';
import {GiFruitTree, GiFlowerPot, GiSittingDog, GiParkBench} from 'react-icons/gi';

const TableRows = (props) => {
    return (
        <>
            <div className="tableContainer">
            <table>
            <tbody>
            <tr>
                <td className="sbItem fruitsCategory">
                    <GiFruitTree className="icon" size={60}/>
                    <h3>Fruits</h3>
                </td>
                <td className="gardenRow fruitsRow">
                    <FruitsRow listener={props.listener}/>
                </td>
            </tr>
            <tr>
                <td className="sbItem flowersCategory">
                    <GiFlowerPot className="icon" size={60}/>
                    <h3>Flowers</h3>
                </td>
                <td className="gardenRow flowersRoew"></td>
            </tr>
            <tr>
                <td className="sbItem animalsCategory">
                    <GiSittingDog className="icon" size={60}/>
                    <h3>Animals</h3>
                </td>
                <td className="gardenRow animalsRow"></td>
            </tr>
            <tr>
                <td className="sbItem decorationsCategory">
                    <GiParkBench className="icon" size={60}/>
                    <h3>Objects</h3>
                </td>
                <td className="gardenRow decorationsRow"></td>
            </tr>
            </tbody>
            </table>
            </div>
        </>
    );
};

export default TableRows;