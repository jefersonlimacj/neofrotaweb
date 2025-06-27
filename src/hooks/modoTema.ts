import { useEffect, useState } from "react";
import { CorClara, CorEscura } from "../assets/cores";

export default function useTema() {
  const [tema, setTema] = useState<"light" | "dark">("light");

  // Detecta e carrega o tema salvo no localStorage ou do sistema
  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "light" || temaSalvo === "dark") {
      setTema(temaSalvo);
    } else {
      // Detecta preferência do sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTema(prefersDark ? "dark" : "light");
    }
  }, []);

  // Atualiza localStorage sempre que o tema mudar
  useEffect(() => {
    localStorage.setItem("tema", tema);
  }, [tema]);

  // Função para alternar o tema manualmente
  const alternarTema = () => {
    setTema((prev) => (prev === "light" ? "dark" : "light"));
  };

  const Cor = tema === "dark" ? CorEscura : CorClara;

  return { tema, Cor, alternarTema };
}
