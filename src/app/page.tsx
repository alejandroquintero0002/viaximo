"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "/src/app/assets/logo.png";
import Link from "next/link";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('local');
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
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

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const renderMenu = (menu: string) => {
    switch(menu) {
      case 'tienda':
        return (
          <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5`}>
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <Link href="/tienda" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`} role="menuitem">eSIMs</Link>
              <Link href="/tienda" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`} role="menuitem">Tarjetas SIM físicas</Link>
              <Link href="/tienda" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`} role="menuitem">Ofertas especiales</Link>
            </div>
          </div>
        );
      case 'colabora':
        return (
          <div className={`absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5`}>
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <Link href="/colabora" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`} role="menuitem">Programa de afiliados</Link>
              <Link href="/colabora" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`} role="menuitem">Colaboraciones empresariales</Link>
              <Link href="/colabora" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`} role="menuitem">Oportunidades de trabajo</Link>
            </div>
          </div>
        );
      case 'acerca':
        return (
          <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5`}>
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <Link href="/acerca" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`} role="menuitem">Nuestra historia</Link>
              <Link href="/acerca" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`} role="menuitem">Equipo</Link>
              <Link href="/acerca" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`} role="menuitem">Contacto</Link>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'local':
        return (
          <div className="mt-4">
            <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>eSIM locales</h3>
            <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Conectividad perfecta para tu destino específico. Ideal para viajes a un solo país.
            </p>
          </div>
        );
      case 'regional':
        return (
          <div className="mt-4">
            <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>eSIM regionales</h3>
            <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Cobertura en múltiples países de una región. Perfecto para viajes por Europa, Asia, o América.
            </p>
            <ul className={`list-disc list-inside mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Europa (30+ países)</li>
              <li>Asia-Pacífico (15+ países)</li>
              <li>América (10+ países)</li>
            </ul>
          </div>
        );
      case 'global':
        return (
          <div className="mt-4">
            <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>eSIM globales</h3>
            <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Conectividad mundial en más de 100 países. La mejor opción para viajeros frecuentes o vuelta al mundo.
            </p>
            <ul className={`list-disc list-inside mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Cobertura en más de 100 países</li>
              <li>Planes flexibles desde 7 hasta 30 días</li>
              <li>Datos de alta velocidad en todas las regiones</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
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
        Mantente conectado en donde sea que viajes con tarifas accesibles
        </h1>
   
        <div className={`max-w-3xl mx-auto mb-8`}>
          <input
            type="text"
            placeholder="Busca paquetes de datos en más de 200 países y regiones"
            className={`w-full p-4 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 border-gray-300 text-black placeholder-gray-600'} border rounded-full`}
          />
        </div>
        <div className="flex justify-center space-x-8 mt-8">
          <button 
            onClick={() => setActiveTab('local')} 
            className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} ${activeTab === 'local' ? 'font-bold' : ''}`}
          >
            eSIM locales
          </button>
          <button 
            onClick={() => setActiveTab('regional')} 
            className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} ${activeTab === 'regional' ? 'font-bold' : ''}`}
          >
            eSIM regionales
          </button>
          <button 
            onClick={() => setActiveTab('global')} 
            className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} ${activeTab === 'global' ? 'font-bold' : ''}`}
          >
            eSIM globales
          </button>
        </div>

        {renderTabContent()}

        <h2 className="text-2xl font-bold mt-12 mb-6">Países populares</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <button className={`p-4 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg flex items-center space-x-2`}>
            <span className="text-2xl">🇨🇴</span>
            <span>Colombia</span>
          </button>
          {/* Añade más botones de países aquí */}
        </div>
        <button className="mt-8 w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          MOSTRAR MÁS DE 200 PAÍSES
        </button>
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
          <button onClick={() => setActiveTab('local')} className="flex flex-col items-center text-gray-700">
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