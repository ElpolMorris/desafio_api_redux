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
    USERS_UPDATE_FAILURE
} from "./constants";
import store from "../index";

export const fetchUsersStart = () => ({
	type: FETCH_USERS_START,
});

export const fetchUsersSuccess = (users) => ({
	type: FETCH_USERS_SUCCESS,
	payload: users,
});

export const fetchUsersFailure = (errorMessage) => ({
	type: FETCH_USERS_FAILURE,
	payload: errorMessage,
});

export const usersCreateStart = () => ({
	type: USERS_CREATE_START,
});

export const usersCreateSuccess = (users) => ({
	type: USERS_CREATE_SUCCESS,
	payload: users,
});

export const usersCreateFailure = (errorMessage) => ({
	type: USERS_CREATE_FAILURE,
	payload: errorMessage,
});
export const usersDeleteStart = () => ({
	type: USERS_DELETE_START,
});

export const usersDeleteSuccess = (id) => {
    const { users: usuarios } = store.getState();
	const users = usuarios.data;
	return {
		type: USERS_DELETE_SUCCESS,
		payload: users.filter((user) => user.id !== parseInt(id)),
	};
};

export const usersDeleteFailure = (errorMessage) => ({
	type: USERS_DELETE_FAILURE,
	payload: errorMessage,
});
export const usersUpdateStart = () => ({
	type: USERS_UPDATE_START,
});

export const usersUpdateSuccess = (userNewData) => {
    const { users: usuarios } = store.getState();
	const users = usuarios.data;
    const usersToUpdate = users.findIndex(user => user.id === +userNewData.id)
	users[usersToUpdate] = userNewData
	return {
		type: USERS_UPDATE_SUCCESS,
		payload: users,
	};
};

export const usersUpdateFailure = (errorMessage) => ({
	type: USERS_UPDATE_FAILURE,
	payload: errorMessage,
});
