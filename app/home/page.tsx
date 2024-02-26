import Joke from "@/components/Server-Components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Joke />
    </main>
  );
}
