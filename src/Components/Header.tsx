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
            <header className="bg-slate-900 flex flex-row items-center content-between center h-16">
                <div className="m-10 flex flex-row items-center">
                    <h1
                        className="font-valorant text-slate-300 text-5xl"
                    >
                        SkinsVa
                    </h1>
                    <h1
                        className="border-l-2 border-red-500 text-slate-300 text-xl"
                    >Sua loja de skins</h1>
                </div>
                <div className=" w-2/5 flex flex-row justify-around">
                    <ul className='text-slate-300 text-xl flex flex-row justify-around gap-10'>
                        {ListaMenu.map((item, index) => (
                            <li key={index}>
                                <Link to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
            </header>
            <body>
                <Outlet />
            </body>
        </>
    )
}