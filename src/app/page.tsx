"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "/src/app/assets/logo.png";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
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

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src={logo} 
              alt="Orbitify logo" 
              width={220} 
              height={100} 
              className="mr-4 invert" // Invertimos los colores del logo
            />
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">Tienda</a>
            <div className="relative group">
              <button className="text-gray-300 hover:text-white">Colabora con nosotros</button>
            </div>
            <div className="relative group">
              <button className="text-gray-300 hover:text-white">Acerca de nosotros</button>
            </div>
            {isAuthenticated ? (
              <p className="text-gray-300">Hola, {username}</p>
            ) : (
              <button onClick={handleSignIn} className="text-gray-300 hover:text-white">
                Iniciar sesión / Registrarse
              </button>
            )}
            <select className="text-gray-300 bg-transparent border-none">
              <option value="USD">$ USD</option>
            </select>
            <select className="text-gray-300 bg-transparent border-none">
              <option value="es">🇪🇸 Español (Latinoamérica)</option>
            </select>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-4">
          Mantente conectado en donde sea que viajes con tarifas accesibles
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Más de 10,000,000 personas en el mundo confían en nuestras eSIM
        </p>
        <div className="max-w-3xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Busca paquetes de datos en más de 200 países y regiones"
            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400"
          />
        </div>
        <div className="flex justify-center space-x-8 mt-8">
          <button className="text-gray-400 hover:text-white">eSIM locales</button>
          <button className="text-gray-400 hover:text-white">eSIM regionales</button>
          <button className="text-gray-400 hover:text-white">eSIM globales</button>
        </div>
        <div className="bg-yellow-900 bg-opacity-20 rounded-lg p-4 mt-8 flex items-center justify-between">
          <span className="text-yellow-400">Cómo conseguir tu primera eSIM</span>
          <button className="text-yellow-400">→</button>
        </div>
        <h2 className="text-2xl font-bold mt-12 mb-6">Países populares</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <button className="p-4 bg-gray-800 rounded-lg flex items-center space-x-2 hover:bg-gray-700">
            <span className="text-2xl">🇨🇴</span>
            <span>Colombia</span>
          </button>
          {/* Añade más botones de países aquí */}
        </div>
        <button className="mt-8 w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          MOSTRAR MÁS DE 200 PAÍSES
        </button>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          {/* Añade el contenido del footer aquí */}
        </div>
      </footer>
    </div>
  );
}
