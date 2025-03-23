
import React, { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/animations/developer.glb');
  const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
  const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
  const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
  const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');

  idleAnimation[0].name = 'idle';
  saluteAnimation[0].name = 'salute';
  clappingAnimation[0].name = 'clapping';
  victoryAnimation[0].name = 'victory';

  const { actions } = useAnimations(
    [...animations, idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]],
    group
  );

  useEffect(() => {
    if (actions && actions[animationName]) {
      Object.values(actions).forEach(action => action.stop());
      actions[animationName].reset().fadeIn(0.5).play();
    }
  }, [actions, animationName]);

  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
    </group>
  );
};

export default Developer;
