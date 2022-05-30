import CardProduto from "./CardProduto";
import produtos from "data/produtos.json"
import Divisor from "./Divisor";

type PrateleiraProps = {
    busca: string,
    title: string
}

export default function Prateleira(Props: PrateleiraProps) {
    return (
        <div className="flex items-center justify-around flex-col">
            <div className="flex flex-row mb-6">
                <p className=" font-valorant text-3xl text-slate-100 mr-4">{Props.title}</p>
                <p className=" font-valorant text-xl text-slate-100 border-l-2 border-vavaRed-100 pl-4">Ver +</p>
            </div>
            <div className="flex items-center justify-around w-full">
                {produtos.map((produto) => (
                    produto.tags.includes(Props.busca) &&
                    <>
                        <div key={produto.id}>
                            <CardProduto
                                chave={produto.id}
                                imagem={produto.photo}
                                nome={produto.title}
                                altText={produto.description}
                                preco={produto.price}
                            />
                        </div>
                    </>
                ))}
            </div>
            <Divisor />
        </div>
    )
}