interface SearchRepoAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepoErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

interface SearchRepoSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

export type Action =
  | SearchRepoAction
  | SearchRepoSuccessAction
  | SearchRepoErrorAction;

export enum ActionType {
  SEARCH_REPOSITORIES = "search_repositories",
  SEARCH_REPOSITORIES_SUCCESS = "search_repositories_success",
  SEARCH_REPOSITORIES_ERROR = "search_repositories_error",
}
