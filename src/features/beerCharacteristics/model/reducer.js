
export const reducer = (state ={}, action) => {
  if (action.type.includes("set")) {
    const typeLength = action.type.length;
    const typeKey = action.type.slice(4, typeLength) + "_grade";
    return { ...state, [typeKey]: action.payload };
  } else {
    console.error("Action not found :(");
    return state;
  }
};
