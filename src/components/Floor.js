import React from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

const Floor = () => {
  const texture = useLoader(THREE.TextureLoader, "/textures/floor.jpg");

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
      <planeGeometry args={[50, 10]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Floor;
