import Image from "next/image"
import img_default from './assets/default-image.png';


export default function Notificacao() {
  // Sample notification data
  const notifications = [
    {
      id: 1,
      title: "Incidente Reportado",
      description: "Um novo incidente foi reportado na linha 5-Lilás.",
      image: "./assets/default-image.png",
      date: "12/03/2024",
    },
    {
      id: 2,
      title: "Manutenção Programada",
      description: "Haverá manutenção programada na linha 17-Ouro no próximo final de semana.",
      image: "./assets/default-image.png",
      date: "10/03/2024",
    },
  ]

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-6 text-center">Notificações</h1>
      
      <div className="bg-container p-4 rounded-lg border border-[#ddd] m-5">
        {notifications.map((notification) => (
          <div key={notification.id} className=" flex text-[20px] mb-6 border-b border-gray-300 pb-4">
            <div className=" w-[40%] flex p-10">
              <Image
                src={img_default}
                alt="Imagem da notificação"
                width={150}
                height={150}
                className="w-[30%] h-auto rounded-lg mt-4 border border-[#ddd]"
              />
            </div>
            <div className="w-[50%] block text-left break-words ml-2.5">
              <h3 className="font-bold">{notification.title}</h3>
              <p>{notification.description}</p>
              <p className="text-sm text-gray-500 mt-2">Data: {notification.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

