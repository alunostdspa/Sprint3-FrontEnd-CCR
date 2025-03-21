"use client"

import { useRouter } from "next/navigation"

export default function SelecaoIncidente() {
  const router = useRouter()

  const redirecionarIncidente = () => {
    router.push("/registro-incidente")
  }

  const redirecionarIncidenteFoto = () => {
    router.push("/registro-incidente-foto")
  }

  return (
    <div className="px-4 ">
      <br />
      <button
        className= "bg-red-900 text-white text-sm rounded-md border-0 px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-red-700"
        onClick={() => router.back()}
      >
        <i className="fa-solid fa-arrow-left mr-2"></i>
        Voltar
      </button>

      <section className=" flex flex-col items-center mt-10 ">
        <div className="flex w-3/6 h-48 mb-16">
          <button className="w-full h-48 text-4x1 bg-red-900 text-white rounded-full border-0 cursor-pointer transition-colors duration-300 hover:bg-red-700 mr-10" onClick={redirecionarIncidenteFoto}>
            <i className="fa-solid fa-screwdriver-wrench text-3xl mb-3"></i>
            <br />
            Manutenção
          </button>

          <button className="w-full h-48 text-4x1 bg-red-900 text-white rounded-full border-0 cursor-pointer transition-colors duration-300 hover:bg-red-700" onClick={redirecionarIncidente}>
            <i className="fa-solid fa-shield-halved text-3xl mb-3"></i>
            <br />
            Segurança
          </button>
        </div>

        <div className="flex w-3/6 h-48 mb-16">
          <button className="w-full h-48 text-4x1 bg-red-900 text-white rounded-full border-0 cursor-pointer transition-colors duration-300 hover:bg-red-700 mr-10" onClick={redirecionarIncidente}>
            <i className="fa-solid fa-truck-medical text-3xl mb-3"></i>
            <br />
            Socorro
          </button>

          <button className="w-full h-48 text-4x1 bg-red-900 text-white rounded-full border-0 cursor-pointer transition-colors duration-300 hover:bg-red-700" onClick={redirecionarIncidente}>
            <i className="fa-solid fa-train text-3xl mb-3"></i>
            <br />
            Condutor
          </button>
        </div>
      </section>
    </div>
  )
}

