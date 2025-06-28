import { useState } from "react";
import BaseTelas from "../../componentes/baseTelas";
import EditPerfil from "../../componentes/editPerfil";
import { useTema } from "../../hooks/temaContext";
import { useNavigate, useParams } from "react-router-dom";

function VerEmpresa() {
  const [CxAlertaExcluirCliente, setCxAlertaExcluirCliente] = useState(false);
  return BaseTelas({
    conteudo: (
      <>
        <EditPerfil />
        <VerEmpresaConteudo
          setCxAlertaExcluirCliente={setCxAlertaExcluirCliente}
        />
        {CxAlertaExcluirCliente && (
          <AlertasExcluirCliente
            setCxAlertaExcluirCliente={setCxAlertaExcluirCliente}
            cxAlertaExcluirCliente={CxAlertaExcluirCliente}
          />
        )}
      </>
    ),
  });
}

function VerEmpresaConteudo({
  setCxAlertaExcluirCliente,
}: {
  setCxAlertaExcluirCliente: any;
}) {
  const Cor = useTema().Cor;
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
        <h3 style={{ color: Cor.secundaria, fontSize: "20px" }}>Detalhes</h3>
        <div
          style={{
            width: "75%",
            height: 1,
            backgroundColor: Cor.primaria,
          }}
        />
      </div>
      <Cabecalho />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          width: "100%",
        }}
      >
        <TabelaSolicitantes />
        <TabelaCentroCusto />
      </div>
      <TabelaUnidadesCliente />
      <ExcluirCliente setCxAlertaExcluirCliente={setCxAlertaExcluirCliente} />
    </div>
  );
}

function Cabecalho() {
  const Cor = useTema().Cor;
  const { cliente_id } = useParams();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          width: "20%",
          height: 250,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7NR0NrclO0OvuAMHnWRiyOsslunuCOt93g&s"
          alt=""
          style={{
            width: "60%",
            aspectRatio: 1,
            borderRadius: 22,
            objectFit: "cover",
            boxShadow: Cor.sombra,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: Cor.primaria }}>Empresa {cliente_id}</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <p style={{ fontSize: 11, color: Cor.texto1 }}>Status: </p>
            <div
              style={{
                backgroundColor: Cor.ativo + 20,
                borderRadius: 12,
                padding: "5px 15px",
              }}
            >
              <p style={{ fontSize: 12, fontWeight: "700", color: Cor.ativo }}>
                Ativo
              </p>
            </div>
          </div>
        </div>
        <button
          style={{
            border: "none",
            backgroundColor: Cor.primaria,
            padding: "5px 25px",
            borderRadius: 12,
            color: Cor.base,
            cursor: "pointer",
          }}
        >
          Editar Informações
        </button>
      </div>
      {/* Fim Resumo perfil */}
      {/* Linha Detalhes Cliente */}
      <div
        style={{
          width: "80%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        {/* Coluna Esqueda Detalhes do Cliente */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "48%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid" + Cor.texto2 + 50,
              paddingBottom: 5,
            }}
          >
            <p style={{ fontSize: 11, color: Cor.texto2 }}>Nome</p>
            <p style={{ fontSize: 16, color: Cor.texto1 }}>Nome Completo</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid" + Cor.texto2 + 50,
              paddingBottom: 5,
            }}
          >
            <p style={{ fontSize: 11, color: Cor.texto2 }}>CNPJ</p>
            <p style={{ fontSize: 16, color: Cor.texto1 }}>
              00.000.000/0000-00
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid" + Cor.texto2 + 50,
              paddingBottom: 5,
            }}
          >
            <p style={{ fontSize: 11, color: Cor.texto2 }}>Endereço</p>
            <p style={{ fontSize: 16, color: Cor.texto1 }}>
              Av. Rui Silva, 123
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid" + Cor.texto2 + 50,
              paddingBottom: 5,
            }}
          >
            <p style={{ fontSize: 11, color: Cor.texto2 }}>Complemento</p>
            <p style={{ fontSize: 16, color: Cor.texto1 }}>
              Complemento do Endereço
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottom: "1px solid" + Cor.texto2 + 50,
              paddingBottom: 5,
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <p style={{ fontSize: 11, color: Cor.texto2 }}>Cidade</p>
              <p style={{ fontSize: 16, color: Cor.texto1 }}>Cidade</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <p style={{ fontSize: 11, color: Cor.texto2 }}>CEP</p>
              <p style={{ fontSize: 16, color: Cor.texto1 }}>45612-123</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <p style={{ fontSize: 11, color: Cor.texto2 }}>UF</p>
              <p style={{ fontSize: 16, color: Cor.texto1 }}>BA</p>
            </div>
          </div>
        </div>
        {/*Fim Coluna Lado Esquerdo detalhes Cliente */}
        {/*Coluna Lado Direito detalhes Cliente*/}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "48%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid" + Cor.texto2 + 50,
              paddingBottom: 5,
            }}
          >
            <p style={{ fontSize: 11, color: Cor.texto2 }}>Contato Principal</p>
            <p style={{ fontSize: 16, color: Cor.texto1 }}>Nome Completo</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid" + Cor.texto2 + 50,
              paddingBottom: 5,
            }}
          >
            <p style={{ fontSize: 11, color: Cor.texto2 }}>E-mail</p>
            <p style={{ fontSize: 16, color: Cor.texto1 }}>empresa@mail.com</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid" + Cor.texto2 + 50,
              paddingBottom: 5,
            }}
          >
            <p style={{ fontSize: 11, color: Cor.texto2 }}>Telefone</p>
            <p style={{ fontSize: 16, color: Cor.texto1 }}>+55 11 99999-9999</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "25%",
                height: 100,
                backgroundColor: Cor.base2,
                borderRadius: 22,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid" + Cor.primaria + 50,
                cursor: "pointer",
                boxShadow: Cor.sombra,
              }}
            >
              <p
                style={{
                  fontFamily: "Icone",
                  fontSize: 30,
                  color: Cor.primaria,
                  fontWeight: "bold",
                }}
              >
                add_home_work
              </p>
              <p
                style={{ textAlign: "center", fontSize: 12, color: Cor.texto1 }}
              >
                Unidade
              </p>
            </div>
            <div
              style={{
                width: "30%",
                height: 100,
                backgroundColor: Cor.base2,
                borderRadius: 22,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid" + Cor.primaria + 50,
                boxShadow: Cor.sombra,
                cursor: "pointer",
              }}
            >
              <p
                style={{
                  fontFamily: "Icone",
                  fontSize: 30,
                  color: Cor.primaria,
                  fontWeight: "bold",
                }}
              >
                person_add
              </p>
              <p
                style={{ textAlign: "center", fontSize: 12, color: Cor.texto1 }}
              >
                Solicitante
              </p>
            </div>
            <div
              style={{
                width: "35%",
                height: 100,
                backgroundColor: Cor.base2,
                borderRadius: 22,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid" + Cor.primaria + 50,
                boxShadow: Cor.sombra,
                cursor: "pointer",
              }}
            >
              <p
                style={{
                  fontFamily: "Icone",
                  fontSize: 30,
                  color: Cor.primaria,
                  fontWeight: "bold",
                }}
              >
                arrows_input
              </p>
              <p
                style={{ textAlign: "center", fontSize: 12, color: Cor.texto1 }}
              >
                Centro de Custo
              </p>
            </div>
          </div>
        </div>
        {/*Fim Coluna Lado Direito detalhes Cliente */}
      </div>
    </div>
  );
}

function TabelaSolicitantes() {
  const Cor = useTema().Cor;
  return (
    <div
      style={{
        width: "50%",
        height: 350,
        backgroundColor: Cor.base2,
        borderRadius: 22,
        boxShadow: Cor.sombra,
      }}
    ></div>
  );
}

function TabelaCentroCusto() {
  const Cor = useTema().Cor;
  return (
    <div
      style={{
        width: "50%",
        height: 350,
        backgroundColor: Cor.base2,
        borderRadius: 22,
        boxShadow: Cor.sombra,
      }}
    ></div>
  );
}

function TabelaUnidadesCliente() {
  const Cor = useTema().Cor;
  return (
    <div
      style={{
        width: "100%",
        height: 350,
        backgroundColor: Cor.base2,
        borderRadius: 22,
        boxShadow: Cor.sombra,
      }}
    ></div>
  );
}

function ExcluirCliente({
  setCxAlertaExcluirCliente,
}: {
  setCxAlertaExcluirCliente: any;
}) {
  const Cor = useTema().Cor;
  return (
    <div
      style={{
        width: "100%",
        height: 100,
        border: "2px solid" + Cor.atencao + 60,
        borderRadius: 22,
        backgroundColor: Cor.base2,
        boxShadow: Cor.sombra,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          alignItems: "center",
          gap: 15,
        }}
      >
        <div
          style={{
            height: "100%",
            aspectRatio: 1,
            backgroundColor: Cor.atencao + 50,
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Icone",
              color: Cor.atencao,
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            warning
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: 20,
              color: Cor.atencao,
              fontWeight: "bold",
            }}
          >
            Zona Perigosa
          </p>
          <p style={{ fontSize: 12, color: Cor.texto1 }}>
            O cliente será <strong>excluído permanentemente</strong>, incluindo
            histórico de vouchers, modelos de roteiros fixos,
            <br /> solicitantes, centro de custo e unidades. Esta ação é
            irreversível e não pode ser desfeita.
          </p>
        </div>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", gap: 10, width: "30%" }}
      >
        <button
          style={{
            backgroundColor: Cor.primaria + 30,
            color: Cor.primaria,
            width: "50%",
            border: "none",
            borderRadius: 14,
            padding: "10px 0px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            cursor: "pointer",
          }}
        >
          <p
            style={{
              fontFamily: "Icone",
              color: Cor.primaria,
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            block
          </p>
          <p style={{ fontWeight: "bold" }}>Bloquear</p>
        </button>
        <button
          style={{
            backgroundColor: Cor.atencao + 30,
            width: "50%",
            color: Cor.atencao,
            border: "none",
            borderRadius: 14,
            padding: "10px 0px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            cursor: "pointer",
          }}
          onClick={() => {
            setCxAlertaExcluirCliente(true);
          }}
        >
          <p
            style={{
              fontFamily: "Icone",
              color: Cor.atencao,
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            delete
          </p>
          <p style={{ fontWeight: "bold" }}>Excluir</p>
        </button>
      </div>
    </div>
  );
}

function AlertasExcluirCliente({
  cxAlertaExcluirCliente,
  setCxAlertaExcluirCliente,
}: {
  setCxAlertaExcluirCliente: any;
  cxAlertaExcluirCliente: any;
}) {
  const Cor = useTema().Cor;
  const navigate = useNavigate();
  const [verSenha, setVerSenha] = useState(false);
  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: Cor.base2 + "80", // transparência
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          zIndex: 11,
          top: 0,
          left: 0,
          backdropFilter: "blur(2.5px)",
        }}
        onClick={() => {
          setCxAlertaExcluirCliente(false);
        }}
      />
      <div
        style={{
          width: 400,
          backgroundColor: Cor.base,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: 12,
          left: "calc(50% - 200px)",
          top: "calc(50% - 200px)",
          boxShadow: Cor.sombra,
          borderRadius: 22,
          border: "1px solid" + Cor.texto1 + 30,
        }}
      >
        <div
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: 80,
              aspectRatio: 1,
              backgroundColor: Cor.atencao + 50,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "Icone",
                color: Cor.atencao,
                fontSize: 40,
                fontWeight: "bold",
              }}
            >
              warning
            </p>
          </div>
          <p style={{ fontSize: 12, color: Cor.texto1, textAlign: "justify" }}>
            O cliente será <strong>excluído permanentemente</strong>, incluindo
            histórico de vouchers, modelos de roteiros fixos, solicitantes,
            centro de custo e unidades. Esta ação é irreversível e não pode ser
            desfeita.
          </p>
        </div>
        <div
          style={{ width: "100%", height: 1, backgroundColor: Cor.texto1 + 30 }}
        />
        <div
          style={{
            width: "100%",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <p style={{ fontSize: 12, color: Cor.texto1, textAlign: "justify" }}>
            Para confirmar a exclusão, digite sua senha:
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              backgroundColor: Cor.texto1 + 10,
              borderRadius: 22,
              alignItems: "center",
              padding: "5px 20px",
            }}
          >
            <input
              type={verSenha ? "text" : "password"}
              name=""
              id=""
              style={{
                outline: "none",
                border: "none",
                width: "100%",
                backgroundColor: "transparent",
                color: Cor.texto1,
              }}
              placeholder="Digite sua senha"
              color="white"
            />
            <p
              style={{
                fontFamily: "Icone",
                color: Cor.texto2,
                fontSize: 24,
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => {
                setVerSenha(!verSenha);
              }}
            >
              {verSenha ? "visibility_off" : "visibility"}
            </p>
          </div>
        </div>
        <div
          style={{ width: "100%", height: 1, backgroundColor: Cor.texto1 + 30 }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-end",
            padding: 20,
          }}
        >
          <button
            style={{
              backgroundColor: Cor.texto1 + 10,
              color: Cor.texto1,
              border: "1px solid" + Cor.texto2,
              borderRadius: 14,
              padding: "5px 20px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
            }}
            onClick={() => {
              setCxAlertaExcluirCliente(false);
            }}
          >
            <p style={{ fontWeight: "bold" }}>Cancelar</p>
          </button>
          <button
            style={{
              backgroundColor: Cor.atencao + 30,
              color: Cor.texto1,
              border: "none",
              borderRadius: 14,
              padding: "5px 20px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
            }}
            onClick={() => navigate("/empresas")}
          >
            <p
              style={{
                fontFamily: "Icone",
                color: Cor.atencao,
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              delete
            </p>
            <p style={{ fontWeight: "bold" }}>Excluir</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerEmpresa;
