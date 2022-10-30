import React, { FunctionComponent } from 'react'
import { Navigate } from 'react-router'
import useFakeAuth from '../../hooks/useFakeAuth'
type PublicProps = {
    children: JSX.Element
}

export const PublicRouter: FunctionComponent<PublicProps> = ({ children }) => {
    const auth = useFakeAuth()
    return auth.user ? <Navigate to="/" /> : children
}

export default PublicRouter
