import './componentsStyle/SectionHot.css';
import PlantCardsList from './PlantCardsList';
import Title from './Title';


export default function SectionHot() {

  
  return (
    <section className='section-hot light-bg'>
      <div className='wrapper'>
        <Title text1='Hottest' text2='Plants' showLink={true}/>
        <PlantCardsList filterType='hot' limit={8}/>
      </div>
    </section>
  )
}