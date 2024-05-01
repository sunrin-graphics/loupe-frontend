import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

import { random } from 'maath';
import type { Group } from 'three';

export default function ThreeBackground() {
  return (
    <Canvas
      camera={{ type: 'orthographic' }}
      style={{ position: 'absolute', zIndex: '999' }}
    >
      <Stars />
    </Canvas>
  );
}

function Stars() {
  const ref = useRef<Group>(null);
  const [sphere] = useState(
    () =>
      new Float32Array(
        random.inSphere(new Float32Array(5000), { radius: 5.5 }),
      ),
  );

  useFrame((state, delta) => {
    if (!ref.current) return;

    const mouseX = (state.pointer.x * state.viewport.width) / 2;
    const mouseY = (state.pointer.y * state.viewport.height) / 2;

    ref.current.rotation.x = (mouseY - ref.current.position.y) * 0.005;
    ref.current.rotation.y = (mouseX - ref.current.position.x) * 0.005;

    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          opacity={0.5}
          color="#B880FF"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
