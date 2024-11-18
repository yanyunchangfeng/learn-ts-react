let hookState: any[] = [];
let hookIndex = 0;
let scheduleUpdate = () => {
  hookIndex = 0;
  console.log('开始更新');
}; // 调度更新方法

export const useRef = () => {
  if (hookState[hookIndex]) {
    return hookState[hookIndex++];
  } else {
    hookState[hookIndex] = { current: null };
    return hookState[hookIndex++];
  }
};
