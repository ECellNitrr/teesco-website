// just for test
import React from 'react'
import { useUserDispatch, signOut } from "../../actions/AuthActions";

function Header(props) {
    var userDispatch = useUserDispatch();

    return (
        <div>
            <button onClick={() => signOut(userDispatch, props.history)}> Logout</button>            
        </div>
    )
}

export default Header

