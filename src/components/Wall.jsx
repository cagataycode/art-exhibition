import React from "react";
import { DoubleSide } from "three";

const Wall = ({ position, rotation }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[50, 5]} />
      <meshStandardMaterial color="green" side={DoubleSide} />
    </mesh>
  );
};

export default Wall;
