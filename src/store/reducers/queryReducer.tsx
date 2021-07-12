import { QueryState, QueryAction, QueryActionTypes } from 'src/types/query';

const initialState: QueryState = {
  value: '',
  request: null,
};

export default function queryReducer(
  state = initialState,
  action: QueryAction
): QueryState {
  switch (action.type) {
    case QueryActionTypes.CHANGE_QUERY:
      const newState = {
        ...state,
        value: action.payload,
      };
      console.log(newState);

      return newState;

    default:
      return state;
  }
}
