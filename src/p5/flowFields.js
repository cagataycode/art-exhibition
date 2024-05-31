import p5 from "p5";

const flowFields = (p) => {
  let particles = [];
  let colors = [];
  const num = 1000;
  const noiseScale = 0.01;
  const speed = 0.2;

  p.setup = () => {
    p.createCanvas(800, 800);
    for (let i = 0; i < num; i++) {
      particles.push(p.createVector(p.random(p.width), p.random(p.height)));
      colors.push(p.color(p.random(255), p.random(255), p.random(255)));
    }
  };

  p.draw = () => {
    p.background(0, 5);
    for (let i = 0; i < num; i++) {
      let pVector = particles[i];
      p.stroke(colors[i]);
      p.point(pVector.x, pVector.y);
      let n = p.noise(pVector.x * noiseScale, pVector.y * noiseScale);
      let a = p.TAU * n;
      pVector.x += p.cos(a) * speed;
      pVector.y += p.sin(a) * speed;
      if (!onScreen(pVector)) {
        pVector.x = p.random(p.width);
        pVector.y = p.random(p.height);
      }
    }
  };

  const onScreen = (v) => {
    return v.x >= 0 && v.x <= p.width && v.y >= 0 && v.y <= p.height;
  };
};

export default flowFields;
