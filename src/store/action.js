export const IncNum = (num)=>{
    return{
        type: "INCREMENT",
        payload:num
    }
}

export const DecNum = () => {
  return {
    type: "DECREMENT",
    payload:2
  };
};