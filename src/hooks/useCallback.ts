let hookState: any[] = [];
let hookIndex = 0;
let scheduleUpdate = () => {
  hookIndex = 0;
  console.log('开始更新');
}; // 调度更新方法

export const useCallback = (callback: any, deps: any[]) => {
  if (hookState[hookIndex]) {
    let [lastCallback, lastDeps] = hookState[hookIndex];
    let everySame = deps.every((item, index) => item === lastDeps[index]);
    if (everySame) {
      hookIndex++;
      return lastCallback;
    } else {
      hookState[hookIndex++] = [callback, deps];
      return callback;
    }
  } else {
    hookState[hookIndex++] = [callback, deps];
    return callback;
  }
};
