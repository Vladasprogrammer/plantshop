import PlantCardsList from "./PlantCardsList";
import Title from "./Title";
import './componentsStyle/SectionDeals.css';

export default function SectionDeals() {

  return (
    <>
      <section className="wrapper section-deals">
        <Title text1='Ferntastic' text2='Deals' showLink={false}></Title>
        <PlantCardsList filterType='deals' limit={4}/>
      </section>
    </>
  )
}