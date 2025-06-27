import BaseTelas from "../../componentes/baseTelas";
import EditPerfil from "../../componentes/editPerfil";
import { useTema } from "../../hooks/temaContext";

function CriarEmpresa() {
  const Cor = useTema().Cor;
  return BaseTelas({
    conteudo: (
      <>
        <EditPerfil />
      </>
    ),
  });
}

export default CriarEmpresa;
