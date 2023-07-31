import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../assets/Cooking.json";

const LoadingAnimation = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData,
      loop: true,
      autoplay: true,
    });

    return () => anim.destroy(); // Clean up animation on unmount
  }, []);

  return <div ref={animationContainer} />;
};

export default LoadingAnimation;
