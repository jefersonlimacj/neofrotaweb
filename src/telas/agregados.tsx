import BaseTelas from "../componentes/baseTelas";
import EditPerfil from "../componentes/editPerfil";

function Agregados() {
  return BaseTelas({
    conteudo: (
      <>
        <EditPerfil />
        <h1>Agregados</h1>
      </>
    ),
  });
}

export default Agregados;
