import p5 from "p5";

export const P5Sketch = (p, sketch, canvas) => {
  new p5((p) => {
    p.setup = () => {
      const renderer = p.createCanvas(canvas.width, canvas.height);
      renderer.parent(canvas);
      sketch(p);
    };
  }, canvas);
};
