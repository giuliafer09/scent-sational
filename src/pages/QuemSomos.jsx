import Header from "../components/Header";
import { H1, H2Subtitulo, H2SubtituloBtn, P } from "../components/Texto";

export function QuemSomos() {
    return(
        <div>
            <Header />

            <div>
                <H1>Quem somos?</H1>

                <section className="flex flex-start gap-5">
                    <img src="" alt="Foto da Bianca" />
                    <H2>Bianca</H2>

                    <img src="" alt="Foto da Giulia" />
                    <H2>Giulia</H2>

                    <img src="" alt="Foto da Sara" />
                    <H2>Sara</H2>

                    <img src="" alt="Foto da Victoria" />
                    <H2>Victoria</H2>
                </section>
            </div>

            <div>
                <div className="bg-white">

                    <h1>SCENT-SATIONAL</h1>
                    <h2> THERAPY</h2>

                    <H2Subtitulo>scent-sational@gmail.com</H2Subtitulo>
                </div>
                <div className="bg-azulzinho">
                    <section>
                        <input type="name" placeholder="Nome" />
                        <input type="last-name" placeholder="Sobrenome" />
                    </section>
                    <div className="flex items-center gap-3 border border-gray-300 rounded-[15px] h-[56px] md:h-[82px] w-[310px] md:w-[547px] px-4">
                        <img src="" alt="icone email" className="h-5 w-5" />
                        <input type="email" placeholder="Digite seu e-mail" className="flex-1 outline-none text-base"/>
                    </div>
                    <input type="text" placeholder="Assunto" />

                    <button>Enviar</button>
                </div>
            </div>
        </div>
    )    
}