import CarouselComponent from "Components/Carousel";
import Prateleira from "Components/Prateleira";

export default function HomePage() {
  return (
    <>
      <section className="p-12">
        <div className='flex flex-col items-center'>
          <h2 className="text-slate-100 font-valorant text-3xl border-b-2 border-vavaRed-100 mb-5">
            Se liga nas novidades
          </h2>
          <CarouselComponent />
        </div>
      </section>
    
        <Prateleira />
      
        
        
    </>
  );

}
