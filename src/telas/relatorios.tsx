import BaseTelas from "../componentes/baseTelas";
import EditPerfil from "../componentes/editPerfil";

function Relatorios() {
  return BaseTelas({
    conteudo: (
      <>
        <EditPerfil />
        <h1>Relatórios</h1>
      </>
    ),
  });
}

export default Relatorios;
