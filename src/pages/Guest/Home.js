import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div>this is the homepage</div>
            <div>
                <Link to='/login/'>Login page</Link>
            </div>
        </div>
    )
}
