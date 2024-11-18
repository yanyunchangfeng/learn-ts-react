let hookState: any[] = [];
let hookIndex = 0;
let scheduleUpdate = () => {
  hookIndex = 0;
  console.log('开始更新');
}; // 调度更新方法

export const useMemo = (factory: any, deps: any[]) => {
  if (hookState[hookIndex]) {
    let [lastMemo, lastDeps] = hookState[hookIndex];
    let everySame = deps.every((item, index) => item === lastDeps[index]);
    if (everySame) {
      hookIndex++;
      return lastMemo;
    } else {
      let newMemo = factory();
      hookState[hookIndex++] = [newMemo, deps];
      return newMemo;
    }
  } else {
    let newMemo = factory();
    hookState[hookIndex++] = [newMemo, deps];
    return newMemo;
  }
};
