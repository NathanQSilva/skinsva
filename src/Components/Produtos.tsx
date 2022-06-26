import { useRecoilValue } from "recoil"
import { ListOfProducts } from "state/ProductListAtom"
import CardProduto from "./CardProduto"

export default function Produtos() {
    const produtos = useRecoilValue(ListOfProducts)

    return (
        <div className="grid grid-cols-4">
            {produtos.map((produto) => (
                <div
                    key={produto.id}
                    className="flex items-center justify-center m-9"
                >
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