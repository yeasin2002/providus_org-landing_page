import { useEffect, useState } from "react";

export const useInteractionTracker = () => {
  const [interactionCount, setInteractionCount] = useState(0);

  useEffect(() => {
    const handleInteraction = () => {
      setInteractionCount((prev) => prev + 1);
    };

    // Track clicks, typing, mouse movement
    document.addEventListener("click", handleInteraction);
    document.addEventListener("keydown", handleInteraction);
    document.addEventListener("mousemove", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
      document.removeEventListener("mousemove", handleInteraction);
    };
  }, []);

  return interactionCount;
};
