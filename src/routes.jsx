import { Routes, Route } from "react-router-dom";
import { Header } from "./Upside/Post";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
  );
}
