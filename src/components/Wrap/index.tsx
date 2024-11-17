import React, { FC, PropsWithChildren } from 'react';

//这个组件的唯一作用就是免去子组件使用key属性，实际上是骗过react，我这个就是确定的唯一的大小的数组，这个也确实能够确定，
// 因为props.children存在就是在jsx里面写的，那么就是固定的

export const Wrap: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};
