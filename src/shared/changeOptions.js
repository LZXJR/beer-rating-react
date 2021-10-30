
 export const changeOptions = (setState) => (key,value) => {
    setState((options) => {
      return { ...options, [key]: value };
    });
  };