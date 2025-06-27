import { useTema } from "../hooks/temaContext";

function CardHistFaturamento() {
  const Cor = useTema().Cor;
  return (
    <>
      <div
        style={{
          width: "60%",
          height: "100%",
          backgroundColor: Cor.base2,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: 15,
          borderRadius: 22,
          boxShadow: Cor.sombra,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              gap: 5,
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: Cor.primaria,
                borderRadius: 5,
              }}
            >
              <p
                style={{
                  fontFamily: "Icone",
                  fontWeight: "bold",
                  color: Cor.base2,
                }}
              >
                bar_chart_4_bars
              </p>
            </div>
            <p
              style={{ fontSize: 16, color: Cor.primaria, fontWeight: "bold" }}
            >
              Faturamento
            </p>
          </div>
          <p style={{ fontSize: 12, color: Cor.texto2, width:200 }}>Histórico ultimos 12 meses</p>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#Fff55515",
          }}
        ></div>
      </div>
    </>
  );
}

export default CardHistFaturamento;
