import React from 'react'
import { FakeAuthContext } from '../store/FakeAuthContext'

const useFakeAuth = () => {
    return React.useContext(FakeAuthContext)
}

export default useFakeAuth
