import Divisor from "Components/Divisor";
import Filtro from "Components/Filtro";
import Produtos from "Components/Produtos";

export function LojaPage() {
    return (
        <div className="flex flex-col w-full justify-center items-center"> 
            <Filtro />
            <Produtos />
            <Divisor />
        </div>
    )
}