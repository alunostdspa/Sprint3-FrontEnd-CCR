import Link from "next/link";
import Image from 'next/image';
import logo from './assets/logo_viamobilidade.png';


export default function Header(){

    return(
        <>
        <header className="bg-white border-b border-gray-200">
      <nav className = "flex justify-end p-2.5 bg-[#9d1919] py-4">
        <div className="flex items-center justify-end px-4">
          <i className="fa-solid fa-user text-gray-600 mr-4" />
          <Link 
            href="/perfil" 
            className=" text-gray-600 hover:text-gray-900 transition-colors"
          >
            Login
          </Link>
        </div>
      </nav>
      
      <div className="h-60 mx-auto bg-gray-300 items-center flex justify-center py-4">
        <Link href="/">
          <div className="relative">
            <Image
              src= {logo}
              alt="Logo Viamobilidade"
              width={600}
              height={100}
              className="h-60 mx-auto bg-gray-300 flex items-center justify-center object-contain"
            />
          </div>
        </Link>
      </div>
      
      <nav className="bg-[#9d1919]">
        <ul className="flex justify-center space-x-8 py-4">
          <li>
            <Link 
              href="/" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/selecao-incidente" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              Registro
            </Link>
          </li>
          <li>
            <Link 
              href="/notificacao" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              Notificações
            </Link>
          </li>
          <li>
            <Link 
              href="/historico" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              Histórico
            </Link>
          </li>
        </ul>
      </nav>
    </header>
        </>
    )
}