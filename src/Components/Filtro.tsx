import { Listbox } from "@headlessui/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { ListOfProducts, ListOrderBy } from "state/ProductListAtom";

const options = [
    {id: 0, nome: "Novos"},
    {id: 1, nome: "Preço"},
    {id: 2, nome: "Nome"}
]

const typeOptions = [
    {id: 0, nome: "Todos"},
    {id: 1, nome: "Ares"},
    {id: 2, nome: "Bulldog"},
    {id: 3, nome: "Sheriff"},
    {id: 4, nome: "Stinger"},
    {id: 5, nome: "Vandal"},
    {id: 6, nome: "Classic"},
    {id: 7, nome: "Marshal"},
    {id: 8, nome: "Phantom"},
    {id: 9, nome: "Spectre"},
    {id: 10, nome: "Frenzy"},
    {id: 11, nome: "Knife"},
    {id: 12, nome: "Odin"},
    {id: 13, nome: "Judge"},
    {id: 14, nome: "Ghost"},
    {id: 15, nome: "Guardian"},
    {id: 16, nome: "Operator"},
]

export default function Filtro() {
    const [ filterBy, setFilterBy ] = useState(options[0])
    const [ filterTypeBy, setFilterTypeBy ] = useState(typeOptions[0])
    const [ novaLista, setNovaLista ] = useRecoilState(ListOfProducts)  



    return (
        <div className="border w-1/6 flex justify-around items-top mt-4 flex-row">
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
            <div>
                <Listbox value={filterTypeBy} onChange={setFilterTypeBy}>
                    <Listbox.Button  className="text-slate-200 w-28 py-2 bg-vavaCinza-100 rounded-lg font-valorant border-slate-900">{filterTypeBy.nome}</Listbox.Button>
                    <Listbox.Options>
                        {typeOptions.map((typeOption) => (
                            <Listbox.Option
                                key={typeOption.id}
                                value={typeOption}
                                className="bg-vavaCinza-100 w-28 mt-1 text-slate-200 cursor-pointer"
                            >
                                {typeOption.nome}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>
        </div>
    )
}