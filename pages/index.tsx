import type { NextPage } from 'next'
import Collection from '../components/Collection'
import Faq from '../components/Faq'
import Header from '../components/Header'
import Roadmap from '../components/Roadmap'
import Hero from '../components/Hero'
import Synopsis from '../components/Synopsis'
import Team from '../components/Team'
import Joinus from '../components/Joinus'




const Home: NextPage = () => {
  return (
    <>
      <div className="bg-birunavbar">
      <Header/>
      <Hero/>
      <Synopsis/>
      <Roadmap/>
      <Collection/>
      <Faq/>
      <Team/>
      <Joinus/>

      </div>
      
    </>



  )
}

export default Home
