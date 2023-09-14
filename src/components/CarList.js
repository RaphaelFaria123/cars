import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
    const cars = useSelector(({cars: {data, searchTerm}}) => {
        return data.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    });

    const name = useSelector(state => state.form.name);

    const dispatch = useDispatch();

    const handleCarDelete = (id) => {
        dispatch(removeCar(id));
    }

    const renderedCars = cars.map(car => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
        console.log(bold);

        return <div className={`panel ${bold && 'bold'}`} key={car.id}>
            <p>{car.name} - R {car.cost}</p>
            <button
                className="button is-danger"
                onClick={() => handleCarDelete(car.id)}>Delete</button>
        </div>
    });

    return <div className='car-list'>
        {renderedCars}
        <hr />
    </div>

}

export default CarList;