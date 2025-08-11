import { H1, H2Subtitulo, P } from "../components/Texto.jsx";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import homeImg from "../assets/home.png";

export function Home() {
  return (
    <div className="bg-azul text-azulescuro min-h-screen flex flex-col ">

      <header className="w-full flex items-center justify-between px-10 mt-3 ">
        <img src={logo} alt="logo" className="h-[57px] md:h-[95px]" />


        <div className="hidden md:flex items-center gap-4">
          <H2Subtitulo className="hover:underline cursor-pointer"> <Link to="/login" > Entrar </Link> </H2Subtitulo>
          <img src="" alt="Alterar tema" className="h-5 w-5" />
        </div>


        <div className="flex md:hidden items-center gap-4">
          <img src="" alt="Alterar tema" className="h-5 w-5" />
          <img src="" alt="Menu" className="h-6 w-6" />
        </div>
      </header>


      <main className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 flex-1 gap-8 md:gap-0  ">

        <div className="flex-1 flex flex-col gap-4 text-center md:text-left pb-40">
          <h1 className="font-[noticia-text] font-normal text-[40px] md:text-[90px]">SCENT – SATIONAL THERAPY</h1>
          <H2Subtitulo>
            Experimente relaxamento e foco de uma nova maneira com nosso difusor de 3 aromas
          </H2Subtitulo>
        </div>

        <div className="flex-1 flex justify-end items-start">
          <img src={homeImg} alt="Imagem inicial" className="h-[189px] md:h-[654px] max-w-[737px] w-full object-contain"/>
        </div>
      </main>


      <section className="bg-white w-full flex flex-col md:flex-row justify-around items-center py-8 px-6 gap-8 md:gap-0">
        
        <div className="flex flex-col items-center text-center max-w-[300px]">
          <img src="" alt="Alvo" className="h-12 mb-4" />
          <P>Promover bem-estar, foco e relaxamento unindo tecnologia e aromaterapia.</P>
        </div>


        <div className="flex flex-col items-center text-center max-w-[300px]">
          <img src="" alt="Saúde" className="h-12 mb-4" />
          <P>Para quem busca qualidade de vida, bem-estar, relaxamento e foco no dia a dia.</P>
        </div>


        <div className="flex flex-col items-center text-center max-w-[300px]">
          <img src="" alt="Neve" className="h-12 mb-4" />
          <P>Escolha, ative e controle seus aromas. Bem-estar inteligente, do seu jeito, no seu tempo.</P>
        </div>
      </section>
    </div>
  );
}
