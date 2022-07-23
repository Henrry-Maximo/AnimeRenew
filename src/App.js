import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Secondaryone from "./pages/Secondaryone";
import Logindisplay from "./pages/Logindisplay";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wallpapers from "./pages/Wallpapers";
import ProtectedRouter from "./protectedRouter";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<ProtectedRouter />}>
            <Route path="/" element={<Main />} />
            <Route path="/Secondaryone" element={<Secondaryone />} />
            <Route path="/Figure" element={<Wallpapers />} />
          </Route>
          <Route path="/Logindisplay" element={<Logindisplay />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
