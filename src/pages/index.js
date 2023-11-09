import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
import HomePage from "@/components/home/HomePage";

export default function Home() {
  return (
    <main className="bg-white">
      <NavBar />
      <HomePage />
    </main>
  );
}
