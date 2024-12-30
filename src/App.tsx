"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "./components/Scene";
import Interface from "./components/Interface";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: "#000000" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <Interface />
    </div>
  );
}
