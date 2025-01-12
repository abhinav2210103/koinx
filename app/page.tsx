import Image from "next/image"
import Navbar from "@/components/Navbar";
import CoinDashboard from "./coindashboard/page";

export default function Home() {
  return (
  <>
  <Navbar/>
  <CoinDashboard/>
  </>
  );
}
