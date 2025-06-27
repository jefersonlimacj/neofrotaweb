import BaseTelas from "../componentes/baseTelas";
import EditPerfil from "../componentes/editPerfil";

function Operacao() {
  return BaseTelas({
    conteudo: (
      <>
        <EditPerfil />
        <h1>Operação</h1>
      </>
    ),
  });
}

export default Operacao;
