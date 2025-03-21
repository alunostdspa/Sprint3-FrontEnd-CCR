"use client"
import type React from "react"
import { useState } from "react"

export default function Perfil() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)
    
    try {
      // Validação básica
      if (!email || !password) {
        throw new Error("Email e senha são obrigatórios")
      }
      
      // Simulação de login (necessita da API)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mostra mensagem de sucesso
      alert("Login realizado com sucesso!")
      
      // Limpa os campos após login bem-sucedido
      setEmail("")
      setPassword("")
      
      // Redireciona para página principal
      window.location.href = "/"
      
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao fazer login")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center p-5">
      <div className="bg-container flex flex-col items-center text-center p-8 rounded-lg w-full md:w-[30%] my-[2%] bg-gray-400">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="w-full">
          {error && (
            <div className="text-red-500 text-sm mb-4">
              {error}
            </div>
          )}
          <div className="mb-4 text-left">
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 text-base border border-[#ddd] rounded"
              required
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block mb-2">Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2.5 text-base border border-[#ddd] rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-red-900 text-white text-sm rounded-md border-0 px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-red-700 m-10"
            disabled={isLoading}
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  )
}