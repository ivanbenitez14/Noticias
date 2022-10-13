import { Navigate, Route, Routes } from "react-router-dom";
import { NewsPage } from "../pages/NewsPage";
import { NotesPage } from "../pages/NotesPage";

export const NewsRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={ <NewsPage /> } />
        <Route path="/EditarNotas" element={ <NotesPage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
        
    </Routes>
  )
}
