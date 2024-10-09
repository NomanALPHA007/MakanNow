import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-8">
      <h2 className="text-4xl font-bold mb-6 text-center drop-shadow-lg">
        Hello Foodi People!
      </h2>
      <Button className="bg-white text-purple-700 px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 hover:text-white transition-all duration-300 ease-in-out">
        Get Now...
      </Button>
    </div>
  );
}
