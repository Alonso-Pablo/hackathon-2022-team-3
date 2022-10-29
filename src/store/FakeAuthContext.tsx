import React from 'react'
import { fakeAuthProvider } from './fakeAuth'

export interface AuthContextType {
    user: any
    signin: (user: string, callback: VoidFunction) => void
    signout: (callback: VoidFunction) => void
}

export const FakeAuthContext = React.createContext<AuthContextType>(null!)

export const FakeAuthContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    let [user, setUser] = React.useState<string | null>(null)

    let signin = (newUser: string, callback: VoidFunction) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser)
            callback()
        })
    }

    let signout = (callback: VoidFunction) => {
        return fakeAuthProvider.signout(() => {
            setUser(null)
            callback()
        })
    }

    let value = { user, signin, signout }

    return (
        <FakeAuthContext.Provider value={value}>
            {children}
        </FakeAuthContext.Provider>
    )
}
