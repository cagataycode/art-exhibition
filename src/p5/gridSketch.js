const gridSketch = (p) => {
  let grid = [];

  p.setup = () => {
    p.createCanvas(512, 512);
    p.noLoop();
    let count = 40;
    let maxColors = p.int(p.random(2, 6));
    let palette = p
      .shuffle([
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ffff00",
        "#ff00ff",
        "#00ffff",
      ])
      .slice(0, maxColors);
    let background = p.color(230, 230, 230);
    let characters = "=.".split("");
    let frequency = p.random(0.75, 1.25);
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        let u = x / (count - 1);
        let v = y / (count - 1);
        let [dx, dy] = randomSphere(0.05);
        u += dx;
        v += dy;
        let n = p.noise(u * frequency, v * frequency);
        let size = n * 0.5 + 0.5;
        let baseSize = p.width * 0.05;
        let sizeOffset = p.width * 0.05;
        grid.push({
          color: p.random(palette),
          size: p.abs(baseSize * size + p.randomGaussian() * sizeOffset),
          rotation: n * p.PI * 0.5,
          character: p.random(characters),
          position: [u, v],
        });
      }
    }
    p.background(background);
  };

  p.draw = () => {
    let margin = p.width * 0.15;
    grid.forEach(({ position, rotation, size, color, character }) => {
      let [u, v] = position;
      let x = p.lerp(margin, p.width - margin, u);
      let y = p.lerp(margin, p.width - margin, v);
      p.fill(color);
      p.textAlign(p.CENTER, p.CENTER);
      p.textSize(size);
      p.push();
      p.translate(x, y);
      p.rotate(rotation);
      p.text(character, 0, 0);
      p.pop();
    });
  };

  function randomSphere(scale = 1) {
    let angle = p.random(p.TWO_PI);
    let radius = p.random(scale);
    return [p.cos(angle) * radius, p.sin(angle) * radius];
  }
};

export default gridSketch;
