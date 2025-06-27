import { useState } from "react";
import { useTema } from "../hooks/temaContext";
import { useNavigate } from "react-router-dom";

function EditPerfil() {
  const { Cor, tema, alternarTema } = useTema();
  const [aberto, setAberto] = useState<boolean>(false);
  const Navigator = useNavigate();
  return (
    <>
      <div
        style={{
          width: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          position: "fixed",
          top: "10px",
          right: "15px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            backgroundColor: Cor.base2 + 50,
            width: "200px",
            height: "50px",
            borderRadius: "100px",
            border: "1px solid" + Cor.texto1 + 50,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            padding: "5px",
            justifyContent: "space-between",
            alignItems: "center",
            backdropFilter: "blur(10px)",
            gap: "10px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <img
              src={"../src/assets/image/img-bg.png"}
              alt="Logo"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "100px",
                transition: "width 0.3s ease-in-out",
              }}
            />
            <p style={{ color: Cor.secundaria, fontSize: "14px", fontWeight:"bold" }}>
              Jeferson Lima
            </p>
          </div>
          <p
            style={{
              color: Cor.primaria,
              fontSize: "24px",
              fontFamily: "Icone",
              fontWeight: "bold",
              marginRight: "10px",
              cursor: "pointer",
            }}
            onClick={() => setAberto(!aberto)}
          >
            {aberto ? "close" : "menu"}
          </p>
        </div>
        <div
          style={{
            backgroundColor: Cor.base2 + 50,
            width: "50px",
            height: aberto ? "150px" : "0px",
            borderRadius: aberto ? "0 100px 100px 100px" : 0,
            border: "1px solid" + Cor.texto1 + 50,
            opacity: aberto ? 1 : 0,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            backdropFilter: "blur(3px)",
            position: "absolute",
            transition: "0.3s ease-in-out",
            gap: "10px",
            padding: "5px",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              backgroundColor: Cor.base2,
              border: "1px solid" + Cor.texto1 + 50,
              borderRadius: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              alternarTema();
              setAberto(!aberto);
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
              {tema === "light" ? "moon_stars" : "clear_day"}
            </p>
          </div>
          <div
            style={{
              width: 40,
              height: 40,
              backgroundColor: Cor.base2,
              border: "1px solid" + Cor.texto1 + 50,
              borderRadius: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              localStorage.clear();
              Navigator("/");
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
              logout
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPerfil;
