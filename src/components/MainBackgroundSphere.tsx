import React, { useRef, useState, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, useTexture,OrbitControls } from '@react-three/drei';
import * as THREE from 'three'
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/three'

export default function MainBackgroundSphere(p) {
  return (
    <MaibLayout>
      <Canvas gl={{ antialias: true }} shadows style={{ width: "100%", height: '100%', zIndex: "99" }}>
        <SphereMesh/>
      </Canvas>
    </MaibLayout>

  )
}

function SphereMesh(props) {
  const map = useTexture("/test.png")
  const ref = useRef();
  const [on,setOn]=useState(false)

  const spring1 = useSpring({
    position : on? [0,-2.5,0]:[0,-4,0],
    rotation : on? [0,1.5,0]:[0,0,0],
    config: { duration: 1000,},
  })

  const spring2 = useSpring({
    position : on? [0.1,-2.5,0]:[0.1,-4,0],
    config: { duration: 1000,},
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
        <meshPhysicalMaterial side={THREE.BackSide} map={map} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
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
