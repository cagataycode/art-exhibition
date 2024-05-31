// src/components/Hallway.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import gridSketch from "../p5/gridSketch";
import flowFields from "../p5/flowFields";
import Particles from "./Particles";
import "../index.css";
import Floor from "./Floor";
import Wall from "./Wall";
import CameraControls from "./CameraControls";

const Hallway = () => {
  return (
    <div className="canvas-container">
      <Canvas
        colorManagement="true"
        camera={{ position: [0, 0, 10] }}
        style={{ background: "black" }}
      >
        <CameraControls />
        <ambientLight intensity={1.0} />
        <pointLight position={[10, 10, 10]} />
        <Floor />
        <Wall position={[0, 0, -5]} />
        <Wall position={[0, 0, 5]} rotation={[0, Math.PI, 0]} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default Hallway;
