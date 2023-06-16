import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./paginas/Login";
import Feira from "./paginas/Feira";
import Carrinho from "./paginas/Carrinho";
import UsuarioProvider from "./common/context/Usuario";
import CarrinhoProvider from "./common/context/Carrinho";
import { PagamentoProvider } from "./common/context/Pagamento";

function AppRoutes() {
  return (
    <BrowserRouter>
      <PagamentoProvider>
        <UsuarioProvider>
          <CarrinhoProvider>
            <Routes>   
              <Route path="/" element={<Login/>}/>
              <Route path="/feira" element={<Feira/>}/>
              <Route path="/carrinho" element={<Carrinho/>}/>
            </Routes>
          </CarrinhoProvider>
        </UsuarioProvider>
      </PagamentoProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
