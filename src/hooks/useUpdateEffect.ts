import React from 'react';
import { useFirstMountState } from './useFirstMountState';

export const useUpdateEffect: typeof React.useEffect = (effect, deps) => {
  const isFirstMount = useFirstMountState();

  React.useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
  }, deps);
};
