import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars, Text3D } from "@react-three/drei";
import Earth from "./Earth";
import InfoPanel from "./InfoPanel";
import { Group } from "three"; // Import Group from Three.js to use it as a type

export default function Scene() {
  const groupRef = useRef<Group>(null); // Type the reference

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Ensure groupRef.current is defined before accessing its properties
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t / 4) / 8;
      groupRef.current.position.y = Math.sin(t / 1.5) / 10;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade
      />
      <Earth />
      <Text3D
        font="/fonts/Roboto_Bold.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[-2, 2, 0]}
      >
        Shreeyush Dhungana
        <meshNormalMaterial />
      </Text3D>
      <InfoPanel
        position={[-3, 0, 0]}
        rotation={[0, Math.PI / 4, 0]}
        content="EDUCATION"
      />
      <InfoPanel
        position={[3, 0, 0]}
        rotation={[0, -Math.PI / 4, 0]}
        content="EXPERIENCE"
      />
      <InfoPanel
        position={[0, -2, 0]}
        rotation={[Math.PI / 4, 0, 0]}
        content="SKILLS"
      />
    </group>
  );
}
