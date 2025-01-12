"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import CryptoCard from "./CryptoCard";

type CryptoData = {
  item: {
    large: string;
    name: string;
    sparkline: string;
    data: {
      price: number;
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
};

export default function CoinsSuggestion() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const baseUrl: string | undefined = process.env.NEXT_PUBLIC_CRYPTO_API;

  useEffect(() => {
    const endpoint = `${baseUrl}/search/trending`;
    axios
      .get(endpoint)
      .then((response) => {
        setCryptoData(response.data.coins);
        console.log(response.data.coins);
      })
     
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [baseUrl]);

  return (
    <div className="bg-white h-max mt-10 lg:p-14 p-8">
      <div>
        <div className="text-[#202020] text-2xl font-semibold">
          You May Also Like
        </div>

        <div className="mt-4 flex justify-between overflow-x-scroll overflow-auto">
          {cryptoData.slice(0, 5).map((crypto, index) => (
            <CryptoCard key={index} cryptoData={crypto.item} />
          ))}
        </div>

        <div className="text-[#202020] text-2xl font-semibold mt-6">
          Trending Coins
        </div>
        <div className="mt-4 flex justify-between overflow-x-auto">
          {cryptoData.slice(1, 6).map((crypto, index) => (
            <CryptoCard key={index} cryptoData={crypto.item} />
          ))}
        </div>
      </div>
    </div>
  );
}
