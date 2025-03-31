import './componentsStyle/HotCardList.css';
// import useFetch from '../hooks/useFetch';
import PlantCard from './PlantCard';
import { useProducts } from '../hooks/useProducts';
import DataHandler from '../utils/DataHandler';

export default function HotCardList() {

  // const { result: products, loading, error } = useFetch({ url: 'https://gist.githubusercontent.com/Vladasprogrammer/11d1483eb7b550df5b861e4f577edf25/raw/50280a1923e6865ea54e106c72cc38ed3fd815ea/gistfile1.txt', folder: 'PlantsData', apiImage: 'image' });
  const { products, loading, error } = useProducts();

  const filterProduct = products.filter(plant => plant.rating === 5)

  return (
    <div className='hot-card-list'>
      <DataHandler loading={loading} error={error}>
        {
          filterProduct.map(plant => (
            <PlantCard
              key={plant.id}
              imageSrc={plant.imageSrc}
              title={plant.title}
              price={plant.price}
              showDiscount={false}
              discount={plant.discount}
            />
          ))
        }
      </DataHandler>
    </div>
  )
}