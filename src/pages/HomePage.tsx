import CarouselComponent from "Components/Carousel";
import Divisor from "Components/Divisor";
import Prateleira from "Components/Prateleira";

export default function HomePage() {
  return (
    <>
      <section className="p-12 flex flex-col items-center">
        <div className='flex flex-col items-center'>
          <h2 className="text-slate-100 font-valorant text-3xl border-b-2 border-vavaRed-100 mb-5">
            Se liga nas novidades
          </h2>
          <CarouselComponent />
        </div>
        <Divisor />
      </section>
      
      <Prateleira busca="nova" title="Novidades" />
      <Prateleira busca="destaque" title="destaques" />
    </>
  );

}
