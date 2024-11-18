import React, { FC, PropsWithChildren } from 'react';

//这个组件的唯一作用就是免去子组件使用key属性，实际上是骗过react，我这个就是确定的唯一的大小的数组，这个也确实能够确定，
// 因为props.children存在就是在jsx里面写的，那么就是固定的

export const Wrap: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export const WrapPage: FC = () => {
  const renderDynamic = () => {
    return [1, 2, 3].map((i) => <div key={i}>{i}</div>);
  };
  return (
    <>
      <Wrap>{renderDynamic() /** react 在编译时根本无法知道运行时会有几个子组件，所以需要key来支持*/}</Wrap>
      <Wrap>
        <div>4444</div>
        <div>5555</div>
      </Wrap>
      {[<div>8888</div>, <div>999</div>] /** 会警告*/}
      {/* // 如果没有Wrap，就要返回一个数组， [<div key={1}>1</div>,<div key={2}>2</div>] ,在渲染的时候react会警告，没有key的话会认为是动态产生的 */}
    </>
  );
};
