import Image from "next/image"


export default function Integrantes() {
  // Sample team members data
  const teamMembers = [
    {
      id: 1,
      name: "Fernando Nachtigall Tessmann",
      rm: "RM559617 1TDSPR",
      github: "ftessmann",
      linkedin: "fernando-tessmann-75086bb6",
      image: "/image/integrante_F.jpg",
    },
    {
      id: 2,
      name: "Nome: Ruan Nunes Gaspar",
      rm: "RM559567 1TDSPA",
      github: "RuanGaspar-TDSPA",
      linkedin: "ruan-gaspar-5664a0222",
      image: "/image/integrante_RU.jpg",
    },
    {
      id: 3,
      name: "Rodrigo Paes Morales",
      rm: "RM560209 1TDSPA",
      github: "RodrigoPMorales",
      linkedin: "rodrigo-paes-morales-b26698203",
      image: "/image/integrante_RO.jpg",
    },
  ]

  return (
    <div className="p-5">
      <div className="p-[5%] m-[5%] bg-[#D9D9D9] rounded-lg">
        <div className="flex flex-col items-center mb-[10%]">
          <h1 className="text-3xl font-bold mb-8">Equipe FutureFix</h1>
          <br/>
          <a
            href={`https://github.com/alunostdspa`}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2.5"
           >
            <i className="fab fa-github text-5xl"></i>
          </a>
          <br/>
          <br/>

          <div className="flex flex-col items-start gap-5">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center gap-4">
                <Image
                  src={member.image}
                  alt={`${member.name}`}
                  width={200}
                  height={200}
                  className="w-[40%] rounded-full"
                />

                <div className="w-full flex flex-col justify-center items-start">
                  <p className="text-[1.375rem] text-left my-1.5 font-bold">{member.name}</p>
                  <p className="text-[1.375rem] text-left my-1.5">{member.rm}</p>
                  <div className="flex mt-2">
                    <a
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2.5"
                    >
                      <i className="fab fa-github text-2xl"></i>
                    </a>
                    <a
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2.5"
                    >
                      <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

