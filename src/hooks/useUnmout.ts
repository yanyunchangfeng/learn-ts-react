import React from 'react';
import { useEffectOnce } from './useEffectOnce';

export const useUnMount = (fn: () => any) => {
  const fnRef = React.useRef(fn);
  useEffectOnce(() => () => fnRef.current());
};
