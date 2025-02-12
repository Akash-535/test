import React, { Suspense } from "react";
import Dashboard from "./[slug]/page";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
};

export default page;
