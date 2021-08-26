import {
	fetchUsersStart,
	fetchUsersSuccess,
	fetchUsersFailure,
	usersCreateStart,
	usersCreateSuccess,
	usersCreateFailure,
	usersDeleteStart,
	usersDeleteSuccess,
	usersDeleteFailure,
	usersUpdateStart,
	usersUpdateSuccess,
	usersUpdateFailure
} from "./actions";
import axios from "axios";

export const fetchUsersStartThunk = () => {
	return async (dispatch, getState) => {
		dispatch(fetchUsersStart());
		try {
			const { data } = await axios(
				"https://jsonplaceholder.typicode.com/users"
			);
			const dataCleaned = data.map(({id,name,address}) => ({
				id,
				name,
				address: `${address.street}-${address.city}`
			}))
			dispatch(fetchUsersSuccess(dataCleaned));
		} catch (error) {
			dispatch(fetchUsersFailure(error.message));
		}
	};
};
export const addUsersStartThunk = (user) => {
	return async (dispatch, getState) => {
		dispatch(usersCreateStart());
		const requestOptions = {
			body: JSON.stringify(user),
		};
		try {
			const { data } = await axios.post(
				"https://jsonplaceholder.typicode.com/users",
				requestOptions
			);
            const {name,id,address} = JSON.parse(data.body)
			dispatch(usersCreateSuccess({id,name,address}));
		} catch (error) {
			dispatch(usersCreateFailure(error.message));
		}
	};
};

export const deleteUsersStartThunk = (id) => {
	return async (dispatch, getState) => {
		dispatch(usersDeleteStart())
		try {
			await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
			dispatch(usersDeleteSuccess(id))
		} catch (error) {
			dispatch(usersDeleteFailure(error.message))
		}
	}
}

export const updateUserStartThunk = (user) => {
	return async (dispatch,getState)=>{
		// const requestOptions = {
		// 	mode: 'no-cors',
		// 	headers: {
		// 		'Content-type': 'application/json; charset=UTF-8',
		// 	},
		// 	body: JSON.stringify(user),
		// };
		dispatch(usersUpdateStart())
		try {
			//no está implementada la actualización con jsonplaceholder para users
			// const {data} = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`,requestOptions)
			// console.log(data)
			dispatch(usersUpdateSuccess(user))
		} catch (error) {
			dispatch(usersUpdateFailure(error.message))
		}
	}
}
