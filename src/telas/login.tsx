import { useState } from "react";
import useTema from "../hooks/modoTema";
import { useNavigate } from "react-router-dom";

function Login() {
  const { Cor, tema } = useTema();

  const navigator = useNavigate();

  const [verSenha, setVerSenha] = useState("password");

  console.log(tema);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: Cor.base,
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: Cor.primaria,
          width: "60vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <img
          src="src/assets/image/img-bg.png"
          alt="S"
          style={{
            width: "60vw",
            objectFit: "contain",
          }}
        />
        <div
          style={{
            width: "60%",
            height: "100px",
            backgroundColor: Cor.primaria + "cc",
            position: "absolute",
            bottom: "5%",
            left: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "30px",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "150px",
              height: "50px",
              border: "2px solid" + "#F4F4F4",
              borderRadius: "22px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                color: "#F4F4F4",
                fontFamily: "Icone",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              adb
            </p>
            <p style={{ color: "#F4F4F4" }}>Android</p>
          </div>
          <div
            style={{
              width: "150px",
              height: "50px",
              border: "2px solid" + "#F4F4F4",
              borderRadius: "22px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                color: "#F4F4F4",
                fontFamily: "Icone",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              ios
            </p>
            <p style={{ color: "#F4F4F4" }}>IOS</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "#F4F4F4" }}>
              Baixe o app NeoFrota Gestor<br></br>e opere na palma da mão.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: Cor.base,
          width: "40vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <img
          src={Cor.logo}
          alt="Logo"
          style={{
            width: "auto",
            height: "70px",
            marginBottom: "10px",
            marginTop: "10px",
          }}
        />

        <h3
          style={{ color: Cor.texto1, marginBottom: "15px", marginTop: "15px" }}
        >
          Login
        </h3>
        <div
          style={{
            backgroundColor: Cor.base2,
            width: "70%",
            height: "50px",
            borderRadius: "22px",
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
          }}
        >
          <input
            placeholder="Seu e-mail aqui"
            type="email"
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              color: Cor.texto1,
            }}
          />
        </div>
        <div
          style={{
            backgroundColor: Cor.base2,
            width: "70%",
            height: "50px",
            borderRadius: "22px",
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
          }}
        >
          <input
            placeholder="Sua senha aqui"
            type={verSenha}
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              color: Cor.texto1,
            }}
          />
          <p
            style={{
              color: Cor.texto1 + 50,
              fontFamily: "Icone",
              fontSize: "24px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => {
              if (verSenha === "password") {
                setVerSenha("text");
              } else {
                setVerSenha("password");
              }
            }}
          >
            {verSenha === "password" ? "visibility" : "visibility_off"}
          </p>
        </div>
        <div
          style={{
            cursor: "pointer",
            width: "50%",
            padding: "10px 20px",
            backgroundColor: Cor.primaria,
            borderRadius: "18px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={() => {
            navigator("/home");
          }}
        >
          <p style={{ color: Cor.texto1, fontWeight: "500" }}>Login</p>
        </div>
      <text style={{ color: Cor.primaria, fontWeight: "500" }}>
        Esqueci minha senha
      </text>
      </div>
    </div>
  );
}

export default Login;
