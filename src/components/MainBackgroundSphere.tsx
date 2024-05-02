import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, useTexture } from '@react-three/drei';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/three';
import { PointLight } from 'three';

export default function MainBackgroundSphere() {
  return (
    <MaibLayout>
      <Canvas
        camera={{ type: 'orthographic' }}
        gl={{ antialias: true }}
        shadows
        style={{ width: '100%', height: '100%', zIndex: '99' }}
      >
        <Light />
        <Environment preset="city" />
        <SphereMesh />
      </Canvas>
    </MaibLayout>
  );
}

function Light() {
  const lightRef = useRef<PointLight>(null);
  const { pointer } = useThree();
  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x = pointer.x * 2;
      lightRef.current.position.y = pointer.y * 2;
    }
  });
  return (
    <>
      <pointLight
        ref={lightRef}
        intensity={60}
        position={[3, 0, 1]}
        distance={100}
      />
    </>
  );
}

function SphereMesh() {
  const map = useTexture('/map.png');
  const [spring, springApi] = useSpring(() => ({
    opacity: 0,
    position: [0, -6, 0],
    rotation: [0, 0, 0],
    config: { tension: 200, friction: 50 },
  }));
  useEffect(() => {
    springApi.start({
      position: [0, -3.7, 0],
    });
  });
  return (
    <>
      <animated.mesh
        scale={3.8}
        position={spring.position.to((x, y, z) => [x, y, z])}
      >
        <circleGeometry />
        <meshStandardMaterial metalness={1} map={map} />
      </animated.mesh>
    </>
  );
}

const MaibLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 160px;
`;
