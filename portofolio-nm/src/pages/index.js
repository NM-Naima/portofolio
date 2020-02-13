import React, { useRef }  from 'react';
import {Canvas, extend, useThree, useFrame } from 'react-three-fiber';
import Box from '../pages/home/animation/box';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import './home.css';
extend({OrbitControls});


const Controls = () => {
  const { camera, gl } = useThree();
  const orbitRef = useRef();

  useFrame(()=>{orbitRef.current.update()});

  return(
    <orbitControls
    autoRotate
    maxPolarAngle={Math.PI / 3}
    minPolarAngle={Math.PI / 3} 
    args={[camera, gl.domElement]}
    ref={orbitRef}  
    />
  );
}

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]}>
    <planeBufferGeometry attach="geometry" args={[100,100,100]}/>
    <meshPhysicalMaterial attach="material" color="rgb( 28, 40, 51)"/>
  </mesh>
  )

function Home() {
    return (
        <div className="home">  
            <Canvas>
            <ambientLight  />
            <spotLight position={[0, 2, 5]} penumbra={1} />
             <Controls /> 
               <Box  /> 
               <Plane />           
            </Canvas>
            <div className="cube"></div>
        </div>
    );
}
export default Home;



