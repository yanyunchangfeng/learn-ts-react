import React from 'react';

export const useFirstMountState = () => {
  const isFirst = React.useRef(true);
  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }
  return isFirst.current;
};
