import { Text } from "@react-three/drei";
import { Vector3, Euler } from "three";

// Define the props interface for the component
interface InfoPanelProps {
  position: Vector3 | [number, number, number]; // Position can be a Vector3 or an array of numbers
  rotation: Euler | [number, number, number]; // Rotation should be an Euler object or an array of numbers
  content: string; // Content should be a string
}

export default function InfoPanel({
  position,
  rotation,
  content,
}: InfoPanelProps) {
  return (
    <group
      position={position}
      rotation={rotation instanceof Euler ? rotation.toArray() : rotation}
    >
      <mesh>
        <planeGeometry args={[2, 1]} />
        <meshBasicMaterial color="#1a1a1a" />
      </mesh>
      <Text
        position={[0, 0, 0.01]}
        fontSize={0.1}
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
      >
        {content}
      </Text>
    </group>
  );
}
