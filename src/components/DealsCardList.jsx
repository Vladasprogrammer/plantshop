import './componentsStyle/DealsCardList.css';
import { useProducts } from "../hooks/useProducts";
import PlantCard from "./PlantCard";
import DataHandler from "../utils/DataHandler";

export default function DealsCardList() {

  const { products, loading, error } = useProducts();

  const sortedProducts = products.sort((a, b) => b.discount - a.discount);

  const topDiscounted = sortedProducts.slice(0, 4);

  


  return (
    <div className='deals-card-list'>
      <DataHandler loading={loading} error={error}>
      {
        topDiscounted.map(product => (
          <PlantCard
          key={product.id}
          imageSrc={product.imageSrc}
          title={product.title}
          price={product.price}
          showDiscount={true}
          discount={product.discount}
          />
        ))
      }
      </DataHandler>
    </div>
  )
}