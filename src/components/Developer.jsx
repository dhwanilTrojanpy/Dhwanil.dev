import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, useGraph } from '@react-three/drei';
import { useFBX } from '@react-three/drei';
import * as THREE from 'three';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();

  const { scene } = useGLTF('/models/animations/developer.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
  const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
  const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
  const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');

  idleAnimation[0].name = 'idle';   
  saluteAnimation[0].name = 'salute';
  clappingAnimation[0].name = 'clapping';
  victoryAnimation[0].name = 'victory';

  const { actions } = useAnimations(
    [idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]],
    group
  );

  useEffect(() => {
    actions[animationName].reset().fadeIn(0.5).play();
    return () => actions[animationName].fadeOut(0.5);
  }, [animationName]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -1, 0]} rotation={[0, Math.PI, 0]} scale={1}>
        <primitive object={scene} />
      </group>
    </group>
  );
};

useGLTF.preload('/models/animations/developer.glb');

export default Developer;