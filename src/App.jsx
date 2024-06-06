import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import P5Wrapper from "./components/P5Wrapper";
import Hallway from "./components/Hallway";
import simpleSketch from "./p5/simpleSketch";
import gridSketch from "./p5/gridSketch";
import flowFields from "./p5/flowFields";
import * as THREE from "three";

const P5Mesh = ({ sketch, position, rotation, size }) => {
  const texture = useRef(new THREE.CanvasTexture());
  const meshRef = useRef();

  const updateTexture = (canvas) => {
    if (canvas) {
      texture.current.image = canvas;
      texture.current.needsUpdate = true;
    }
  };

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.material.map = texture.current;
      meshRef.current.material.needsUpdate = true;
    }
  });

  return (
    <>
      <mesh position={position} rotation={rotation} ref={meshRef}>
        <planeGeometry args={size} />
        <meshBasicMaterial map={texture.current} side={THREE.DoubleSide} />
      </mesh>
      <P5Wrapper sketch={sketch} onUpdateTexture={updateTexture} />
    </>
  );
};

function App() {
  return (
    <Canvas
      camera={{ position: [-20, 0, 2], fov: 75 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <color attach="background" args={["#000000"]} />
      <Hallway />
      {/* Artworks on the left wall */}
      <P5Mesh
        sketch={simpleSketch}
        position={[0, 0, -4.9]}
        rotation={[0, Math.PI, 0]}
        size={[4, 4]}
      />
      <P5Mesh
        sketch={gridSketch}
        position={[5, 0, -4.9]}
        rotation={[0, Math.PI, 0]}
        size={[4, 4]}
      />
      <P5Mesh
        sketch={flowFields}
        position={[10, 0, -4.9]}
        rotation={[0, Math.PI, 0]}
        size={[4, 4]}
      />
      {/* Artworks on the right wall */}
      <P5Mesh
        sketch={simpleSketch}
        position={[0, 0, 4.9]}
        rotation={[0, Math.PI, 0]}
        size={[4, 4]}
      />
      <P5Mesh
        sketch={gridSketch}
        position={[5, 0, 4.9]}
        rotation={[0, Math.PI, 0]}
        size={[4, 4]}
      />
      <P5Mesh
        sketch={flowFields}
        position={[10, 0, 4.9]}
        rotation={[0, Math.PI, 0]}
        size={[4, 4]}
      />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
