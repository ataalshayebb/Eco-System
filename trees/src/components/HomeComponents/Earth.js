// "use client";

// import React, { useRef } from "react";
// import { useFrame, useLoader } from "@react-three/fiber";
// import { TextureLoader } from "three/src/loaders/TextureLoader";

// const Earth = () => {
//   const meshRef = useRef();
//   const [earthMap] = useLoader(TextureLoader, ["/images/earth-texture.png"]);

//   useFrame(() => {
//     meshRef.current.rotation.y += 0.002;
//   });

//   return (
//     <mesh ref={meshRef}>
//       <sphereGeometry args={[2.5, 32, 32]} />
//       <meshStandardMaterial map={earthMap} />
//     </mesh>
//   );
// };

// export default Earth;


"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Earth = () => {
  const meshRef = useRef();
  const texture = useTexture("/images/earth-texture.jpg");

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial map={texture} metalness={0} roughness={0.5} />
    </mesh>
  );
};

export default Earth;