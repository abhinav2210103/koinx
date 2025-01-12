import Image from "next/image";

type CryptoCardProps = {
  cryptoData: {
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

const CryptoCard = ({ cryptoData }: CryptoCardProps) => {
  return (
    <div className="lg:w-[300px] rounded-2xl p-5 border-2 my-2 mr-2">
      <div className="flex items-center space-x-2">
        <Image
          src={cryptoData.large}
          alt={cryptoData.name}
          width={24}
          height={24}
          className="rounded-full"
        />
        <span className="text-[16px] font-normal">{cryptoData.name}</span>
        <span
          className={`text-${
            cryptoData.data.price_change_percentage_24h.usd > 0
              ? "green"
              : "red"
          }-500 bg-${
            cryptoData.data.price_change_percentage_24h.usd > 0
              ? "#0AB27D"
              : "#FF0000"
          }/10 text-xs font-normal pr-10`}
        >
          {cryptoData.data.price_change_percentage_24h.usd.toFixed(2)}%
        </span>
      </div>
      <div className="text-xl text-[#171717] font-medium mt-2">
        {cryptoData.data.price}
      </div>
      <Image
        src={
          cryptoData && cryptoData.sparkline
            ? cryptoData.sparkline
            : "https://www.coingecko.com/coins/33566/sparkline.svg"
        }
        alt={cryptoData && cryptoData.name ? cryptoData.name : ""}
        width={300}
        height={80}
        className="w-full h-20"
      />
    </div>
  );
};

export default CryptoCard;
