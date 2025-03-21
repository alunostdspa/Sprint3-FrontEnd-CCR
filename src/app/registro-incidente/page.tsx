"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"


export default function RegistroIncidente() {
  const router = useRouter()
  const [gravidade, setGravidade] = useState("")
  const [tipoIncidente, setTipoIncidente] = useState("")
  const [descricao, setDescricao] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para enviar os dados do incidente
    console.log({ gravidade, tipoIncidente, descricao,  })

    // Redirecionar para a página de confirmação ou histórico após o envio
    alert("Incidente registrado com sucesso!")
    router.push("/historico")
  }

  return (
    <div className="px-4">
      <br />
      <button
        className="bg-red-900 text-white text-sm rounded-md border-0 px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-red-700"
        onClick={() => router.back()}
      >
        <i className="fa-solid fa-arrow-left mr-2"></i>
        Voltar
      </button>

      <div className=" mt-10 bg-gray-200 rounded-md m-40 ">
        <form onSubmit={handleSubmit}>
          <legend className="text-[20px] p-2.5 text-center ">Registro de Incidente</legend>

          <div className="">
            <div className="flex gap-5 w-full">
              <div className="w-full md:w-[calc(49%-20px)] m-5">
                <label className="block mb-1.5">Gravidade:</label>
                <select
                  className="w-full p-2.5 border border-[#ccc] rounded-lg transition duration-300"
                  value={gravidade}
                  onChange={(e) => setGravidade(e.target.value)}
                  required
                >
                  <option value="">Selecione a gravidade</option>
                  <option value="baixa">Baixa</option>
                  <option value="media">Média</option>
                  <option value="alta">Alta</option>
                </select>
              </div>

              <div className=" w-full md:w-[calc(49%-20px)] m-5">
                <label className="block mb-1.5">Tipo de Incidente:</label>
                <input
                  type="text"
                  placeholder="Ex: Falha no sistema, Acidente, etc."
                  className="w-full p-2.5 border border-[#ccc] rounded-lg transition duration-300"
                  value={tipoIncidente}
                  onChange={(e) => setTipoIncidente(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="w-full mt-5">
              <label className="text-center m-5">Descrição:</label>
              <textarea
                placeholder="Descreva o incidente em detalhes..."
                className="min-h-[200px] resize-y overflow-y-auto p-2.5 border border-[#ccc] rounded-lg w-full font-sans text-base m-5"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="enviar text-center mt-5">
              <button type="submit" className="bg-red-900 text-white text-sm rounded-md border-0 px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-red-700 m-10">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

