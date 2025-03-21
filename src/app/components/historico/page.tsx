import Image from "next/image"

export default function Historico() {
  // Sample history data
  const incidents = [
    {
      id: 1,
      title: "Falha no Sistema de Sinalização",
      description: "Falha no sistema de sinalização na estação Santo Amaro causando atrasos.",
      severity: "Alta",
      image: "/image/default-image.png",
      date: "05/03/2024",
      status: "Resolvido",
    },
    {
      id: 2,
      title: "Problema na Escada Rolante",
      description: "Escada rolante com funcionamento intermitente na estação Giovanni Gronchi.",
      severity: "Média",
      image: "/image/default-image.png",
      date: "28/02/2024",
      status: "Em andamento",
    },
  ]

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-6 text-center">Histórico de Incidentes</h1>

      <div id="registros-container" className="bg-container p-4 rounded-lg border border-[#ddd] m-5">
        {incidents.map((incident) => (
          <div key={incident.id} className="notifica flex text-[20px] mb-6 border-b border-gray-300 pb-4">
            <div className="notifica-foto w-[40%] flex p-10">
              <Image
                src={incident.image || '/image/default-image.png'}
                alt="Imagem do incidente"
                width={150}
                height={150}
                className="w-[30%] h-auto rounded-lg mt-4 border border-[#ddd]"
              />
            </div>
            <div className="txtNotifica w-[50%] block text-left break-words ml-2.5">
              <h3 className="font-bold">{incident.title}</h3>
              <p>{incident.description}</p>
              <p className="mt-2">
                <span className="font-semibold">Gravidade:</span>
                <span
                  className={`ml-2 ${
                    incident.severity === "Alta"
                      ? "text-red-600"
                      : incident.severity === "Média"
                        ? "text-yellow-600"
                        : "text-green-600"
                  }`}
                >
                  {incident.severity}
                </span>
              </p>
              <p className="mt-1">
                <span className="font-semibold">Status:</span>
                <span className={`ml-2 ${incident.status === "Resolvido" ? "text-green-600" : "text-blue-600"}`}>
                  {incident.status}
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-2">Data: {incident.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

