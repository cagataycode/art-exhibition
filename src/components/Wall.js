import React from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

const Wall = ({ position, rotation }) => {
  const texture = useLoader(THREE.TextureLoader, "/textures/wall.jpg");

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[50, 5]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Wall;
