"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "/src/app/assets/logo.png";
import eSimImage from '../../assets/eSIm.png';

export default function MisESIM() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setIsAuthenticated(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleSignIn = () => {
    router.push("/auth");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <header className={`${isDarkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'} border-b`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src={logo} 
              alt="VIAXIMO logo" 
              width={100} 
              height={50} 
              className={`mr-4 ${isDarkMode ? 'invert' : ''}`}
            />
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => router.back()} className="text-gray-700 hover:text-black">
              ←
            </button>
            <button onClick={toggleDarkMode} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-4">
          Mis eSIM
        </h1>
        <div className="flex justify-center space-x-8 mt-8">
          <button 
            className="text-gray-600 hover:text-black font-bold"
          >
            eSIM actuales
          </button>
          <button 
            className="text-gray-600 hover:text-black"
          >
            eSIM archivadas
          </button>
        </div>
        <div className="mt-8 text-center">
          <Image 
             src={eSimImage} 
            alt="eSIM Image" 
            width={400} 
            height={300} 
            className="mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4">¿Te gustaría ver tus eSIM actuales?</h2>
          <p className="mt-2 text-gray-700">
            Cuando inicies sesión o te registres, verás las eSIM actual aquí.
          </p>
          <button 
            onClick={handleSignIn} 
            className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            INICIAR SESIÓN / REGISTRARSE
          </button>
        </div>
      </main>

      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} py-8`}>
        <div className="container mx-auto px-4">
          <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            © 2023 VIAXIMO. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Menú de navegación inferior para dispositivos móviles */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
        <div className="flex justify-around py-2">
          <button onClick={() => router.push('/')} className="flex flex-col items-center text-gray-700">
            <span>🏬</span>
            <span>Tienda</span>
          </button>
          <Link href="/mis-esim" className="flex flex-col items-center text-gray-700">
            <span>📶</span>
            <span>Mis eSIM</span>
          </Link>
          {/* Ocultar el enlace "Acerca" en dispositivos móviles */}
          <Link href="/acerca" className="hidden md:flex flex-col items-center text-gray-700">
            <span>ℹ️</span>
            <span>Acerca</span>
          </Link>
          {isAuthenticated ? (
            <p className="flex flex-col items-center text-gray-700">Hola, {username}</p>
          ) : (
            <button onClick={handleSignIn} className="flex flex-col items-center text-gray-700">
              <span>🔑</span>
              <span>Iniciar sesión</span>
            </button>
          )}
          {/* Ocultar el botón de "Modo Oscuro" en dispositivos móviles */}
          <button onClick={toggleDarkMode} className="hidden md:flex flex-col items-center text-gray-700">
            {isDarkMode ? '☀️' : '🌙'}
            <span>{isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}</span>
          </button>
        </div>
      </nav>
    </div>
  );
}