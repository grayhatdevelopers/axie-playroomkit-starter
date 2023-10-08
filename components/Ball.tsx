import { RigidBody, BallCollider } from "@react-three/rapier";

interface BallProps {
  position: [x: number, y: number, z: number];
}

export default function Ball({ position }: BallProps) {
  return (
    <RigidBody position={position} type="dynamic">
      <BallCollider args={[0.1]} />
      <mesh>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </RigidBody>
  );
}