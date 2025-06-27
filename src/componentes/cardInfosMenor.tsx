import { useTema } from "../hooks/temaContext";

function CardInfosMenor({
  tipo,
  tipoVoucher,
  valor,
  valorAnterior,
}: {
  tipo: boolean;
  tipoVoucher: string;
  valor: number;
  valorAnterior: number;
}) {
  const Cor = useTema().Cor;
  return (
    <div
      style={{
        width: "25%",
        height: 130,
        borderRadius: "22px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "5px",
        padding: "15px",
        backgroundColor: Cor.base2,
        boxShadow: Cor.sombra
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
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
              backgroundColor: tipo
                ? Cor.primaria
                : tipoVoucher === "Fixo"
                ? Cor.fixo
                : Cor.extra,
              borderRadius: 5,
            }}
          >
            <p style={{ fontFamily: "Icone", fontWeight: "bold", color: Cor.base2 }}>
              {tipo
                ? "attach_money"
                : tipoVoucher === "Fixo"
                ? "history"
                : "local_taxi"}
            </p>
          </div>
          <p
            style={{
              fontSize: "16px",
              color: tipo
                ? Cor.primaria
                : tipoVoucher === "Fixo"
                ? Cor.fixo
                : Cor.extra,
              fontWeight: "bold",
            }}
          >
            {tipoVoucher}
          </p>
        </div>
        <p
          style={{
            textAlign: "end",
            fontSize: "12px",
            color: Cor.texto2,
          }}
        >
          {tipo ? "Faturamento" : "Voucher"} <br></br>
          {tipoVoucher}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          height: 30,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 5,
        }}
      >
        {tipo ? (
          <p style={{ color: Cor.texto2, alignSelf: "flex-end" }}>R$</p>
        ) : null}
        <h1
          style={{
            color: Cor.texto1,
          }}
        >
          {valor}
        </h1>
        {tipo ? null : (
          <p
            style={{
              textAlign: "end",
              fontSize: "12px",
              color: Cor.texto2,
            }}
          >
            viagens
          </p>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <div
          style={{
            padding: 2,
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor:
              valorAnterior < 0 ? Cor.inativo + 30 : Cor.ativo + 30,
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p
            style={{
              color: valorAnterior < 0 ? Cor.inativo : Cor.ativo,
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {valorAnterior}
          </p>
          <p
            style={{
              color: valorAnterior < 0 ? Cor.inativo : Cor.ativo,
              fontSize: "12px",
            }}
          >
            %
          </p>
        </div>
        <p
          style={{
            textAlign: "end",
            fontSize: "12px",
            color: Cor.texto2,
          }}
        >
          mês anterior
        </p>
      </div>
    </div>
  );
}

export default CardInfosMenor;
