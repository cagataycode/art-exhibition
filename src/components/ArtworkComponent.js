// ArtworkComponent.js
import React, { useRef, useEffect, useState } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { Texture } from "three";
import { useFrame } from "@react-three/fiber";

const ArtworkComponent = ({ position, sketch }) => {
  const meshRef = useRef();
  const [canvas, setCanvas] = useState(null);
  const textureRef = useRef(new Texture());

  const handleCanvasReady = (canvas) => {
    if (canvas) {
      setCanvas(canvas);
    }
  };

  useEffect(() => {
    if (canvas) {
      textureRef.current.image = canvas;
      textureRef.current.needsUpdate = true;
    }
  }, [canvas]);

  useFrame(() => {
    if (meshRef.current && textureRef.current) {
      textureRef.current.needsUpdate = true;
      meshRef.current.material.map = textureRef.current;
    }
  });

  return (
    <>
      <div style={{ display: "none" }}>
        <ReactP5Wrapper sketch={sketch} onReady={handleCanvasReady} />
      </div>
      <mesh position={position} ref={meshRef}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial map={textureRef.current} />
      </mesh>
    </>
  );
};

export default ArtworkComponent;
