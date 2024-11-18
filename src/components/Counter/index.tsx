import React from 'react';
import { Button } from 'antd';

//hooks 中如何获取历史props和state 其实就是利用useRef的特性

export const Counter: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const prevCountRef = React.useRef<number>();
  const prevCount = prevCountRef.current;

  React.useEffect(() => {
    prevCountRef.current = count;
  });

  return (
    <>
      <h1>
        Now:{count} , before:{prevCount}
      </h1>
      <Button onClick={() => setCount(count + 1)}>ADD</Button>
    </>
  );
};
