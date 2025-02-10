import { Question } from "@/utils/helper";
import React from "react";

const DisplayText = () => {
  return (
    <div className="flex justify-center items-center pt-20">
      <h3>{Question[0].list.data[0].title}</h3>
      <p>{Question[0].list.data[0].options[0]}</p>
    </div>
  );
};

export default DisplayText;
