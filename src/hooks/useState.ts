let hookState: any[] = [];
let hookIndex = 0;
let scheduleUpdate = () => {
  hookIndex = 0;
  console.log('开始更新');
}; // 调度更新方法

export const useState = (initialState: any) => {
  hookState[hookIndex] = hookState[hookIndex] || initialState;
  let currentIndex = hookIndex;
  const setState = (newState: any) => {
    hookState[currentIndex] = newState;
    scheduleUpdate();
  };
  return [hookState[hookIndex++], setState];
};
