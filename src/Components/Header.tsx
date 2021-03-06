import { FacebookLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export function Header() {
    const ListaMenu = [{
        label: 'Loja',
        to: '/loja'
    }, {
        label: 'Carrinho',
        to: '/carrinho'
    }, {
        label: 'Contato',
        to: '/contato'
    }]

    const [isLogged, setIsLogged] = useState(false)

    return (
        <>
            <header className="flex flex-row justify-between items-center bg-vavaCinza-100">
                <div className="h-16 flex flex-row items-center pl-12">
                    <h1 className="font-valorant text-slate-100 text-4xl pr-8">
                        <Link to="/">SkinsVa</Link>
                        
                    </h1>
                    <h1 className="font-valorant text-slate-100 text-1xl pl-8 border-l-2 border-vavaRed-100">
                        Sua loja de skins
                    </h1>
                </div>
                <div className="h-16 flex  items-center">
                    <ul className="flex flex-row">
                        {ListaMenu.map((item, index) => (
                            <li key={index}>
                                <Link className="text-2xl text-slate-100 font-valorant mx-6 pb-1 transition-all duration-100 hover:border-b-2 border-vavaRed-100" to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            {isLogged ? (
                                <Link className="text-2xl text-slate-100 font-valorant mx-6 pb-1 transition-all duration-100 hover:border-b-2 border-vavaRed-100" to="/perfil">
                                    Perfil
                                </Link>
                            ) : (
                                <Link className="text-2xl text-slate-100 font-valorant mx-6 pb-1 transition-all duration-100 hover:border-b-2 border-vavaRed-100" to="/login">
                                    Login
                                </Link>
                            )}
                            
                        </li>
                    </ul>
                </div>
            </header>

            <main>
                <Outlet />
            </main>
            
            <footer>
                <div className=''>
                    <section className='bg-vavaCinza-100 flex flex-row justify-around text-slate-100 font-light'>
                        <div className='w-3/12 flex items-center flex-col'>
                            <p className='pb-2'>DEPARTAMENTOS</p>
                            <a href="#" className='text-sm font-light'>SKINS</a>
                            <a href="#" className='text-sm font-light'>PROMO????ES</a>
                            <a href="#" className='text-sm font-light'>NOVIDADES</a>
                            <a href="#" className='text-sm font-light'>MAIS VENDIDAS</a>
                            <a href="#" className='text-sm font-light'>VEM POR AI</a>
                        </div>
                        <div className='w-3/12 flex items-center flex-col'>
                            <p className='pb-2'>INSTITUCIONAIS</p>
                            <a href="#" className='text-sm font-light'>SOBRE N??S</a>
                            <a href="#" className='text-sm font-light'>POLITICAS</a>
                            <a href="#" className='text-sm font-light'>TRABALHE CONOSCO</a>
                            <a href="#" className='text-sm font-light'>MAPA DO SITE</a>
                        </div>
                        <div className='w-3/12 flex items-center flex-col'>
                            <p className='pb-2'>CONTATO</p>
                            <a href="#" className='text-sm font-light'>CENTRAL/SAC - (XX) XXXX-XXXX</a>
                            <a href="#" className='text-sm font-light'>EMAIL - CONTATO@SKINSVA.COM.BR</a>
                            <a href="#" className='text-sm font-light'>ATENDIMENTO DAS 08:00 ??S 20:00</a>
                            <a href="#" className='text-sm font-light'>SEGUNDA A S??BADO</a>
                            <a href="#" className='text-sm font-light'>(EXCETO DOMINGO E FERIADOS)</a>
                        </div>
                        <div className='w-3/12 flex items-center flex-col'>
                            <p className='pb-2'>MINHA CONTA</p>
                            <a href="#" className='text-sm font-light'>MEUS PEDIDOS</a>
                            <a href="#" className='text-sm font-light'>FAVORITOS</a>
                        </div>
                    </section>
                </div>
                <div className='flex items-center justify-center h-14 gap-6'>
                    <button>
                        <FacebookLogo size={48} color="#F2F2F2" />
                    </button>
                    <button>
                        <InstagramLogo size={48} color="#F2F2F2" />
                    </button>
                    <button>
                        <YoutubeLogo size={48} color="#F2F2F2" />
                    </button>
                </div>
                <div className="bg-vavaCinza-100 font-normal flex items-center justify-center flex-col p-2">
                    <p className="text-slate-100 text-xs">
                        SKINSVA ?? uma marca fict??cia de ALUNOS UTFPR | RAs: a2326809 e a2164485 | Todos os direitos reservados. Os pre??os anunciados neste site s??o meramente imagin??rios.
                    </p>
                    <p className="text-slate-100 text-xs">
                        O skinsva! n??o ?? respons??vel por mal uso deste projeto. As fotos contidas nesta p??gina s??o meramente ilustrativas do produto retiradas de valorant.fandom.com Este site n??o trabalha com criptografia SSL.
                    </p>
                </div>
            </footer>
        </>
    )
}