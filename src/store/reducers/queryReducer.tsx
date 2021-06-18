import { QueryState, QueryAction, QueryActionTypes } from 'src/types/query';

const initialState: QueryState = {
  query: '',
  request: null,
};

let i = 0;
export default function queryReducer(
  state = initialState,
  action: QueryAction
): QueryState {
  switch (action.type) {
    case QueryActionTypes.CHANGE_QUERY:
      return { ...state, request: `success ${i++} ${action.payload}` };
    default:
      return state;
  }
}
