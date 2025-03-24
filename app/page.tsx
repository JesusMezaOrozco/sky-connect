import { Suspense } from "react";
import Home from "@/components/pages/Home";

const HomePage = () => {
  return (
    <Suspense fallback={null}>
      <Home />
    </Suspense>
  );
};

export default HomePage;
