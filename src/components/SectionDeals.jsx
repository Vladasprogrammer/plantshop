import DealsCardList from "./DealsCardList";
import Title from "./Title";
import './componentsStyle/SectionDeals.css';

export default function SectionDeals() {

  return (
    <>
      <section className="wrapper section-deals">
        <Title text1='Ferntastic' text2='Deals' showLink={false}></Title>
        <DealsCardList filterType='deals' limit={4}/>
      </section>
    </>
  )
}