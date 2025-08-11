import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { H2, H2Subtitulo } from "../components/Texto";
import Button from "../components/Button"

export function Cadastro() {
  return (
    <div className="bg-azul text-azulescuro min-h-screen flex flex-col">

      <header className="bg-white w-full flex items-center justify-between px-6 py-3 md:py-4 mt-6 shadow-md">
        <div className="flex items-center gap-2">
          <Link to="/">
          <img src={logo} alt="logo" className="h-[57px] md:h-[95px]" />
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-[noticia-text] font-normal text-[22px] md:text-[36px] leading-none">SCENT-SATIONAL</h1>
          <h2 className="font-[noticia-text] font-normal text-[14px] md:text-[22px] leading-none">THERAPY</h2>
        </div>


        <div className="hidden md:flex items-center gap-4">
          <img src="" alt="Alterar tema" className="h-5 w-5" />
        </div>


        <div className="flex md:hidden items-center gap-4">
          <img src="" alt="Alterar tema" className="h-5 w-5" />
          <img src="" alt="Menu" className="h-6 w-6" />
        </div>
      </header>


      <main className="flex flex-1 justify-center items-center px-4">
        <div className="bg-white rounded-[30px] md:rounded-[41px] p-6 md:p-10 w-full max-w-[732px] flex flex-col justify-center items-center gap-6 shadow">
          <H2 className="text-center">Crie sua conta</H2>

          <div className="flex items-center gap-3 border border-gray-300 rounded-[15px] h-[56px] md:h-[82px] w-[310px] md:w-[547px] px-4">
            <img src="" alt="icone email" className="h-5 w-5" />
            <input type="email" placeholder="Digite seu e-mail" className="flex-1 outline-none text-base"/>
          </div>

          <div className="flex items-center gap-3 border border-gray-300 rounded-[15px] h-[56px] md:h-[82px] w-[310px] md:w-[547px] px-4">
            <img src="" alt="icone cadeado" className="h-5 w-5" />
            <input type="password" placeholder="Digite sua senha" className="flex-1 outline-none text-base"/>
            <img src="" alt="icone olho" className="h-5 w-5 cursor-pointer" />
          </div>

          <div className="flex items-center gap-3 border border-gray-300 rounded-[15px] h-[56px] md:h-[82px] w-[310px] md:w-[547px] px-4">
            <img src="" alt="icone cadeado" className="h-5 w-5" />
            <input type="password-confirmation" placeholder="Confirme sua senha" className="flex-1 outline-none text-base"/>
            <img src="" alt="icone olho" className="h-5 w-5 cursor-pointer" />
          </div>


          <Button text="Entrar"/>


          <H2Subtitulo className="text-center text-sm md:text-base">
            Já possui uma conta?{" "}
            <Link to="/login" className="text-azulescuro font-bold hover:underline"> Fazer login </Link>
          </H2Subtitulo>
        </div>
      </main>
    </div>
  );
}
