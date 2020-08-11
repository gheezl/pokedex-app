import { createSelector } from "reselect"

const selectUserState = state => state.currentUser

export const selectCurrentUser = createSelector(
    [selectUserState],
    (userState) => userState.currentUser
)