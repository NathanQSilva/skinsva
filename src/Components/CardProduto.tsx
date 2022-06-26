import { HeartStraight } from "phosphor-react"

type PropsType = {
    chave: Number,
    imagem: string,
    nome: string,
    altText: string,
    preco: string
}

export default function CardProduto(Props: PropsType) {
    return (
        <div className="h-60 w-96 rounded-xl flex flex-col items-center justify-between relative bg-card-vava">
            <div className="flex justify-center items-center h-5/6">
                <img className="w-3/4" src={Props.imagem} alt="" />
            </div>
            
            <div className="flex justify-around bg-vavaCinza-100 w-full h-1/6 rounded-b-2xl items-center text-slate-100">
                <p className="font-ro" >{Props.nome}</p>
                <p className="font-valorant">{Props.preco}</p>
            </div>
        </div>
    )
}