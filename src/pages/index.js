import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/layout/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <NavBar />
    </main>
  );
}
