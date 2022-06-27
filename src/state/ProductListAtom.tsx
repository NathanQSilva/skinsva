import { atom } from "recoil";
import listaProdutos from '../data/produtos.json'

export const ListOfProducts = atom({
    key: 'ListOfProducts',
    default: listaProdutos
})