import React, { useRef, useState, Suspense } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Html, Box, Sphere, useTexture, Environment, OrbitControls } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three'
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { LUTPass } from 'three-stdlib';



export default function ThreeBackground(p) {
  return (
    <Canvas style={{ position: "absolute", zIndex: "999" }}>
      <Stars />
    </Canvas>
  )
}


function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 5.5 }));

  useFrame((state, delta) => {
    const mouseX = (state.mouse.x * state.viewport.width) / 2;
    const mouseY = (state.mouse.y * state.viewport.height) / 2;

    ref.current.rotation.x = (mouseY - ref.current.position.y) * 0.005;
    ref.current.rotation.y = (mouseX - ref.current.position.x) * 0.005;

    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#B880FF" size={0.02} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};
