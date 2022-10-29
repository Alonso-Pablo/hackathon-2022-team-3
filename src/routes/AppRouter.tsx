import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import DashboardPrivateRoute from './privateRouter/DashboardPrivateRoute'
import PrivateRouter from './privateRouter/PrivateRouter'
import DashboardPublicRoutes from './pubicRouter/DashboardPublicRoutes'
import PublicRouter from './pubicRouter/PublicRouter'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/auth/*"
                    element={
                        <PublicRouter>
                            <DashboardPublicRoutes />
                        </PublicRouter>
                    }
                />

                <Route
                    path="/*"
                    element={
                        <PrivateRouter>
                            <DashboardPrivateRoute />
                        </PrivateRouter>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
