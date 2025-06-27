import BaseTelas from "../componentes/baseTelas";
import EditPerfil from "../componentes/editPerfil";

function Funcionarios() {
  return BaseTelas({
    conteudo: (
      <>
        <EditPerfil />
        <h1>Funcionários</h1>
      </>
    ),
  });
}

export default Funcionarios;
