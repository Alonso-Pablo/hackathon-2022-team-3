import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import useFakeAuth from '../hooks/useFakeAuth'

const FakeLogin = () => {
    let navigate = useNavigate()
    let location = useLocation()
    let auth = useFakeAuth()
    let from = location.state?.from?.pathname || '/auth/login'

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let formData = new FormData(event.currentTarget)
        let username = formData.get('username') as string
        auth.signin(username, () => {
            // Send them back to the page they tried to visit when they were
            // redirected to the login page. Use { replace: true } so we don't create
            // another entry in the history stack for the login page.  This means that
            // when they get to the protected page and click the back button, they
            // won't end up back on the login page, which is also really nice for the
            // user experience.
            navigate(from, { replace: true })
        })
    }

    return (
        <div>
            <h1>Fake Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        name="username"
                        type={'text'}
                        className="border-2 border-black"
                    />
                </div>
                <button type="submit" className="border-2 my-2">
                    Login
                </button>
            </form>
        </div>
    )
}

export default FakeLogin
