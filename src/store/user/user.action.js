import { createAction } from "../../utils/reducers/reducers.utils";

export const setCurrentUser = (user)=> createAction('SET_CURRENT_USER', user)