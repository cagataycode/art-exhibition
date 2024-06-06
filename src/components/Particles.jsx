import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = () => {
  const particleCount = 1000;
  const particlesRef = useRef();

  const particlePositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 80; // Spread particles wider
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 20; // Increase vertical spread
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 40; // Increase depth spread
  }

  useFrame(() => {
    const positions = particlesRef.current.geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 1] += 0.005; // Slow down the particles
      if (positions[i * 3 + 1] > 10) {
        positions[i * 3 + 1] = -10;
      }
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particlePositions}
          itemSize={3}
          count={particleCount}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.05} />
    </points>
  );
};

export default Particles;
