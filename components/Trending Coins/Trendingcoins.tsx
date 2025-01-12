"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import CryptoItem from "./CryptoItem";

export interface CryptoProps {
  ticker: string;
  title: string;
  logo: string;
  dailyChange: string;
}

export default function TrendingCoins() {
  const [cryptoData, setCryptoData] = useState<CryptoProps[]>([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const popularCryptos = response.data.coins.slice(0, 3);
        const transformedCryptoData: CryptoProps[] = popularCryptos.map((coin: any) => ({
          ticker: coin.item.symbol.toUpperCase(),
          title: coin.item.name,
          logo: coin.item.large,
          dailyChange: coin.item.data.price_change_percentage_24h.usd.toFixed(2),
        }));

        setCryptoData(transformedCryptoData);
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div className="lg:h-[225px] bg-white lg:ml-4 mt-4 rounded-lg px-8 pt-5">
      <div className="text-2xl font-semibold text-[#0F1629]">
        Popular Cryptocurrencies (24h)
      </div>
      <div className="mt-4">
        {cryptoData.map((crypto, index) => (
          <CryptoItem
            key={index}
            ticker={crypto.ticker}
            title={crypto.title}
            logo={crypto.logo}
            dailyChange={crypto.dailyChange}
          />
        ))}
      </div>
    </div>
  );
}
