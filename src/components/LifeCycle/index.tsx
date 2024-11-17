import React, { type FC } from 'react';
import { useUpdateEffect, useMount, useUnMount } from 'src/hooks';
import { Button, Flex, Tag } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Wrap } from 'src/components';

export const LifeCycle: FC = () => {
  const [num, setNum] = React.useState(0);
  const navigate = useNavigate();
  useMount(() => {
    console.log('mount');
  });
  useUnMount(() => {
    console.log('unmount');
  });
  useUpdateEffect(() => {
    console.log('update effect');
  });
  const renderDynamic = () => {
    /** react 在编译时根本无法知道运行时会有几个子组件，所以需要key来支持*/
    return [1, 2, 3].map((i) => <div key={i}>{i}</div>);
  };
  return (
    <Flex gap={16} align="center">
      <Button icon={<MinusOutlined />} onClick={() => setNum((n) => n - 1)}></Button>
      <Tag color="blue">{num}</Tag>
      <Button icon={<PlusOutlined />} onClick={() => setNum((n) => n + 1)}></Button>
      <Button type="link" onClick={() => navigate('/other')}>
        other
      </Button>
      <Wrap>{renderDynamic()}</Wrap>
      <Wrap>
        <div>4444</div>
        <div>5555</div>
      </Wrap>
      {[<div>8888</div>, <div>999</div>]}
      {/* // 如果没有Wrap，就要返回一个数组， [<div key={1}>1</div>,<div key={2}>2</div>] ,在渲染的时候react会警告，没有key的话会认为是动态产生的 */}
    </Flex>
  );
};
