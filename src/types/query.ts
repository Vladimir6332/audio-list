export enum QueryActionTypes {
  CHANGE_QUERY = 'ALIST_CHANGE_QUERY',
}

export interface QueryState {
  value: string;
  request: any;
}

 interface ChangeQueryAction {
  type: QueryActionTypes.CHANGE_QUERY;
  payload: string;
}

export type QueryAction = ChangeQueryAction;