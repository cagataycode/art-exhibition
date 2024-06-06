const simpleSketch = (p) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(0);
    p.fill("red");
    p.ellipse(p.width / 2, p.height / 2, 50, 50);
  };
};

export default simpleSketch;
