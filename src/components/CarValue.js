import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarValue() {
    const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
        var costs = data.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return costs.reduce((total, car) => total + car.cost, 0);
    });


    return <div className="car-value">
        Total Cost: ${totalCost}
    </div>

}

export default CarValue;