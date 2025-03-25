import { Suspense } from "react";
import Home from "@/components/pages/Home";
import Loader from "@/components/shared/loader/Loader";

const HomePage = () => {
  return (
    <Suspense fallback={null}>
      <Home />
      <Loader />
    </Suspense>
  );
};

export default HomePage;
