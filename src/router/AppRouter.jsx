import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { NewsRoutes } from "../noticias/routes/NewsRoutes"

export const AppRouter = () => {
  return (
    <Routes>

      {/* Login y Registro */} 
      <Route path="/auth/*" element={ <AuthRoutes /> } />
      
      {/* Noticias App */}
      <Route path="/*" element={ <NewsRoutes /> } />
      
      
    </Routes>
  )
}
