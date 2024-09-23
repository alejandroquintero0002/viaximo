"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link"; // Importar Link
import logo from "/src/app/assets/logo.png";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [receiveEmails, setReceiveEmails] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Añadir esta línea
  const router = useRouter();

  const isAuthenticated = false; // Definir isAuthenticated
  const username = ""; // Definir username

  const handleSignIn = () => {
    // Definir handleSignIn
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); // Añadir esta línea
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí deberías implementar la lógica de autenticación o registro real
    if (isLogin) {
      // Lógica de inicio de sesión
      localStorage.setItem("email", email);
    } else {
      // Lógica de registro
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    }
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-yellow-300 via-red-300 to-purple-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <Image
          className="mb-8 mx-auto"
          src={logo}
          alt="Obitify logo"
          width={250}
          height={90}
        />
        <div className="flex mb-6">
          <button 
            className={`flex-1 py-2 ${isLogin ? 'border-b-2 border-blue-500 text-blue-500 font-semibold' : 'text-gray-500'}`}
            onClick={() => setIsLogin(true)}
          >
            Iniciar sesión
          </button>
          <button 
            className={`flex-1 py-2 ${!isLogin ? 'border-b-2 border-blue-500 text-blue-500 font-semibold' : 'text-gray-500'}`}
            onClick={() => setIsLogin(false)}
          >
            Registrarse
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nombre"
              className="w-full p-3 border rounded-md"
              required={!isLogin}
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            className="w-full p-3 border rounded-md"
            required
          />
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full p-3 border rounded-md"
              required
            />
            <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              👁
            </button>
          </div>
          {!isLogin && (
            <>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repite la nueva contraseña"
                className="w-full p-3 border rounded-md"
                required={!isLogin}
              />
              <input
                type="text"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                placeholder="Código de referencia o de cupón (opcional)"
                className="w-full p-3 border rounded-md"
              />
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={receiveEmails}
                  onChange={(e) => setReceiveEmails(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm">Me gustaría recibir correos electrónicos promocionales.</span>
              </label>
            </>
          )}
          {isLogin && (
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                <span className="text-sm">Recordarme</span>
              </label>
              <a href="#" className="text-sm text-blue-500">¿Olvidaste la contraseña?</a>
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            {isLogin ? "INICIAR SESIÓN" : "ACEPTAR Y REGISTRARSE"}
          </button>
        </form>
        {!isLogin && (
          <p className="mt-4 text-xs text-center">
            Al crear una cuenta de Viaximo, acepto los <a href="#" className="text-blue-500">Términos y Condiciones</a>. Obtén más información sobre cómo usamos y protegemos tus datos en nuestra <a href="#" className="text-blue-500">Política de Privacidad</a>.
          </p>
        )}
        <div className="mt-6 text-center text-sm">
          <p>O {isLogin ? "INICIA SESIÓN" : "REGÍSTRATE"} CON</p>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="p-2 bg-black rounded-full"><span className="text-white">🍎</span></button>
            <button className="p-2 bg-blue-600 rounded-full"><span className="text-white">f</span></button>
            <button className="p-2 bg-red-500 rounded-full"><span className="text-white">G</span></button>
          </div>
        </div>
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
    </div>
  );
}