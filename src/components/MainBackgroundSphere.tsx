import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/three';

export default function MainBackgroundSphere() {
  return (
    <MaibLayout>
      <Canvas
        gl={{ antialias: true }}
        shadows
        style={{ width: '100%', height: '100%', zIndex: '99' }}
      >
        <SphereMesh />
      </Canvas>
    </MaibLayout>
  );
}

function SphereMesh() {
  const map = useTexture('/test.png');

  const [spring, springApi] = useSpring(() => ({
    opacity: 0,
    position: [0, -4, 0],
    rotation: [0, 0, 0],
    config: { tension: 200, friction: 50 },
  }));

  const [backgroundSpring, backgroundSpringApi] = useSpring(() => ({
    position: [0.1, -4, 0],
    config: { tension: 200, friction: 50 },
  }));

  useEffect(() => {
    springApi.start({
      position: [0, -2.5, 0],
      rotation: [0, 1.6, 0.15],
      opacity: 1,
    });

    backgroundSpringApi.start({
      position: [0.1, -2.5, 0],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ambientLight intensity={5} />
      <animated.mesh
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        rotation={spring.rotation}
        position={backgroundSpring.position.to((x, y, z) => [x, y, z])}
        scale={2.9}
      >
        <sphereGeometry />
        <meshStandardMaterial
          color={'#26184a'}
          side={THREE.BackSide}
          roughness={0}
          metalness={0.5}
        />
      </animated.mesh>
      <animated.mesh
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        rotation={spring.rotation.to((x, y, z) => [x, y, z])}
        position={spring.position.to((x, y, z) => [x, y, z])}
        scale={2.75}
      >
        <sphereGeometry />
        <meshPhysicalMaterial
          side={THREE.BackSide}
          color={'#d7ceee'}
          map={map}
          clearcoat={1}
          clearcoatRoughness={0}
          roughness={0}
          metalness={0.5}
        />
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
