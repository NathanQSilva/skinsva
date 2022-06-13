import Filtro from "Components/Filtro";
import Produtos from "Components/Produtos";

export function LojaPage() {
    return (
        <div className="flex flex-col w-full border"> 
            <Filtro />
            <Produtos />
        </div>
    )
}