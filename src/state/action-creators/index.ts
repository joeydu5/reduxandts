import axios from "axios";
import { Action, ActionType } from "../actions";
import { Dispatch } from "redux";

export const searchRepositories = (queryString: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: queryString,
          },
        }
      );
      const names = data.objects.map((each: any) => each.package.name);
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: "err.message",
      });
    }
  };
};
