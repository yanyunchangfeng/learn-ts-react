let hookState: any[] = [];
let hookIndex = 0;
let scheduleUpdate = () => {
  hookIndex = 0;
  console.log('开始更新');
}; // 调度更新方法

// calback: 当前渲染完成之后下一个宏任务
export const useEffect = (callback: any, deps: any[]) => {
  if (hookState[hookIndex]) {
    const [destory, oldDeps] = hookState[hookIndex];
    let everySame = deps.every((item, index) => item === oldDeps[index]);
    if (everySame) {
      hookIndex++;
    } else {
      destory && destory();
      setTimeout(() => {
        const destory = callback();
        hookState[hookIndex++] = [destory, deps];
      });
    }
  } else {
    // 初次渲染的时候，开启一个宏任务，在宏任务里执行callback ，并保存销毁函数和依赖数组
    setTimeout(() => {
      const destory = callback();
      hookState[hookIndex++] = [destory, deps];
    });
  }
};
