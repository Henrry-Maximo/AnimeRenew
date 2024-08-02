// criar rotas e gerenciar a navegação entre elas
import { BrowserRouter, Route, Routes } from "react-router-dom";
// --------------------------------------------

// estilização padrão para todas as páginas + importação da font: ROBOTO
import "@fontsource/roboto";
import "./App.css";
// --------------------------------------------

// Header && Footer
import Header from "./components/Header";
import Footer from "./components/Footer";
// --------------------------------------------

// pages: Login && Registration
import Login from "./pages/Login";
import Registration from "./pages/Registration";
// --------------------------------------------

// pages: página principal (animes); página secundária (mangá)
import Main from "./pages/Main";
import Secondaryone from "./pages/Secondaryone";
// --------------------------------------------

// exibição dos gêneros estabelecidos no banco de dados (só irá funcionar com conexão ao bd estabelecida)
import Gender from "./pages/Gender";
// carregar os input's de utilizando de inserição e exclusão de gênero
import ModalGender from "./components/ModalGender";
// --------------------------------------------

// página de exibição de wallpapers de animes
import Wallpapers from "./pages/Wallpapers";
// --------------------------------------------

// responsável por não deixar o usuário visualizar as páginas da aplicação senão login&registration,
// enquanto não efetuar login
import ProtectedRouter from "./protectedRouter";
// --------------------------------------------

// Se página não existir como endereço oficial da aplicação, executar:
import Error from "./pages/Error";
// --------------------------------------------


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<ProtectedRouter />}>
            <Route path="/" element={<Main />} />
            <Route path="/Secondaryone" element={<Secondaryone />} />
            <Route path="/Gender" element={<Gender />} />
            <Route path="/Figure" element={<Wallpapers />} />
            <Route path="/ModalGender" element={<ModalGender />} />
            <Route path="/Figure" element={<Wallpapers />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
