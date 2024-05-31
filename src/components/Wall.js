import React from "react";
import * as THREE from "three";

const Wall = ({ position, rotation }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[50, 5]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

export default Wall;
