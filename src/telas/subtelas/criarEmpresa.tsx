import { useState } from "react";
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

  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        padding: "25px 15px 15px 15px",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
        }}
      >
        <h3 style={{ color: Cor.secundaria, fontSize: "20px" }}>
          Novo Cliente
        </h3>
        <div
          style={{
            width: "70%",
            height: 1,
            backgroundColor: Cor.primaria,
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 20,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div>
          <p style={{ color: Cor.secundaria, fontSize: 20 }}>
            Informações do Cliente
          </p>
          <p style={{ color: Cor.texto1, fontSize: 12 }}>
            Preencha abaixo todos os campos e salve para seguir com o cadastro.
          </p>
        </div>
        <div
          style={{
            width: "100%",
            borderRadius: 22,
            marginTop: 20,
            boxShadow: Cor.sombra,
            backgroundColor: Cor.base2,
            display: "flex",
            flexDirection: "row",
            padding: "20px 0",
            gap: 20,
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              padding: "0 20px",
            }}
          >
            <TextoEntrada
              placeholder="Nome Fantasia"
              onChange={(e: { target: { value: any } }) =>
                setNome(e.target.value)
              }
              value={nome}
              type="text"
              largura="100%"
            />
            <TextoEntrada
              placeholder="Razão Social"
              onChange={(e: { target: { value: any } }) =>
                setRazaoSocial(e.target.value)
              }
              value={razaoSocial}
              type="text"
              largura="100%"
            />
            <TextoEntrada
              placeholder="CNPJ"
              onChange={(e: { target: { value: any } }) => {
                setCnpj(formatCNPJ(e.target.value));
              }}
              value={cnpj}
              type="text"
              largura="100%"
            />
          </div>
          <div></div>
        </div>
      </div>
      <button>Salvar</button>
    </div>
  );
}

function TextoEntrada({
  placeholder,
  onChange,
  value,
  type,
  largura,
}: {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  largura: string;
}) {
  const Cor = useTema().Cor;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: largura,
        backgroundColor: Cor.texto2 + 20,
        padding: 10,
        borderRadius: 22,
      }}
    >
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={{
          backgroundColor: "transparent",
          color: Cor.texto1,
          border: "none",
          outline: "none",
          width: "100%",
        }}
      />
    </div>
  );
}

function formatCNPJ(value: any) {
  return value
    .replace(/\D/g, "") // Remove tudo que não é número
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .slice(0, 18); // Limita o tamanho
}
