import React, { useRef, useEffect } from 'react';
import { Stage, Layer, Text } from 'react-konva';

const TickerPreview = () => {
  const textRef = useRef();

  useEffect(() => {
    const anim = () => {
      const text = textRef.current;
      if (text) {
        text.x(text.x() - 2); // velocidad
        if (text.x() < -text.width()) {
          text.x(window.innerWidth); // reiniciar
        }
      }
      requestAnimationFrame(anim);
    };
    anim();
  }, []);

  return (
    <Stage width={window.innerWidth} height={100}>
      <Layer>
        <Text
          ref={textRef}
          text="Welcome to the SquenceLab"
          fontSize={30}
          fill="red"
          x={window.innerWidth}
          y={30}
        />
      </Layer>
    </Stage>
  );
};

export default TickerPreview;
