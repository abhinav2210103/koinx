import Path from '@/components/Path'
import React from 'react'
import CryptoGraph from '@/components/CryptoGraph'
import SwitchPanel from '@/components/Switchpanel'
import StatsOverview from '@/components/Statsoverview'
import SentimentAnalysis from '@/components/Sentimentanalysis'
import AboutSection from '@/components/Aboutsection'

function Dashboard() {
  return (
    <>
    <div className="h-full w-screen bg-slate-200/40">
    <Path/>

      <div className="w-screen lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">
          <CryptoGraph/>
          <SwitchPanel/>
          <StatsOverview/>
          <SentimentAnalysis/>
          <AboutSection/>
        </div>
        <div className="lg:w-4/12 lg:mr-14 mx-4">
          
        </div>
        
      </div>
       
    </div>
    </>
  )
}

export default Dashboard

