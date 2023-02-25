import React from 'react'

// import image
import NonAuth from '../../components/nonAuth'
import Herobanner1 from '../../components/herobanner1'
import CardPromotion from '../../components/cardPromotion'
import Herobanner2 from '../../components/herobanner2'
import Herobanner3 from '../../components/herobanner3'
import Herobanner4 from '../../components/herobanner4'
import HeroBanner5 from '../../components/herobanner5'
import Herobanner6 from '../../components/herobanner6'
import CardOffer from '../../components/cardOffer'
import Footer from '../../components/footer'

export default function Home() {

  return (
    <>
      <NonAuth />
      <Herobanner1 />
      <CardPromotion />
      <Herobanner2 />

      <div className="bg-stone-100 h-full">
        {/* herobanner3 */}
        <Herobanner3 />
        <Herobanner4 />
        <HeroBanner5 />
        <Herobanner6 />
      </div>

      <CardOffer />
      <Footer />
    </>
  )
}
