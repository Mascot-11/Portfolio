import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Mesh } from "three";

export default function Earth() {
  const earthRef = useRef<Mesh>(null);

  // Use the `useLoader` hook to load the texture with type assertion
  const texture = useLoader(
    TextureLoader as any,
    "/assets/3d/texture_earth.jpg"
  );

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
