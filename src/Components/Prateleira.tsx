import CardProduto from "./CardProduto";
import produtos from "data/produtos.json"

export default function Prateleira() {
    return (
        <>
            <div className="flex items-center justify-around flex-col mb-10">
                <div className="flex flex-row mb-6">
                    <p className=" font-valorant text-3xl text-slate-100 mr-4">Novidades</p>
                    <p className=" font-valorant text-xl text-slate-100 border-l-2 border-vavaRed-100 pl-4">Ver mais+ </p>
                </div>
                <div className="flex items-center justify-around w-full ">
                    {produtos.map((produto) => (
                        produto.tags.includes("nova") ?
                            <CardProduto
                                chave={produto.id}
                                imagem={produto.photo}
                                nome={produto.title}
                                altText={produto.description}
                                preco={produto.price}
                            />
                            :
                            <></>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-around flex-col mb-10">
                <div className="flex flex-row mb-6">
                    <p className=" font-valorant text-3xl text-slate-100 mr-4">Destaques</p>
                    <p className=" font-valorant text-xl text-slate-100 border-l-2 border-vavaRed-100 pl-4">Ver mais+ </p>
                </div>
                <div className="flex items-center justify-around w-full ">
                    {produtos.map((produto) => (
                        produto.tags.includes("destaque") ?
                            <CardProduto
                                chave={produto.id}
                                imagem={produto.photo}
                                nome={produto.title}
                                altText={produto.description}
                                preco={produto.price}
                            />
                            :
                            <></>
                    ))}
                </div>
            </div>
        </>


    )
}