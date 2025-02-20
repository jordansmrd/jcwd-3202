/** @format */

export const actionType = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

interface CountAction {
  type: string;
  payload: number;
}

interface CountState {
  count: number;
}

//state, action
// action => merubah isi dari state
//action.type = kondisi ex:increment
//action.payload = beban=>

export function reducer(state: CountState, action: CountAction) {
  switch (action.type) {
    case actionType.INCREMENT:
      return { count: state.count + action.payload };
    case actionType.DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state;
  }
}
