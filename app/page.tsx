import Image from "next/image"
import Dashboard from "./dashboard/page";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
  <>
  <Navbar/>
  <Dashboard/>
  </>
  );
}
