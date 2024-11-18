let hookState: any[] = [];
let hookIndex = 0;
let scheduleUpdate = () => {
  hookIndex = 0;
  console.log('开始更新');
}; // 调度更新方法

export const useReducer = (reducer: any, initialState: any) => {
  if (!hookState[hookIndex]) hookState[hookIndex] = initialState;
  let currentIndex = hookIndex;
  const dispatch = (action: any) => {
    hookState[currentIndex] = reducer(hookState[currentIndex], action);
    scheduleUpdate();
  };
  return [hookState[hookIndex++], dispatch];
};
