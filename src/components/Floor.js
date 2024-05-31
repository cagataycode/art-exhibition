import React from "react";
import * as THREE from "three";

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
      <planeGeometry args={[50, 10]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

export default Floor;
