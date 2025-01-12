import Image from "next/image";
import { CryptoProps } from "./Trendingcoins";  

const CryptoItem = ({ ticker, title, logo, dailyChange }: CryptoProps) => {
  const hasPositiveChange = parseFloat(dailyChange) >= 0;

  return (
    <div className="flex my-2 justify-between text-center py-1">
      <div className="flex pt-1">
        <div>
          <Image src={logo} className="w-6 rounded-full" alt="Crypto logo" width={24} height={24}/>
        </div>
        <div className="text-[#0F1629] ml-1 ">
          {title} ({ticker})
        </div>
      </div>
      <div
        className={`flex items-center justify-center rounded-lg p-2 h-8 ml-10 ${
          hasPositiveChange ? "bg-green-300/20" : "bg-red-300/20"
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          className={`w-4 fill-current ${
            hasPositiveChange ? "text-green-600" : "text-red-600"
          }`}
          style={{ transform: hasPositiveChange ? "" : "rotate(180deg)" }}
        >
          <polygon points="0,100 50,0 100,100" />
        </svg>
        <span
          className={`ml-2 text-sm font-bold ${
            hasPositiveChange ? "text-green-600" : "text-red-600"
          }`}
        >
          {dailyChange}%
        </span>
      </div>
    </div>
  );
};

export default CryptoItem;
