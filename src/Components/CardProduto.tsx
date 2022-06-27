import { useState } from "react"
import ModalProduto from "./ModalProduto"

type PropsType = {
    chave: Number,
    imagem: string,
    nome: string,
    altText: string,
    preco: number
}

export default function CardProduto(Props: PropsType) {
    const [isActive, setIsActive] = useState(false)

    function fecharModal() {
        console.log("entrei")
        setIsActive(false)
    }

    return (
        <div className="h-60 w-96 rounded-xl flex flex-col items-center justify-between bg-card-vava">
            <div className="flex justify-center items-center h-5/6">
                <button onClick={() => setIsActive(true) }  className="w-3/4">
                    <img src={Props.imagem} alt="" />
                </button>
                
            </div>
            
            <div className="flex justify-around bg-vavaCinza-100 w-full h-1/6 rounded-b-2xl items-center text-slate-100">
                <p className="font-ro" >{Props.nome}</p>
                <p className="font-valorant">{Props.preco}.00 R$</p>
            </div>

            {isActive && 
                <ModalProduto
                    nome={Props.nome}
                    sobre={Props.altText}
                    preco={Props.preco}
                    foto={Props.imagem}
                    onClose={() => fecharModal() }
                />
            }
        </div>
    )
}