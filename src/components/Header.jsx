import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import {  H2Subtitulo } from "../components/Texto"

export default function Header() {
    return(
        <header className="bg-white w-full flex items-center justify-between px-6 py-3 md:py-4 pt-6 shadow-md ">
            <div className="flex items-center gap-2">
            <Link to="/">
            <img src={logo} alt="logo" className="h-[57px] md:h-[95px]" />
            </Link>
            </div>

            <div className="flex items-start gap-13">
                <H2Subtitulo><Link to="/manual" className="hover:underline">Manual</Link></H2Subtitulo>
                <H2Subtitulo><Link to="/produtos" className="hover:underline">Produtos</Link></H2Subtitulo>
                <H2Subtitulo><Link to="/quem-somos" className="hover:underline">Quem Somos ?</Link></H2Subtitulo>
                <H2Subtitulo><Link to="/referencias" className="hover:underline">Referências</Link></H2Subtitulo>
                <H2Subtitulo><Link to="/jogo" className="hover:underline">Jogo</Link></H2Subtitulo>
            </div>


            <div className="hidden md:flex items-center gap-4">
            <img src="" alt="Alterar tema" className="h-5 w-5" />
            </div>


            <div className="flex md:hidden items-center gap-4">
            <img src="" alt="Alterar tema" className="h-5 w-5" />
            <img src="" alt="Menu" className="h-6 w-6" />
            </div>
        </header>
    )
}