import { useTema } from "../hooks/temaContext";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavMenu({ sidebar }: { sidebar: boolean }) {
  const location = useLocation();
  const { Cor } = useTema();
  console.log(location);
  return (
    <>
      <div style={{ width: "100%", height: "80vh" }}>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            marginTop: 10,
          }}
        >
          {[
            { tela: "Dashboard", icone: "dashboard", path: "/home" },
            { tela: "Empresas", icone: "bubble_chart", path: "/empresas" },
            { tela: "Agregados", icone: "directions_car", path: "/agregados" },
            { tela: "Funcionários", icone: "person", path: "/funcionarios" },
            { tela: "Operação", icone: "mediation", path: "/operacao" },
            { tela: "Financeiro", icone: "money_bag", path: "/financeiro" },
            { tela: "Relatórios", icone: "list", path: "/relatorios" },
            {
              tela: "Configurações",
              icone: "settings",
              path: "/configuracoes",
            },
          ].map(({ tela, icone, path }) => (
            <BtnMenu
              key={path}
              sidebar={sidebar}
              Cor={Cor}
              tela={tela}
              icone={icone}
              ativo={location.pathname === path}
              path={path}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

function BtnMenu({
  ativo,
  sidebar,
  tela,
  Cor,
  icone,
  path,
}: {
  sidebar: boolean;
  ativo: boolean;
  tela: string;
  icone: string;
  Cor: any;
  path: string;
}) {
  const navigate = useNavigate();
  return (
    <>
      <style>{`
             .btn-hover:hover {
                    background-color:${Cor.texto1 + 10};
               }
     `}</style>
      <li
        className="btn-hover"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          cursor: "pointer",
          paddingRight: 10,
        }}
        onClick={() => navigate(`${path}`)}
      >
        {ativo ? (
          <div
            style={{
              width: sidebar ? "5%" : "10%",
              height: 45,
              borderRadius: "0 10px 10px 0",
              backgroundColor: Cor.primaria,
            }}
          />
        ) : (
          <div
            style={{
              width: 5,
              height: 45,
              borderRadius: "0 10px 10px 0",
              backgroundColor: Cor.texto2 + 50,
            }}
          />
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            paddingRight: 10,
            paddingLeft: 10,
            height: 40,
            borderRadius: 14,
            backgroundColor: ativo ? Cor.primaria + 15 : "transparent",
          }}
        >
          <p
            style={{
              fontFamily: "Icone",
              fontWeight: "bold",
              fontSize: "24px",
              color: ativo ? Cor.primaria : Cor.texto2,
            }}
          >
            {icone}
          </p>
          {sidebar ? (
            <p style={{ color: ativo ? Cor.secundaria : Cor.texto2 }}>{tela}</p>
          ) : null}
        </div>
      </li>
    </>
  );
}

export default NavMenu;
