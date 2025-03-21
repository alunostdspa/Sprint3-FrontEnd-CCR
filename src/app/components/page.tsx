"use client"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const redirecionarRegistro = () => {
    router.push("./selecao-incidente")
  }

  const redirecionarHistorico = () => {
    router.push("/historico")
  }

  const redirecionarNotificacao = () => {
    router.push("/notificacao")
  }

  return (
    <>
    
      <div className="flex flex-col items-center mt-10 ">
      <div className="flex w-3/6 h-48 mb-16">
        <button className="w-full h-48 text-4x1 bg-red-900 text-white rounded-full border-0 p-4 cursor-pointer transition-colors duration-300 hover:bg-red-700" onClick={redirecionarRegistro}>
          <i className="fa-solid fa-pen-to-square text-2xl mb-2"></i>
          <br />
          Registro Incidente
        </button>
      </div>

      <div className="flex gap-15   w-3/6 h-48 mb-16">
        <button className="w-full h-48 text-4x1 bg-red-900 text-white rounded-full border-0 p-4 cursor-pointer transition-colors duration-300 mr-10 hover:bg-red-700" onClick={redirecionarHistorico}>
          <i className="fas fa-history text-xl mb-2"></i>
          <br />
          Histórico de Incidentes
        </button>

        <button className="w-full h-48 text-4x1 bg-red-900 text-white rounded-full border-0 p-4 cursor-pointer transition-colors duration-300 hover:bg-red-700" onClick={redirecionarNotificacao}>
          <i className="fas fa-bell text-xl mb-2"></i>
          <br />
          Notificações
        </button>
      </div>
    </div>
    
    </>
  );
}
