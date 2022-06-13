import produtos from "data/produtos.json"
import CardProduto from "./CardProduto"

export default function Produtos() {
    return (
        <div className="grid-flow-col auto-">
            {produtos.map((produto) => (
                        <div key={produto.id}>
                            <CardProduto
                                chave={produto.id}
                                imagem={produto.photo}
                                nome={produto.title}
                                altText={produto.description}
                                preco={produto.price}
                            />
                        </div>
                ))}
        </div>
    )
}