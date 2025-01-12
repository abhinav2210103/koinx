import Path from '@/components/Path'
import React from 'react'
import CryptoGraph from '@/components/CryptoGraph'
import SwitchPanel from '@/components/Switchpanel'
import StatsOverview from '@/components/Statsoverview'
import SentimentAnalysis from '@/components/Sentimentanalysis'
import AboutSection from '@/components/Aboutsection'
import TokenomicsSection from '@/components/Tokenomicssection'
import TeamSection from '@/components/Team Section/Teamsection'
import Promo from '@/components/Promo'
import TrendingCoins from '@/components/Trending Coins/Trendingcoins'
import CoinsSuggestion from '@/components/Coins Suggestion/CoinsSuggestion'

export default function CoinDashboard() {
  return (
    <>
    <div className="h-full w-screen bg-slate-200/40">
    <Path/>
    <div className="w-screen lg:flex">
    <div className="lg:w-[65%] lg:ml-14 mx-4">
          <CryptoGraph/>
          <SwitchPanel/>
          <StatsOverview/>
          <SentimentAnalysis/>
          <AboutSection/>
          <TokenomicsSection/>
          <TeamSection/>
        </div>
        <div className="lg:w-[35%] mr-7 ml-4">
        <Promo/>
        <TrendingCoins/>
        </div>
      </div>
      <CoinsSuggestion/>
    </div>
    </>
  )
}


