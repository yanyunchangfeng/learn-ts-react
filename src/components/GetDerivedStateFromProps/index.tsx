import React from 'react';

interface Iprops {
  count: number;
}
interface IState {
  overflow: boolean;
}
class Counter extends React.Component {
  state = {
    overflow: false
  };
  static getDerivedStateFromProps(props: Iprops, state: IState) {
    if (props.count > 10) {
      return {
        overflow: true
      };
    }
  }
}

// getDerivedStateFromProps  在函数组件中的等价写法

const CounterF: React.FC<Iprops> = (props) => {
  const [overflow, setOverflow] = React.useState(false);
  if (props.count > 10) {
    setOverflow(true); //这个setState 是在操作DOM之前完成的 不必担心性能问题
  }
  return null;
};
