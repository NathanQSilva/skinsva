import { ShoppingCartSimple, X } from 'phosphor-react'

type modalType = {
    nome: string;
    preco: number;
    sobre: string;
    foto: string;
    onClose: () => void;
}

export default function ModalProduto(props: modalType) {
    const {
        onClose,
        nome
    } = props
    return (
        <div className="absolute z-10 w-full h-full top-0 right-0 flex items-center justify-center bg-vava-transparente">
            <div className="bg-vavaCinza-100 w-3/4 h-3/4 rounded-3xl ">
                <div className='flex flex-row justify-between h-10percent'>
                    <div>
                        <h1 className='text-slate-200 font-valorant text-3xl ml-5 mt-5'>{nome}</h1>
                    </div>
                    <div >
                        <X onClick={onClose} className="cursor-pointer w-10 h-10 text-slate-200 mr-5 mt-4" />
                    </div>
                </div>

                <div className='h-90percent flex flex-row items-center'>
                    <div className='w-3/5 h-full justify-center items-center flex'>
                        <img className='bg-vavaAzul-100 px-6 py-28 rounded-2xl' src={props.foto} alt={props.sobre} />
                    </div>
                    <div className='h-full w-2/5 flex flex-col items-center justify-center gap-24'>
                        <h2 className='font-valorant text-slate-200 text-3xl'>
                            Sobre
                        </h2>
                        <p>
                            {props.sobre}
                        </p>
                        <div className='text-slate-200 flex flex-row w-2/4 justify-between'>
                            <h3 className='font-valorant text-2xl'> Valor {props.preco}.00 R$</h3>
                            <button>
                                <ShoppingCartSimple className='h-7 w-7' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}