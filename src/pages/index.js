import Image from "next/image";
import { Inter } from "next/font/google";
import Contact from "@/components/contact/contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Contact />
    </main>
  );
}
