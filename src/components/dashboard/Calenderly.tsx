"use client";
import { useState, useEffect } from "react";

const Calanderly = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(new URLSearchParams(window.location.search).get("search") || "");
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <p className="text-xl text-gray-600 mb-8">Calendly</p>
      <div
        className="calendly-inline-widget w-full sm:w-[500px] h-[650px] border rounded-lg shadow-lg"
        data-url="https://calendly.com/akashbish9e/30min"
      ></div>
    </div>
  );
};

export default Calanderly;
