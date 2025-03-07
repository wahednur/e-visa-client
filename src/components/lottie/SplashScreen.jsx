import React, { useEffect, useState } from "react";

import loadingAnimation from "./lottie/plane.json";
import Lottie from "lottie-react";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div className="splash-screen">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    );
  }

  return null;
};

export default SplashScreen;
