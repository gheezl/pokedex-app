import UserActionTypes from "./user-types.js"

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_START:
            return {
                ...state
            }

        case UserActionTypes.SIGN_UP_SUCCESS:
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }

        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null
            }

        default:
            return state
    }
}

export default userReducer;