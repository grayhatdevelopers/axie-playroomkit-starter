import { Canvas } from "@react-three/fiber";
import { Buba } from "@sms0nhaaa/r3f-axie-starter";
import Floor from "./floor";
import { Physics } from "@react-three/rapier";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import Players from "./player/players";
import Ball from "./Ball";

export default function Scene() {
  return (
    <Canvas>
      <KeyboardControls
        map={[
          { name: "up", keys: ["ArrowUp", "KeyW"] },
          { name: "down", keys: ["ArrowDown", "KeyS"] },
          { name: "left", keys: ["ArrowLeft", "KeyA"] },
          { name: "right", keys: ["ArrowRight", "KeyD"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <ambientLight intensity={2} />

        {/* <OrbitControls /> */}

        <Physics>
          <Floor />
          <Ball position={[5, 5, 2]} />
          <Players />
        </Physics>
      </KeyboardControls>
    </Canvas>
  );
}
