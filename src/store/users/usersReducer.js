import {
	FETCH_USERS_START,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_FAILURE,
	USERS_CREATE_START,
	USERS_CREATE_SUCCESS,
	USERS_CREATE_FAILURE,
	USERS_DELETE_START,
	USERS_DELETE_SUCCESS,
	USERS_DELETE_FAILURE,
    USERS_UPDATE_START,
    USERS_UPDATE_SUCCESS,
    USERS_UPDATE_FAILURE,
    ACTUAL_PAGE
} from "./constants";

const initialState = {
    isFetching: 'iddle',
    isLoading: false,
    data: [],
    errorMessage: null,
    message: null,
    actPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_START:
            //se inicia la solicitud y se modifica el estado de carga.
            return {
                ...state,
                isFetching: "loading",
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                isFetching: "succeeded",
                data: action.payload
            }

        case FETCH_USERS_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: false,
                data: []
            }
        case USERS_CREATE_START:
            return {
                ...state,
                isLoading: true
            }
        case USERS_CREATE_SUCCESS:
            return {
                ...state,
                isLoading: true,
                data: [...state.data,action.payload]              
            }
        case USERS_CREATE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
            }
        case USERS_DELETE_START:
            return {
                ...state,
                isLoading: false
            }
        case USERS_DELETE_SUCCESS:
            return {
                ...state,
                isLoading: true,
                data: action.payload
            }
        case USERS_DELETE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
            }
        case USERS_UPDATE_START:
            return {
                ...state,
                isLoading: false
            }
        case USERS_UPDATE_SUCCESS:
            return {
                ...state,
                isLoading: true,
                data: action.payload
            }
        case USERS_UPDATE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
            }
        case ACTUAL_PAGE:
            return {
                ...state,
                actPage: action.payload
            }
        default:
            return state;
    }
}

export default usersReducer