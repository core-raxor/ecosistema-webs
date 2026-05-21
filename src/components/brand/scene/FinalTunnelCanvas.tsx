"use client";

import { Canvas } from "@react-three/fiber";
import { TunnelVortex } from "./shapes/TunnelVortex";

export default function FinalTunnelCanvas({ accentColor }: { accentColor: string }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.5], fov: 75 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <TunnelVortex accentColor={accentColor} />
    </Canvas>
  );
}
