// src/components/Hallway.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import "../index.css";
import Floor from "./Floor";
import Wall from "./Wall";
import CameraControls from "./CameraControls";

const Hallway = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 10] }} style={{ background: "black" }}>
        <CameraControls />
        <ambientLight intensity={1.0} />
        <pointLight position={[10, 10, 10]} />
        <Floor />
        <Wall position={[0, 0, -5]} />
        <Wall position={[0, 0, 5]} rotation={[0, Math.PI, 0]} />
        <Wall position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      </Canvas>
    </div>
  );
};

export default Hallway;
