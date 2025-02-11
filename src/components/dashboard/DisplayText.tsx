import { Question } from "@/utils/helper";
import React from "react";

const DisplayText = () => {
  return (
    <div className="text-center pt-20">
      <p className="text-2xl font-bold">
        Displayed text from array without any method
      </p>
      <p className="pt-6 text-lg font-medium">
        {Question[0].list.data[0].title} {Question[0].list.data[0].options[0]}
      </p>
    </div>
  );
};

export default DisplayText;
