import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams,useHistory } from 'react-router'
import {deleteUsersStartThunk} from "../../store/users/thunks"

const UserDelete = () => {
    let {id} = useParams()
    let history = useHistory()
    const dispatch = useDispatch()

    const deleteUser = () => {
        dispatch(deleteUsersStartThunk(id))
        history.push('/')
    }

    const returnHome = () => {
        history.push("/");
      }
    return (
        <div>
            <h1>Eliminar</h1>
            <p>¿Está seguro de eliminar este usuario?</p>
            <button className="btn btn-danger mx-1" onClick={deleteUser}>Borrar</button>
            <button className="btn btn-success" onClick={returnHome}>Regresar</button>
        </div>
    )
}

export default UserDelete
