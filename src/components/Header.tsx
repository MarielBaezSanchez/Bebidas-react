import {  NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-800">
        <div className="max-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img src="/logo.svg" alt="logotipo" className="w-32" />
                </div>

                <nav className="flex gap-4">
                <nav className="flex gap-4">
                        <NavLink className={({ isActive }) => 
                        isActive ? 'text-pink-500 uppercase font-bold' : 
                        'text-white uppercase font-bold'} to='/'>Inicio</NavLink>
                        <NavLink className={({ isActive }) => 
                        isActive ? 'text-purple-500 uppercase font-bold' : 
                        'text-white uppercase font-bold'} to="/favoritos">Favoritos</NavLink>
                    </nav>

                </nav>
            </div>
        </div>
    </header>
  )
}
