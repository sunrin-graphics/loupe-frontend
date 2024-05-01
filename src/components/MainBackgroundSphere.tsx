import { Box, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

export default function MainBackgroundSphere(p){
    return(
        <MaibLayout>
            <Canvas gl={{antialias:true}} shadows style={{width:"100%",height:'100%', zIndex:"999"}}>
                <OrbitControls enablePan={false} enableZoom={false}/>
                <Sphere scale={2.75}/>
            </Canvas>            
        </MaibLayout>

    )
}

const MaibLayout = styled.div`
    width:100%;
    height:100%;
    display:flex;
    padding: 0 160px;
`