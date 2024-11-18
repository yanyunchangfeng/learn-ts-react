export const forwardRef = (render: React.FC) => {
  return {
    $$typeof: Symbol.for('react.forward_ref'),
    render // 原来的函数组件
  };
};
