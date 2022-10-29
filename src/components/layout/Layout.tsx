import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import useFakeAuth from '../../hooks/useFakeAuth'

const Layout = () => {
    const auth = useFakeAuth()
    const navigate = useNavigate()
    return (
        <div>
            <nav className="border-y-2">
                <ul>
                    <li>
                        <Link to="/" className="m-3 bg-teal-200">
                            Protected Page
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="m-3 bg-teal-200">
                            Profile Page
                        </Link>
                    </li>
                    <li>
                        {' '}
                        <button
                            onClick={() => {
                                auth.signout(() => navigate('/auth/login'))
                            }}
                        >
                            Logout !
                        </button>
                    </li>
                    <li>welcome {auth.user}</li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout
