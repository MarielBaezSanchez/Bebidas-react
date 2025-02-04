import { ChangeEvent, useMemo, useState } from "react";
import {  NavLink, useLocation } from "react-router-dom";

export default function Header() {

  const { pathname } = useLocation()
  const isHome = useMemo(() => pathname === '/', [pathname])
  const [searchFilters, setSearchFilters] = useState({ 
                                      ingredient: '',
                                      category: ''
                                    })

  function handleChange(
    e: ChangeEvent<HTMLInputElement> | 
    ChangeEvent <HTMLSelectElement>){
      setSearchFilters({
        ...searchFilters,
        [e.target.name]: e.target.value
      })
  }

  return (
    <header className={ isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img src="/logo.svg" alt="logotipo" className="w-32" />
                </div>
                    
                <nav className="flex gap-4">
                        <NavLink className={({ isActive }) => 
                        isActive ? 'text-pink-500 uppercase font-bold' : 
                        'text-white uppercase font-bold'} to='/'>Inicio</NavLink>
                        <NavLink className={({ isActive }) => 
                        isActive ? 'text-purple-500 uppercase font-bold' : 
                        'text-white uppercase font-bold'} to="/favoritos">Favoritos</NavLink>
                    </nav>
            </div>
            {isHome && (
                <form className="md:w-1/2 2xl:w-1/3 bg-orange-500 my-32 p-10 rounded-lg shadow space-y-6">
                  <div className="space-y-4">
                    <label 
                    htmlFor="ingredients"
                    className="block text-white uppercase font-extrabold text-lg">Nombre o ingredientes</label>
                    <input 
                    id="ingredients"
                    type="text"
                    name="ingredients"
                    onChange={handleChange}
                    value={searchFilters.ingredient}
                    className="p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Nombre o Ingrediente. Ej: Yakult, Jugo de naranja, etc."
                    />
                  </div>
                  <div className="space-y-4">
                    <label 
                    htmlFor="category"
                    className="block text-white uppercase font-extrabold text-lg">Categorías</label>
                    <select 
                    id="category"
                    name="category"
                    onChange={handleChange}
                    value={searchFilters.category}
                    className="p-3 w-full rounded-lg focus:outline-none"
                    >
                      <option value="">-- Seleccionaaa --</option>
                      </select>
                  </div>
                  <input 
                  type="submit"
                  value='Buscar recetas'
                  className="cursor-pointer bg-blue-800 hover:bg-orange-900 
                  text-white font-extrabold w-full p-2 rounded-lg uppercase"
                  />
                </form>
            )}
        </div>
    </header>
  )
}
