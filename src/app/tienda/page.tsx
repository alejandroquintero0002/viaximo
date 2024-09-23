"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/src/app/assets/logo.png";

export default function Tienda() {
  const [isDarkMode] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <header className={`${isDarkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'} border-b`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src={logo} 
              alt="VIAXIMO logo" 
              width={300} 
              height={150} 
              className={`mr-4 ${isDarkMode ? 'invert' : ''}`}
            />
          </div>
          <Link href="/" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>
            Volver a la página principal
          </Link>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Tienda VIAXIMO</h1>
        {/* ... resto del contenido sin cambios ... */}
      </main>
      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} py-8`}>
        <div className="container mx-auto px-4">
          <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            © 2023 VIAXIMO. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}