import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Error } from "./components/_Default/Error";
import { Footer } from "./components/_Default/Footer";
import { Header } from "./components/_Default/Header";
import { SignIn } from "./pages/_Default/Login";

import { Gender } from "./pages/Gender";

import { Animes } from "./pages/Anime";
import { Mangas } from "./pages/Mangas";
import { Wallpapers } from "./pages/Wallpapers";
import { ProtectedRouter } from "./protectedRouter";
import { Register } from "./pages/_Default/Register";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRouter />}>
            <Route element={<Header />} />
            <Route path="/animes" element={<Animes />} />
            <Route path="/genders" element={<Gender />} />
            <Route path="/mangas" element={<Mangas />} />
            <Route path="/wallpapers" element={<Wallpapers />} />
            <Route element={<Footer />} />
          </Route>

          <Route
            path="*"
            element={<Error number={404} message="Page Not Found." />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
