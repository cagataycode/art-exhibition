import React from "react";
import P5Canvas from "./P5Canvas";
import flowFields from "../sketches/flowFields";
import gridSketch from "../sketches/gridSketch";
import simpleSketch from "../sketches/simpleSketch";

const Artworks = () => {
  return (
    <>
      <P5Canvas
        sketch={flowFields}
        position={[-15, 0, -4.9]}
        rotation={[0, 0, 0]}
      />
      <P5Canvas
        sketch={gridSketch}
        position={[0, 0, -4.9]}
        rotation={[0, 0, 0]}
      />
      <P5Canvas
        sketch={simpleSketch}
        position={[15, 0, -4.9]}
        rotation={[0, 0, 0]}
      />
      <P5Canvas
        sketch={flowFields}
        position={[-15, 0, 4.9]}
        rotation={[0, Math.PI, 0]}
      />
      <P5Canvas
        sketch={gridSketch}
        position={[0, 0, 4.9]}
        rotation={[0, Math.PI, 0]}
      />
      <P5Canvas
        sketch={simpleSketch}
        position={[15, 0, 4.9]}
        rotation={[0, Math.PI, 0]}
      />
    </>
  );
};

export default Artworks;
