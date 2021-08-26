import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersSelector } from "../../store/users/selector";
import { fetchUsersStartThunk } from "../../store/users/thunks";
import UserCreate from "../user-create/UserCreate";
import {
    Link
  } from "react-router-dom";


const UserContainer = () => {
	const users = useSelector(usersSelector);
	const { isFetching } = useSelector((state) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isFetching === "iddle") dispatch(fetchUsersStartThunk());
	}, [isFetching, dispatch]);

	return isFetching === "loading" ? (
		"...Loading"
	) : (
		<div className="col-8 mx-auto">
			<h2 className="text-center">Crear Usuario</h2>
            <UserCreate />
			<h1 className="text-center">Users</h1>
			<div>
				{users &&
					users.length > 1 &&
					users.map((user) => (
						<div className="row p-1 mb-3 border border-1" key={user.id}>
							<div className="col-12 col-sm-8 ">
								<p>{user.name}</p>
								<p>{user.address}</p>
							</div>
							<div className="col-12 col-sm-4 d-flex align-items-center justify-content-center justify-content-sm--end">
                                <Link className="btn btn-danger mx-1" to={`/delete/${user.id}`}>Delete</Link>
                                <Link className="btn btn-warning"  to={`/update/${user.id}`}>Update</Link>
                            </div>
						</div>
					))}
			</div>
		</div>
	);
};
export default UserContainer;
