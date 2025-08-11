import { Link } from 'react-router-dom';
import Header from "../components/Header";
import { H1, H2Subtitulo, H2SubtituloBtn, P } from "../components/Texto";

export function Manual() {
    return (
        <div className="bg-azul min-h-screen">
            <Header />

            <div className="flex flex-col items-center px-4 md:px-8">
                <H1 className="mt-6 text-center">Manual de Utilização do produto</H1>
                <H2Subtitulo className="mb-8 text-center">Passo a passo de utilização:</H2Subtitulo>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[980px]">
                    <div className="flex flex-col gap-4">
                        <section className="bg-white rounded-lg shadow p-4 flex flex-col gap-3 justify-center px-10">
                        <H2SubtituloBtn>1. Preparação do dispositivo:</H2SubtituloBtn>
                        <P>✓ Posicione o difusor sobre uma superfície estável;</P>
                        <P>✓ Conecte o cabo de energia na porta USB.</P>
                        </section>

                        <section className="bg-white rounded-lg shadow p-4 flex flex-col gap-3 justify-center px-10 md:h-[150px] md:mb-2">
                        <H2SubtituloBtn>3. Escolhendo o aroma:</H2SubtituloBtn>
                        <P>✓ No painel do dispositivo ou pelo aplicativo selecione o aroma que deseja, já programado ou personalizado.</P>
                        </section>

                        <section className="bg-white rounded-lg shadow p-4 flex flex-col gap-3 justify-center px-10">
                        <H2SubtituloBtn>5. Desligando o difusor:</H2SubtituloBtn>
                        <P>✓ Pressione o botão ⏻ por 2 segundos até o LED apagar.</P>
                        </section>

                        <section className="bg-white rounded-lg shadow p-4 flex flex-col gap-3 justify-center px-10">
                        <H2SubtituloBtn>Observações finais:</H2SubtituloBtn>
                        <P>✓ Uso recomendado em ambientes internos;</P>
                        <P>✓ Manter fora do alcance de crianças.</P>
                        </section>
                    </div>

                    <div className="flex flex-col gap-4">
                        <section className="bg-white rounded-lg shadow p-4 flex flex-col gap-3 justify-center px-10">
                            <H2SubtituloBtn>2. Ligando o difusor:</H2SubtituloBtn>
                            <P>✓ Pressione o botão ⏻ power do dispositivo;</P>
                            <P>✓ O LED acende, indicando que o difusor está ligado.</P>
                        </section>

                        <section className="bg-white rounded-lg shadow p-6 flex flex-col gap-3 justify-center px-10 ">
                            <H2SubtituloBtn>4. Ajuste de tempo e intensidade:</H2SubtituloBtn>
                            <P>✓ Para selecionar o tempo clique no painel a opção “TEMPO” faça sua escolha;</P>
                            <P className="ml-7">• 5,10,20 minutos ou contínuo.</P>
                            <P>✓ Para ajustar a intensidade clique no painel a opção “INTENSIDADE” e faça sua esccolha;</P>
                            <P className="ml-7">• 5,10,20 minutos ou contínuo.</P>
                        </section>

                        <section className="bg-white rounded-lg shadow p-4 flex flex-col gap-3 justify-center px-10">
                            <H2SubtituloBtn>Limpeza e manutenção</H2SubtituloBtn>
                            <P>✓ Limpeza dos recipientes a cada uso </P>
                            <P>✓ Verifique e reabasteça os frascos quando necessário</P>
                        </section>
                    </div>
                </div>

                <section className="bg-azulzinho rounded-[15px] h-[382px] md:h-[440px] w-full max-w-[980px] mt-8 mb-2 flex items-center justify-center">
                    <div className='flex flex-col md:flex-row justify-center items-start'>
                        <img src="" alt="Projeto Final" />
                        <img src="" alt="Vídeo" />
                    </div>
                </section>
            </div>
        </div>
    );
}
