import './componentsStyle/TestimonialsCardList.css';
import useFetch from "../hooks/useFetch";
import SyncLoader from "react-spinners/SyncLoader";
import TestimonialsCard from './TestimonialsCard';


export default function TestimonialsCardList() {

  const { result: testimonials, loading, error } = useFetch({ url: 'https://gist.githubusercontent.com/Vladasprogrammer/2c00534cd709efe19f5009e2352f5987/raw/96d6e0ae69a38ee4a998240b04da6c9db398caa2/gistfile1.txt', folder: 'Clients', apiImage: 'img' });

  if (loading) {
    return (
      <div className="testimonials-card-list">
        <SyncLoader color="#50806B" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="testimonials-card-list">
        error: {error}
      </div>
    )
  }
  console.log(testimonials);
  return (
    <div className="testimonials-card-list">
      {testimonials.map(card => (
        <TestimonialsCard 
        key={card.id}
        imageSrc={card.imageSrc}
        name={card.name}
        text={card.text}
        rating={card.rating}
        />
      ))}
    </div>
  )
}