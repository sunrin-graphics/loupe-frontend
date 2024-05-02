import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, useTexture } from '@react-three/drei';
import styled from 'styled-components';
import { useSpring, animated, Globals } from '@react-spring/three';
import { PointLight } from 'three';

Globals.assign({
  frameLoop: 'always',
});

export default function MainBackgroundSphere() {
  return (
    <MainLayout>
      <Canvas
        frameloop="always"
        camera={{ type: 'orthographic' }}
        gl={{ antialias: true }}
        shadows
        style={{ width: '100%', height: '100%', zIndex: '99' }}
      >
        <Light />
        <Environment preset="city" />
        <SphereMesh />
      </Canvas>
    </MainLayout>
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
        intensity={20}
        position={[3, 0, 1]}
        distance={100}
      />
    </>
  );
}

function SphereMesh() {
  const map = useTexture('/map.png');
  const [{ position }, api] = useSpring(() => ({
    position: [0, -6, 0],
    config: { tension: 200, friction: 50 },
  }));

  useEffect(() => {
    api.start({
      position: [0, -3.7, 0],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <animated.mesh scale={3.9} position={position.to((x, y, z) => [x, y, z])}>
        <circleGeometry />
        <meshStandardMaterial metalness={1} map={map} />
      </animated.mesh>
    </>
  );
}

const MainLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`;
