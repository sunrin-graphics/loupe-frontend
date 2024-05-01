import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three'
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/three'

export default function MainBackgroundSphere() {
  return (
    <MaibLayout>
      <Canvas gl={{ antialias: true }} shadows style={{ width: "100%", height: '100%', zIndex: "99" }}>
        <SphereMesh/>
      </Canvas>
    </MaibLayout>

  )
}

function SphereMesh() {
  const map = useTexture("/test.png")
  const [on,setOn]=useState(false)

  const spring1 = useSpring({
    opacity: on? 1:0,
    position : on? [0,-2.5,0]:[0,-4,0],
    rotation : on? [0,1.6,0.15]:[0,0,0],
    config: { tension: 200, friction: 50},
  })

  const spring2 = useSpring({
    position : on? [0.1,-2.5,0]:[0.1,-4,0],
    config: { tension: 200, friction: 50},
  })

  useEffect(() => {
    setOn(true);
  }, []);


  return (
    <>
      <ambientLight intensity={5}/>
      <animated.mesh rotation={spring1.rotation} position={spring2.position} scale={2.9}>
        <sphereGeometry/>
        <meshStandardMaterial color={'#26184a'} side={THREE.BackSide} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
      </animated.mesh>
      <animated.mesh rotation={spring1.rotation} position={spring1.position} scale={2.75}>
        <sphereGeometry/>
        <meshPhysicalMaterial side={THREE.BackSide} color={'#d7ceee'} map={map} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
      </animated.mesh>
    </>
  )
}

const MaibLayout = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    padding: 0 160px;
`
