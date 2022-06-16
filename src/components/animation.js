import { useSpring } from "react-spring";

export const handLeft = {
  to: { translateX: 0, rotate: 200 },
  from: { translateX: -1000 },
  config: {
    duration: 0,
  },
};
export const handRight = {
  to: { translateX: 0, rotate: -20, scaleY: -1 },
  from: { translateX: 1000 },
  config: {
    duration: 0,
  },
};
export const headAnimation = {
  to: { translateY: 0 },
  from: { translateY: -200 },
  config: {
    duration: 0,
  },
};
export const antennaAnimation = {
  to: { translateY: 0 },
  from: { translateY: -200 },
  config: {
    duration: 0,
  },
};
export const torsAnimation = {
  to: { translateY: 0 },
  from: { translateY: 1000 },
  config: {
    duration: 0,
  },
};

export const useAnimation = () => {
  const [stylesLeft, animationLeft] = useSpring(() => handLeft, []);
  const [stylesRight, animationRight] = useSpring(() => handRight, []);
  const [stylesHead, animationHead] = useSpring(() => headAnimation, []);
  const [stylesAntenna, animationAntenna] = useSpring(
    () => antennaAnimation,
    []
  );
  const [stylesTors, animationTors] = useSpring(() => torsAnimation, []);

  const startAnimations = () => {
    animationLeft.start(handLeft);
    animationRight.start(handRight);
    animationHead.start(headAnimation);
    animationAntenna.start(animationAntenna);
    animationTors.start(torsAnimation);
  };

  return {
    stylesLeft,
    stylesRight,
    stylesHead,
    stylesAntenna,
    stylesTors,
    startAnimations,
  };
};
