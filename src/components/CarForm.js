import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCar, changeName, changeCost } from '../store';

function CarForm() {

    const { name, cost } = useSelector(state => state.form);

    const dispatch = useDispatch();

    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value));
    }

    const handleCostChange = (e) => {
        const carCost = parseInt(e.target.value) || 0;
        dispatch(changeCost(carCost));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCar({ name, cost }));
    }

    return <div className="car-form panel">
        <h4 className="subtitle is-3">Add car</h4>
        <form>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input className="input is-expanded" type="text" onChange={handleNameChange} value={name} />
                </div>
                <div className="field">
                    <label className="label">Cost</label>
                    <input className="input is-expanded" type="number" onChange={handleCostChange} value={cost || ""} />
                </div>
                <div className="field">
                    <button className="button is-link" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </form>
    </div>;

}

export default CarForm;