// just for test
import React from 'react'
import { useUserDispatch, signOut } from "../../actions/AuthActions";

function Header() {
    var userDispatch = useUserDispatch();

    return (
        <div>
            <a class="dropdown-item" onClick={() => signOut(userDispatch, props.history)} style={{cursor:"default"}}><i class="fa fa-sign-out"/> Logout</a>            
        </div>
    )
}

export default Header

