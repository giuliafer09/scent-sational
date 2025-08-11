import Header from "../components/Header";
import { H1, H2Subtitulo, H2SubtituloBtn, P } from "../components/Texto";

export function Jogo() {
    return (
        <div>
            <Header />

            <H1>JOGO</H1>

            <div>
                <section className="bg-white rounded-[46px] px-[20%]">
                    <H2Subtitulo>
                        No jogo R.E.M. o jogador irá em uma jornada por diferentes sonhos em cada fase. Cada uma representa um cenário onírico onde ele precisará passar por desafios, coletar itens e usar suas habilidades para passar de fase sme que o monstro o alcance, tornando sua missão ainda mais desafiadora. O objetivo é superar esses obstáculos para que no final consiga acordar dos sonhos, mostrando de forma lúdica a importância do autocuidado e da saúde mental.
                    </H2Subtitulo>
                </section>

                <section>
                    <img src="" alt="Tumb do Vídeo" />
                    <button> JOGAR </button>
                </section>
            </div>
        </div>
    )
}