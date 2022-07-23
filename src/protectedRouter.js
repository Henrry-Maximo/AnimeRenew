import { Navigate, Outlet } from "react-router-dom";

// função responsável por verificar o login
function userAuth() {
  const user = true;
  return user && user;
}

// função responsável por verificar se está certo ou errado
function ProtectedRouter() {
  const isAuth = userAuth();
  return (
    // verificação de uma linha / se for true = executa o Outlet (ele pode transitar entre as páginas) / se for false = Navigate (volta pra página - login) 
    isAuth ? <Outlet to="/main"/> : <Navigate to="/logindisplay" />
  );
}

export default ProtectedRouter;