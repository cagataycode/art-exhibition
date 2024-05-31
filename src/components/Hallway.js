import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import flowFields from "../p5/flowFields";
import gridSketch from "../p5/gridSketch";
import simpleSketch from "../p5/simpleSketch";
import floorTexture from "../textures/floor.jpg";
import wallTexture from "../textures/wall.jpg";
import Particles from "./Particles";
import ArtworkComponent from "./ArtworkComponent";
import "../index.css";

const Floor = () => {
  const texture = useTexture(floorTexture);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
      <planeGeometry args={[50, 10]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Wall = ({ position, rotation }) => {
  const texture = useTexture(wallTexture);
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[50, 5]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Hallway = () => {
  return (
    <div className="canvas-container">
      <Canvas
        colormanagement="true"
        camera={{ position: [0, 0, 10] }}
        style={{ background: "black" }}
      >
        <OrbitControls />
        <ambientLight intensity={1.0} />
        <pointLight position={[10, 10, 10]} />

        <Floor />
        <Wall position={[0, 0, -5]} />
        <Wall position={[0, 0, 5]} rotation={[0, Math.PI, 0]} />

        <ArtworkComponent position={[-10, 0, -4.9]} sketch={flowFields} />
        <ArtworkComponent position={[0, 0, -4.9]} sketch={gridSketch} />
        <ArtworkComponent position={[10, 0, -4.9]} sketch={simpleSketch} />

        <Particles />
      </Canvas>
    </div>
  );
};

export default Hallway;
