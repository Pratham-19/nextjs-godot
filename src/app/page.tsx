"use client";
import { useEffect, useRef } from "react";
import ReactGodot from "react-godot-new";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/html/index.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="bg-yellow-700">
      <h1>Home</h1>
      <p>Welcome to the home page.</p>
      <iframe src="/html/index.html" width="1080" height="620" />
      {/* <iframe src="http://localhost:8000" width="1280" height="720" /> */}
    </main>
  );
}
