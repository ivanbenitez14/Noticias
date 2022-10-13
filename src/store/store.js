import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { noticiasSlice } from "./noticias/noticiasSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    noticias: noticiasSlice.reducer,
  },
})