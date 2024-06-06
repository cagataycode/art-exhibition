import { useEffect } from "react";
import p5 from "p5";

const P5Wrapper = ({ sketch, onUpdateTexture }) => {
  useEffect(() => {
    console.log("Initializing p5.js sketch");

    const sketchWithCanvas = (p) => {
      sketch(p);

      const originalSetup = p.setup;
      const originalDraw = p.draw;

      p.setup = () => {
        originalSetup();
        console.log("Canvas created in setup");
        onUpdateTexture(p.canvas);
      };

      p.draw = () => {
        originalDraw();
        onUpdateTexture(p.canvas); // No logging here to avoid frequent logs
      };
    };

    const p5Instance = new p5(sketchWithCanvas);
    console.log("p5 instance created");

    return () => {
      p5Instance.remove();
    };
  }, [sketch, onUpdateTexture]);

  return null;
};

export default P5Wrapper;
