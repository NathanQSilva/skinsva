import { Listbox } from "@headlessui/react";
import CardProduto from "Components/CardProduto";
import Divisor from "Components/Divisor";
import { useEffect, useState } from "react";
import produtos from '../data/produtos.json';

const options = [
    {id: 0, nome: "Novos"},
    {id: 1, nome: "Preço ▲"},
    {id: 2, nome: "Nome ▲"},
    {id: 3, nome: "Preço ▼"},
    {id: 4, nome: "Nome ▼"}
]

export function LojaPage() {
    const [ filterBy, setFilterBy ] = useState(options[0])
    const [lista, setLista] = useState(produtos)

    useEffect(() => {
        switch(filterBy.id) {
            case 1:
                setLista(produtos.sort((a, b) => (a.price < b.price) ? -1 : 1));
                break;

            case 2:
                setLista(produtos.sort((a, b) => (a.title < b.title) ? -1 : 1))
                break;
            case 3:
                setLista(produtos.sort((a, b) => (a.price > b.price) ? -1 : 1))
                break;
            case 4:
                setLista(produtos.sort((a, b) => (a.title > b.title) ? -1 : 1))
                break;
            case 0:
                setLista(produtos)
                break;
        }
    }, [filterBy])

    return (
        <div className="flex flex-col w-full justify-center items-center"> 
            <div className="w-1/6 flex justify-around items-top mt-4 flex-row">
                <div>
                    <Listbox value={filterBy} onChange={setFilterBy}>
                        <Listbox.Button  className="text-slate-200 w-28 py-2 bg-vavaCinza-100 rounded-lg font-valorant border-slate-900">{filterBy.nome}</Listbox.Button>
                        <Listbox.Options>
                            {options.map((option) => (
                                <Listbox.Option
                                    key={option.id}
                                    value={option}
                                    className="bg-vavaCinza-100 w-28 mt-1 text-slate-200"
                                >
                                    {option.nome}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Listbox>
                </div>
            </div>
            
            <Divisor />

            <div className="grid grid-cols-4">
            {lista.map((produto) => (
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
        </div>
    )
}