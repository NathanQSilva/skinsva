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
    }, {
        label: 'Login',
        to: '/login'
    }]

    return (
        <>
            <header className="flex flex-row justify-between items-center bg-vavaCinza-100">
                <div className="h-16 flex flex-row items-center pl-12">
                    <h1 className="font-valorant text-slate-100 text-4xl pr-8">
                        SkinsVa
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
                    </ul>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                
            </footer>
        </>
    )
}