import BaseTelas from "../../componentes/baseTelas";
import EditPerfil from "../../componentes/editPerfil";
import { useTema } from "../../hooks/temaContext";

function CriarEmpresa() {
  return BaseTelas({
    conteudo: (
      <>
        <EditPerfil />
        <CriarClienteConteudo />
      </>
    ),
  });
}

export default CriarEmpresa;

function CriarClienteConteudo() {
  const Cor = useTema().Cor;
  return (
    <>
    <p style={{ color: Cor.secundaria, fontSize: "20px" }}>Criar Novo CLiente</p>
    </>
  );
}
