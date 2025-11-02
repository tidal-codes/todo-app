import { Button } from "@chakra-ui/react";
import { RefreshCw } from "lucide-react";
import { Tooltip } from "@/shared/ui/Tooltip";
import { useState, useRef, useEffect } from "react";
import "./syncAnimation.css";
import { useSyncStore } from "@/app/store/syncStatus";
import { sync } from "@/app/sync/syncManager";

const Sync = () => {
  const [isRotating, setIsRotating] = useState(false);
  const { isLoading, error } = useSyncStore();
  useEffect(() => {
    console.log(error);
  }, [error]);
  const iconRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (isLoading) {
      setIsRotating(true);
    } else if (iconRef.current) {
      const icon = iconRef.current;
      const handleAnimationIteration = () => {
        setIsRotating(false);
        icon.removeEventListener(
          "animationiteration",
          handleAnimationIteration,
        );
      };
      icon.addEventListener("animationiteration", handleAnimationIteration);
    }
  }, [isLoading]);

  return (
    <Tooltip content="همگام سازی" showArrow>
      <Button
        variant="subtle"
        width="40px"
        height="40px"
        onClick={sync}
        disabled={isLoading}
      >
        <RefreshCw
          ref={iconRef}
          className={`sync-icon ${isRotating ? "rotating" : ""}`}
          style={{
            transition: "transform 0.3s ease-out",
          }}
        />
      </Button>
    </Tooltip>
  );
};

export default Sync;
