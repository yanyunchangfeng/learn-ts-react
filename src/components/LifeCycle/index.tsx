import React, { type FC } from 'react';
import { useUpdateEffect, useMount, useUnMount } from 'src/hooks';
import { Button, Flex, Tag } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

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

  return (
    <Flex gap={16} align="center">
      <Button icon={<MinusOutlined />} onClick={() => setNum((n) => n - 1)}></Button>
      <Tag color="blue">{num}</Tag>
      <Button icon={<PlusOutlined />} onClick={() => setNum((n) => n + 1)}></Button>
      <Button type="link" onClick={() => navigate('/other')}>
        other
      </Button>
      <Button type="link" onClick={() => navigate('/counter')}>
        counter
      </Button>
      <Button type="link" onClick={() => navigate('/wrap')}>
        wrap
      </Button>
    </Flex>
  );
};
