import React, { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();

  const { scene, animations } = useGLTF('/models/animations/developer.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);

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
    group,
  );

  useEffect(() => {
    // Only try to play animation if it exists
    if (actions && actions[animationName]) {
      Object.values(actions).forEach((action) => action.stop());
      actions[animationName].reset().fadeIn(0.5).play();
    }
  }, [actions, animationName]);

  return (
    <group ref={group} {...props}>
      {/* <primitive object={clone} scale={1} position={[0, -1, 0]} rotation={[0, Math.PI, 0]} /> */}
    </group>
  );
};

useGLTF.preload('/models/animations/developer.glb');

export default Developer;
