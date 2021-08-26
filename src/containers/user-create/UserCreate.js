import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addUsersStartThunk} from '../../store/users/thunks'

function UserCreate() {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const dispatch = useDispatch()
    const handlerSubmit = (e)=>{
        e.preventDefault()
        dispatch(addUsersStartThunk({id:new Date().getTime(), name:name, address: `${address}-${city}`}))
        setName("")
        setAddress("")
        setCity("")
    }

    return (
        <div>
            <form className="pb-3" onSubmit={e=>handlerSubmit(e)}>
                <label htmlFor="name">Name</label>
                <input id="name" className="form-control" type="text" value={name} onChange={e=>setName(e.target.value)} />    
                <label htmlFor="direction">Dirección</label>
                <input id="direction" className="form-control" type="text" value={address} onChange={e=>setAddress(e.target.value)} />    
                <label htmlFor="city">Ciudad</label>
                <input id="city" className="form-control" type="text" value={city} onChange={e=>setCity(e.target.value)} />    
                <div className=" text-center py-2">

                <button className="btn btn-primary " type="submit">Registrar</button>
                </div>
            </form>        
        </div>
    )
}

export default UserCreate
