import BestCardList from './BestCardList'
import Title from './Title'

export default function SectionBest() {

  return (
    <section className='wrapper section-best'>
      <Title text1='Best' text2='Selling' showLink={true}/>
      <BestCardList />
      
    </section>
  )
}