import Header from "../components/Header";
import { H1, H2Subtitulo, H2SubtituloBtn, P } from "../components/Texto";

export function Produtos() {
    return(
        <div>
            <Header />

            <div className="rounded-[15px] border-1">
                <img src="" alt="arduino" />
                <img src="" alt="kit arduino" />
                <img src="" alt="lcd" />
                <img src="" alt="LED" />

                <div className=" mt-8 mb-3 sm:px-12 flex gap-2 ">
                    <H2SubtituloBtn>Valor Total:</H2SubtituloBtn> 
                    <H2Subtitulo>R$1000</H2Subtitulo>
                </div>

                <img src="" alt="Projeto final" />
            </div>
        </div>
    )
}