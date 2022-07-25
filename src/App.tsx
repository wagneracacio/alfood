import { Routes, Route } from "react-router-dom";
import AdministracaoPratos from "./paginas/Administracao/Pratos";
import AdministracaoRestaurantes from "./paginas/Administracao/Restaurantes";
import FormularioRestaurante from "./paginas/Administracao/Restaurantes/Formulario";
import PaginaBaseAdmin from "./paginas/Administracao/PaginaBaseAdmin";
import Home from "./paginas/Home";
import VitrineRestaurantes from "./paginas/VitrineRestaurantes";
import FormularioPrato from "./paginas/Administracao/Pratos/Formulario";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/" element={<PaginaBaseAdmin />}>
        <Route path="restaurantes" element={<AdministracaoRestaurantes />} />
        <Route path="pratos" element={<AdministracaoPratos />} />
        <Route path="restaurantes/novo" element={<FormularioRestaurante />} />
        <Route path="pratos/novo" element={<FormularioPrato />} />
        <Route path="restaurantes/:id" element={<FormularioRestaurante />} />
      </Route>
    </Routes>
  );
}

export default App;
