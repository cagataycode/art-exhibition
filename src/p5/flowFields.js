const flowFields = (p) => {
  let particles = [];
  let colors = [];
  const num = 1000;
  const noiseScale = 0.01;
  const speed = 0.2;

  p.setup = () => {
    console.log("flowFields setup");
    p.createCanvas(800, 800);
    for (let i = 0; i < num; i++) {
      particles.push(p.createVector(p.random(p.width), p.random(p.height)));
      colors.push(p.color(p.random(255), p.random(255), p.random(255)));
    }
  };

  p.draw = () => {
    if (particles.length < 2) {
      console.log("flowFields draw");
    }
    p.background(0, 5);
    for (let i = 0; i < num; i++) {
      let particle = particles[i];
      p.stroke(colors[i]);
      p.point(particle.x, particle.y);
      let n = p.noise(particle.x * noiseScale, particle.y * noiseScale);
      let a = p.TAU * n;
      particle.x += p.cos(a) * speed;
      particle.y += p.sin(a) * speed;
      if (!onScreen(particle)) {
        particle.x = p.random(p.width);
        particle.y = p.random(p.height);
      }
    }
  };

  function onScreen(v) {
    return v.x >= 0 && v.x <= p.width && v.y >= 0 && v.y <= p.height;
  }
};

export default flowFields;
