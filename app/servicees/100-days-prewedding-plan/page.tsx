'use client'

import React from 'react'
import Head from 'next/head'
import Hero from '../component/Hero'
import PainPoints from '../component/PainPoints'

import Features from '../component/Features'
import Timeline from '../component/Timeline'
import Testimonials from '../component/Testimonials'
import CTA from '../component/CTA'
import WhyChooseUs from '../component/WhyChoose'

const PreweddingTreatmentPlan = () => {
  return (
    <div className="bg-[#f4f7f0]">
      <Head>
        <title>100-Day Prewedding Wellness Plan | Ilaram Healthcare</title>
        <meta
          name="description"
          content="Feel your best before your big day. Our holistic 100-day prewedding plan includes personal care, fitness, skin, and nutrition experts."
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <PainPoints />
        <WhyChooseUs />
        <Features />
        <Timeline />
        <Testimonials />
        <CTA />
      </div>
    </div>
  )
}

export default PreweddingTreatmentPlan
