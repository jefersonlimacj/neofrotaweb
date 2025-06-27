import BaseTelas from "../componentes/baseTelas";
import EditPerfil from "../componentes/editPerfil";

function Financeiro() {
  return BaseTelas({
    conteudo: (
      <>
        <EditPerfil />
        <h1>Financeiro</h1>
      </>
    ),
  });
}

export default Financeiro;
