
"use client";

import { useState } from "react";

export default function Home() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operacion, setOperacion] = useState("suma");
  const [resultado, setResultado] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calcular() {
    setError("");
    setResultado(null);

    if (numero1.trim() === "" || numero2.trim() === "") {
      setError("Debes ingresar los dos números.");
      return;
    }

    const n1 = Number(numero1);
    const n2 = Number(numero2);

    if (!Number.isFinite(n1) || !Number.isFinite(n2)) {
      setError("Ingresa solamente números válidos.");
      return;
    }

    let total = 0;

    switch (operacion) {
      case "suma":
        total = n1 + n2;
        break;
      case "resta":
        total = n1 - n2;
        break;
      case "multiplicacion":
        total = n1 * n2;
        break;
      case "division":
        if (n2 === 0) {
          setError("No se puede dividir entre cero.");
          return;
        }
        total = n1 / n2;
        break;
    }

    setResultado(total);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="w-full max-w-md rounded-2xl border border-red-900 bg-zinc-950 p-8 shadow-2xl shadow-red-950/40">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-wide text-red-600">
            CALCULADORA
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Operaciones matemáticas
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-red-600"></div>
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-medium text-zinc-300">
            Primer número
          </label>
          <input
            type="text"
            inputMode="decimal"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
            placeholder="Escribe un número"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
          />
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-medium text-zinc-300">
            Segundo número
          </label>
          <input
            type="text"
            inputMode="decimal"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
            placeholder="Escribe otro número"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
          />
        </div>

        <div className="mb-7">
          <label className="mb-2 block font-medium text-zinc-300">
            Operación matemática
          </label>
          <select
            value={operacion}
            onChange={(e) => setOperacion(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-white outline-none focus:border-red-600"
          >
            <option value="suma">Suma (+)</option>
            <option value="resta">Resta (-)</option>
            <option value="multiplicacion">Multiplicación (×)</option>
            <option value="division">División (÷)</option>
          </select>
        </div>

        <button
          onClick={calcular}
          className="w-full rounded-lg bg-red-700 p-3 font-bold text-white transition hover:bg-red-600 active:scale-95"
        >
          CALCULAR RESULTADO
        </button>

        {error && (
          <p className="mt-5 rounded-lg border border-red-800 bg-red-950 p-3 text-center text-sm text-red-400">
            {error}
          </p>
        )}

        {resultado !== null && (
          <div className="mt-6 rounded-xl border border-red-800 bg-red-950/50 p-5 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-400">
              Resultado
            </p>
            <p className="mt-2 break-all text-3xl font-extrabold text-red-500">
              {resultado}
            </p>
          </div>
        )}

        <p className="mt-8 text-center text-xs text-zinc-600">
          Calculadora Matemática © 2026
        </p>
      </div>
    </main>
  );
}
