import React, { useState, useRef } from "react";
//(1)import { useFrame } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';



function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
    // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
    // Use spring to active trnasition slowy
  const anime = useSpring({
    scale : active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color : hovered ? 'rgb(236, 112, 99)' : 'rgb(81, 90, 90)',

  })

    // Rotate mesh every frame, this is outside of React without overhead
    /*(1)useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))*/

  return (
    <a.mesh
      {...props}
      ref={mesh}
      scale={anime.scale}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
    
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={anime.color} />
    </a.mesh>
  );
}
export default Box;


/*function Box() {
    const meshRef = useRef(); 
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    const props = useSpring({
        scale : active ? [1.5, 1.5, 1.5] : [1, 1, 1],
        color : hovered ? 'rgb(236, 112, 99)':'rgb(81, 90, 90)'
    });
    
    useFrame(() => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01))
   
    return (
        <a.mesh 
        {...props}
        ref={meshRef}
        onPointerOver={()=>setHovered(true)} 
        onPointerOut={()=>setHovered(false)}
        onClick={()=>setActive(!active)}
        scale={props.scale}
        >
            <boxBufferGeometry attach="geometry" args={[ 1, 1,  1]}/>
            <a.meshBasicMaterial attach="material" color={props.color}></a.meshBasicMaterial>
        </a.mesh>       
    );
}
export default Box;*/

