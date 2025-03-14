
import { Html, useProgress } from '@react-three/drei';

const Loading = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span className="text-white">{progress.toFixed(2)}% loaded</span>
    </Html>
  );
};

export default Loading;
