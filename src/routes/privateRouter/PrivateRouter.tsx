import React, { FunctionComponent } from 'react'
import { Navigate } from 'react-router'
import useFakeAuth from '../../hooks/useFakeAuth'
type PrivateProps = {
    children: JSX.Element
}
const PrivateRouter: FunctionComponent<PrivateProps> = ({ children }) => {
    const auth = useFakeAuth()
    return auth.user ? children : <Navigate to="/auth/login" />
}

export default PrivateRouter
