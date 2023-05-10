import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const ProgressCircle = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress < 250) {
        setProgress(progress + 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [progress]);

  return (
    <View>
      <Svg height="200" width="200">
        <Circle
          cx="100"
          cy="100"
          r="80"
          fill="black"
          stroke="black"
          strokeWidth="10"
        />
        <Circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="red"
          strokeWidth="10"
          strokeDasharray={`${(progress / 250) * 502} ${502}`}
          strokeDashoffset={251}
        />
      </Svg>
    </View>
  );
};

export default ProgressCircle;
