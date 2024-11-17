import React from 'react';
const updateReducer = (num: number): number => (num + 1) % 1_000_000;

export const useUpdate = () => {
  const [, forceUpdater] = React.useReducer(updateReducer, 0);
  return forceUpdater;
};
