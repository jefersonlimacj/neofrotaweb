import { useTema } from "../hooks/temaContext";
import { useNavigate } from "react-router-dom";

const clientes = [
  {
    id: 1,
    logo: "https://img.freepik.com/vetores-premium/um-logotipo-para-a-empresa-empresa-sobre-um-fundo-branco_1072857-23733.jpg?semt=ais_hybrid&w=740",
    empresa: "Empresa 1",
    contato: "Contato 1",
    telefone: "Telefone 1",
    email: "email1@mail.com",
    cnpj: "000.000.001/0000-01",
  },
  {
    id: 2,
    logo: "https://img.freepik.com/vetores-premium/desenho-de-logotipo-bonito-e-unico-para-empresa-de-comercio-eletronico-e-varejo_1287271-14561.jpg",
    empresa: "Empresa 2",
    contato: "Contato 2",
    telefone: "Telefone 2",
    email: "email2@mail.com",
    cnpj: "000.000.002/0000-02",
  },
  {
    id: 3,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-nuBzsGwqhxuMohWpYeHlzozjgdgH-rquGw&s",
    empresa: "Empresa 3",
    contato: "Contato 3",
    telefone: "Telefone 3",
    email: "email3@mail.com",
    cnpj: "000.000.003/0000-03",
  },
  {
    id: 4,
    logo: "https://png.pngtree.com/png-clipart/20200727/original/pngtree-vector-logo-concept-for-accounting-or-real-estate-company-logo-design-png-image_5137690.jpg",
    empresa: "Empresa 4",
    contato: "Contato 4",
    telefone: "Telefone 4",
    email: "email4@mail.com",
    cnpj: "000.000.004/0000-04",
  },
  {
    id: 5,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7NR0NrclO0OvuAMHnWRiyOsslunuCOt93g&s",
    empresa: "Empresa 5",
    contato: "Contato 5",
    telefone: "Telefone 5",
    email: "email5@mail.com",
    cnpj: "000.000.005/0000-05",
  },
  {
    id: 6,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7NR0NrclO0OvuAMHnWRiyOsslunuCOt93g&s",
    empresa: "Empresa 6",
    contato: "Contato 6",
    telefone: "Telefone 6",
    email: "email6@mail.com",
    cnpj: "000.000.006/0000-06",
  },
  {
    id: 7,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7NR0NrclO0OvuAMHnWRiyOsslunuCOt93g&s",
    empresa: "Empresa 7",
    contato: "Contato 7",
    telefone: "Telefone 7",
    email: "email7@mail.com",
    cnpj: "000.000.007/0000-07",
  },
  {
    id: 8,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7NR0NrclO0OvuAMHnWRiyOsslunuCOt93g&s",
    empresa: "Empresa 8",
    contato: "Contato 8",
    telefone: "Telefone 8",
    email: "email8@mail.com",
    cnpj: "000.000.008/0000-08",
  },
  {
    id: 9,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7NR0NrclO0OvuAMHnWRiyOsslunuCOt93g&s",
    empresa: "Empresa 9",
    contato: "Contato 9",
    telefone: "Telefone 9",
    email: "email9@mail.com",
    cnpj: "000.000.009/0000-09",
  },
  {
    id: 10,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7NR0NrclO0OvuAMHnWRiyOsslunuCOt93g&s",
    empresa: "Empresa 10",
    contato: "Contato 10",
    telefone: "Telefone 10",
    email: "email10@mail.com",
    cnpj: "000.000.010/0000-10",
  },
];

function ListaEmpresasCadastradas() {
  const Cor = useTema().Cor;
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: Cor.base2,
        width: "100%",
        borderRadius: 22,
        padding: 15,
        boxShadow: Cor.sombra,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid" + Cor.texto2 + 50,
          paddingBottom: 10,
          marginBottom: 10,
        }}
      >
        <div>
          <p style={{ fontWeight: "500", color: Cor.primaria }}>
            Lista de Clientes
          </p>
          <p style={{ fontSize: 12, color: Cor.secundaria }}>Cadastros</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontFamily: "Icone",
              fontWeight: "bold",
              fontSize: "24px",
              color: Cor.primaria,
              cursor: "pointer",
            }}
          >
            download
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "5px 15px",
              backgroundColor: Cor.texto2 + 20,
              borderRadius: 22,
              gap: 5,
            }}
          >
            <p
              style={{
                fontFamily: "Icone",
                fontWeight: "bold",
                fontSize: "24px",
                color: Cor.primaria,
              }}
            >
              search
            </p>
            <input
              type="text"
              style={{
                border: "none",
                backgroundColor: "transparent",
                width: "100%",
                outline: "none",
                color: Cor.texto1,
              }}
            />
            <p
              style={{
                fontFamily: "Icone",
                fontWeight: "bold",
                fontSize: "24px",
                color: Cor.primaria,
                cursor: "pointer",
              }}
            >
              close
            </p>
          </div>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <style>
          {`table {
              border-collapse: collapse;
              width: 100%;
               }

            td {
              text-align: left;
              padding: 5px;
              color: ${Cor.texto1};
              border-bottom: 1px solid ${Cor.texto2 + 20};
              }

            tr:nth-child(even) {
              background-color: ${Cor.texto1 + 10};
              }

            tr:hover {
              background-color: ${Cor.texto1 + 20};
              }`}
        </style>
        <table>
          <thead
            style={{
              backgroundColor: Cor.texto2 + 50,
              color: Cor.texto1,
              fontSize: 12,
              textAlign: "left",
            }}
          >
            <tr
              style={{
                borderBottom: "1px solid" + Cor.texto2 + 50,
                height: 30,
              }}
            >
              <th style={{ width: "5%", textAlign: "center" }}>Logo</th>
              <th style={{ width: "20%" }}>Nome</th>
              <th style={{ width: "15%" }}>Contato</th>
              <th style={{ width: "20%" }}>E-mail</th>
              <th style={{ width: "15%" }}>Telefone</th>
              <th style={{ width: "15%" }}>CNPJ</th>
              <th style={{ width: "10%", textAlign: "center" }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={cliente.logo}
                    alt=""
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      objectFit: "cover",
                      objectPosition: "center",
                      boxShadow: "2px 2px 1px rgba(0, 0, 0, 0.05)",
                    }}
                  />
                </td>
                <td style={{ color: Cor.texto1 }}>{cliente.empresa}</td>
                <td style={{ color: Cor.texto1 }}>{cliente.contato}</td>
                <td style={{ color: Cor.texto1 }}>{cliente.email}</td>
                <td style={{ color: Cor.texto1 }}>{cliente.telefone}</td>
                <td style={{ color: Cor.texto1 }}>{cliente.cnpj}</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 25,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Icone",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: Cor.texto1,
                      }}
                      onClick={() => navigate("/verempresa/" + cliente.id)}
                    >
                      visibility
                    </p>
                    <p
                      style={{
                        fontFamily: "Icone",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: Cor.texto1,
                      }}
                    >
                      edit
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            width: "100%",
            height: 40,
            display: "flex",
            flexDirection: "row",
            paddingRight: 20,
            alignItems: "center",
            justifyContent: "flex-end",
            backgroundColor: Cor.texto1 + 50,
            borderRadius: "0 0 16px 16px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button style={{ border: "none", backgroundColor: "transparent" }}>
              <p
                style={{
                  fontFamily: "Icone",
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: Cor.texto1,
                }}
              >
                chevron_left
              </p>
            </button>
            <span
              style={{
                margin: "0 10px",
                color: Cor.texto1,
                fontWeight: "bold",
              }}
            >
              1
            </span>
            <button style={{ border: "none", backgroundColor: "transparent" }}>
              <p
                style={{
                  fontFamily: "Icone",
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: Cor.texto1,
                }}
              >
                chevron_right
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaEmpresasCadastradas;
