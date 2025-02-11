"use client";
import { InlineWidget } from "react-calendly";

const Calanderly = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <p className="text-xl text-gray-600 mb-8">Calendly</p>
      <InlineWidget
        url="https://calendly.com/akashbish9e/30min"
        styles={{
          height: "1000px",
          width: "1000px",
        }}
        pageSettings={{
          hideEventTypeDetails: true,
          hideLandingPageDetails: false,
        }}
      />
    </div>
  );
};

export default Calanderly;
