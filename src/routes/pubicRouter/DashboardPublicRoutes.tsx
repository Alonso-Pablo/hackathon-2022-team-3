import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import FakeLogin from '../../views/FakeLogin'

const DashboardPublicRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<FakeLogin />} />
                <Route path="register" element={<h1>Register</h1>} />
                <Route path="*" element={<Navigate to="/auth" />} />
            </Routes>
        </>
    )
}

export default DashboardPublicRoutes
