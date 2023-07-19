import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/User.context';

const Homepage = () => {

    const [user, setUser] = useState({});
    const { state, login, logout } = useContext(AuthContext);
    console.log(user, "- user")

    useEffect(() => {
        if (state.user) {
            setUser(state?.user)
        }
    }, [state])
    return (
        <div>Homepage - {user?.name}</div>
    )
}

export default Homepage