"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "@/store/slices/themeSlice";

// Esse componente serve para manter o theme
// da aplicação sincronizado entre cliente e servidor
const ThemeHydrator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    const parsed = stored === "true";
    dispatch(setTheme(parsed));
  }, [dispatch]);

  return null;
};

export default ThemeHydrator;
