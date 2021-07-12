import axios from "axios"
import { Dispatch } from "redux"
import { QueryAction, QueryActionTypes } from "src/types/query"

export const getQuery = () => {
  return async (dispatch: Dispatch<QueryAction>) => {
    try {
      dispatch({type: QueryActionTypes.CHANGE_QUERY, payload: 'data'})
      const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
    }
    catch(e) {

    }
  }
}