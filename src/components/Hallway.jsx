import React from "react";
import Floor from "./Floor";
import Wall from "./Wall";
import Particles from "./Particles";

const Hallway = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
      <spotLight position={[10, -10, 10]} angle={0.15} penumbra={1} />
      <Floor />
      {/* Left Wall */}
      <Wall position={[0, 0, 5]} rotation={[0, Math.PI, 0]} />
      {/* Right Wall */}
      <Wall position={[0, 0, -5]} rotation={[0, -Math.PI, 0]} />
      <Particles />
    </>
  );
};

export default Hallway;
