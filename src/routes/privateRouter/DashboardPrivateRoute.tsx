import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Layout from '../../components/layout/Layout'
import FakePrivate from '../../views/FakePrivate'

const DashboardPrivateRoute = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<FakePrivate />} />
                    <Route path="/profile" element={<h1>Profile</h1>} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </>
    )
}

export default DashboardPrivateRoute
