import { Routes, Route, Navigate } from 'react-router';

const DashboardPublicRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<div>Hola</div>} />
      <Route path="register" element={<h1>Register</h1>} />
      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
};

export default DashboardPublicRoutes;
