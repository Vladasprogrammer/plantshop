import './componentsStyle/PlantCardsList.css';
import PlantCard from './PlantCard';
import { useProducts } from '../hooks/useProducts';
import DataHandler from '../utils/DataHandler';


export default function PlantCardsList({ filterType, limit = 4 }) {

  const { products, loading, error } = useProducts();

  const getFilteredProducts = products => {

    let filtered = products;

    if (filterType === 'hot') {
      filtered = products.filter(plant => plant.rating === 5);
    } else if (filterType === 'deals') {
      filtered = products.sort((a, b) => b.discount - a.discount);
    } else if (filterType === 'price-high') {
      filtered = products.sort((a, b) => b.price - a.price);
    } else if (filterType === 'price-low') {
      filtered = products.sort((a, b) => a.price - b.price);
    } else if (filterType === 'most-popular') {
      filtered = products.sort((a, b) => b.rating - a.rating);
    }

    return limit ? filtered.slice(0, limit) : filtered;
  };

  const filterProduct = getFilteredProducts(products);

  return (
    <div className='plant-cards-list'>
      <DataHandler loading={loading} error={error}>
        {
          filterProduct.map(plant => (
            <PlantCard
              plantId={plant.id}
              key={plant.id}
              imageSrc={plant.imageSrc}
              title={plant.title}
              price={plant.price}
              showDiscount={filterType === 'deals'}
              discount={plant.discount}
            />
          ))
        }
      </DataHandler>
    </div>
  )
}