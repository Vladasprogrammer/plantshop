import BestCard from "./BestCard";
import './componentsStyle/BestCardList.css';
import useFetch from "../hooks/useFetch";
import DataHandler from "../utils/DataHandler";


export default function BestCardList() {

  const { result: bestCards, loading, error } = useFetch({ url: 'https://gist.githubusercontent.com/Vladasprogrammer/5bcd78a58c458f53da6bc236608d3e88/raw/32096365df1a1621a2ddbed08090d7d5c6b42792/gistfile1.json', folder: 'BestSelling', apiImage: 'fileName' });
  
  return (
    <div className="best-card-list">
      <DataHandler loading={loading} error={error}>
        {
          bestCards.map((card) => (
            <BestCard
              key={card.id}
              imageSrc={card.imageSrc}
              title={card.title}
            />
          ))
        }
      </DataHandler>
    </div>
  )
}