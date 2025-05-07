// 100-days-prewedding-plan/page.tsx
'use client'

import React from 'react'
import Hero from '../component/Hero'
import PainPoints from '../component/PainPoints'
import WhyChooseUs from '../component/WhyChoose'
import Features from '../component/Features'
import Timeline from '../component/Timeline'
import Testimonials from '../component/Testimonials'
import CTA from '../component/CTA'


const  PreweddingTreatmentPlan= () => {
  return (
    <div>
        

   <Hero />

      <PainPoints />
      <WhyChooseUs/>
      <Features />
      <Timeline />
      <Testimonials />
      <CTA />

    </div>
  )
}

export default  PreweddingTreatmentPlan;



