import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    if (groupRef.current && groupRef.current.rotation)
      if (!isMobile) {
        easing.dampE(
          groupRef.current.rotation,
          [-state.pointer.y / 3, -state.pointer.x, 0],
          0.25,
          delta
        );
      }
  });

  return (
    <group ref={groupRef} scale={1.0}>
      {children}
    </group>
  );
};

export default HeroCamera;