import { Navigate, Route, Routes } from "react-router-dom"
import { AuthPage } from "../pages/AuthPage"
import { RegisterPage } from "../pages/RegisterPage"

export const AuthRoutes = () => {
  return (
    
    <Routes>
        <Route path="login" element={ <AuthPage /> } />
        <Route path="register" element={ <RegisterPage /> } />

        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>

  )
}
