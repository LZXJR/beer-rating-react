export const reducer = (state = {}, action) => {
  if (action.type.includes("set")) {
   
    const { type, payload } = action;
    const set_Length = 4;
    const typeKey = type.slice(set_Length, type.length) + "_grade";

    return { ...state, [typeKey]: payload };
  }
  action.type.includes('@@redux/INIT')?console.log("%cRedux init","color:blue"): console.error("Action not found :(");
  return state;
};
