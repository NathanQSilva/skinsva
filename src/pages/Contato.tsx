import Divisor from "Components/Divisor";
import Formulario from "Components/Formulario";
import { Envelope, FacebookLogo, InstagramLogo, Megaphone, YoutubeLogo } from "phosphor-react";

export function ContatoPage() {
    return (
        <div className="flex flex-col items-center">
            <section className="pt-10 w-full flex flex-col items-center">
                <h2 className="font-valorant text-slate-100 text-4xl mb-6">Entre em contato</h2>

                <Formulario />

                <Divisor />
            </section>
            
            <section className="w-full flex flex-col items-center">
                <h2 className="font-valorant text-slate-100 text-4xl mb-6">Outros canais</h2>
                <div className="w-8/12 flex justify-between text-slate-100 text-xl font-valorant">
                    <div className="w-2/4 flex flex-col items-center gap-10">
                        <h3 className="text-3xl">nossas redes</h3>
                        <a href="#" className="flex gap-5 items-center justify-center">
                            <YoutubeLogo size={48} />
                            <p>youtube.com/skinsva</p>
                        </a>
                        <a href="#" className="flex gap-5 items-center justify-center">
                            <FacebookLogo size={48} />
                            <p>facebook.com/skinsva</p>
                        </a>
                        <a href="#" className="flex gap-5 items-center justify-center">
                            <InstagramLogo size={48} />
                            <p>instagram.com/skinsva</p>
                        </a>
                    </div>
                    <div className="w-2/4 flex flex-col items-center gap-10">
                        <h3 className="text-3xl">mande sue feedback</h3>
                        <a href="#" className="flex gap-5 items-center justify-center">
                            <Envelope size={48} />
                            <p>contato@skinsva.com.br</p>
                        </a>
                        <a href="#" className="flex gap-5 items-center justify-center">
                            <Megaphone size={48} />
                            <p>reclameaqui.com.br/skinsva</p>
                        </a>
                    </div>
                </div>
                <Divisor />
            </section>
        </div>
    )
}