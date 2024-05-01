import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, useTexture, } from '@react-three/drei';
import * as THREE from 'three'
import styled from 'styled-components';

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
    return (
      <>
        <ambientLight intensity={5}/>
        <Sphere rotation={[0,0,0]} ref={ref} position={[0,-2.5,0]} scale={2.75}>
          <meshPhysicalMaterial side={THREE.BackSide} map={map} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
        </Sphere>
      </>
    )
  }

const MaibLayout = styled.div`
    width:100%;
    height:100%;
    display:flex;
    padding: 0 160px;
`