"use client";
import { useState } from "react";

export default function Home() {
  const [play, setPlay] = useState<boolean>(false);

  return (
    <main className="min-h-screen antialiased flex flex-col items-center bg-amber-300">
      <h1 className="my-5 text-3xl font-bold text-gray-950">Space Shooter</h1>
      <div className="flex justify-center items-center">
        {play ? (
          <iframe src="/html/index.html" width="1080" height="620" />
        ) : (
          <button
            onClick={() => setPlay(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Play
          </button>
        )}
      </div>
    </main>
  );
}
