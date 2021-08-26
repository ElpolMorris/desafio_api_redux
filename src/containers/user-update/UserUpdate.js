import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersSelector } from "../../store/users/selector";
import { useHistory, useParams } from "react-router-dom";
import { updateUserStartThunk } from "../../store/users/thunks";

const UserUpdate = () => {
	const users = useSelector(usersSelector);
	let { id } = useParams();
	const user = users.find((us) => us.id === +id);
	const [name, setName] = useState(user.name);
	const [address, setAddress] = useState(user.address);
	const dispatch = useDispatch();
	const history = useHistory();

	const handlerSubmit = (e) => {
		e.preventDefault();
		dispatch(updateUserStartThunk({ id: +id, name, address }));
		history.push("/");
	};
    const returnMenu = () => {
        history.push("/");
    }
	return (
		<div className="row">
			<h1 className="col-8 text-center mx-auto">Update</h1>
			<form className="col-8 mx-auto" onSubmit={(e) => handlerSubmit(e)}>
				<label htmlFor="id">id</label>
				<input value={id} className="form-control" name="id" disabled />
				<label htmlFor="name">Nombre</label>
				<input
					id="name"
					className="form-control"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor="direction">Dirección - Ciudad</label>
				<input
					id="direction"
					className="form-control"
					type="text"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
				<div className=" text-center py-2">
					<button className="btn btn-primary mx-1" type="submit">
						Actualizar
					</button>
					<button className="btn btn-info text-white" onClick={returnMenu}>
						Volver
					</button>
				</div>
			</form>
		</div>
	);
};

export default UserUpdate;
