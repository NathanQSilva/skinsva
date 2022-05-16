import CarouselComponent from "Components/Carousel";

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
      <section className="flex flex-col items-center content-center ">
        <div className=" flex flex-row items-center content-center my-8">
          <h1 className=" text-slate-300 text-2xl pr-10 border-r-4 border-red-500">Mais Vendidos</h1>
          <h2 className="text-slate-300 text-xl ml-10 "> Ver mais...</h2>
        </div>
        <div className="flex flex-row content-between">
          <div className="bg-slate-900 rounded-md flex flex-col items-center content-center">
            <h2> Skin1 </h2>
            <img src="https://static1-br.millenium.gg/articles/1/88/81/@/112982-vandal-glitchpop-no-valorant-foto-vgraphs-amp_main_img-1.png" alt="teste" ></img>
          </div>
          <div>
            <img src="https://static1-br.millenium.gg/articles/1/88/81/@/112982-vandal-glitchpop-no-valorant-foto-vgraphs-amp_main_img-1.png" alt="teste" ></img>
          </div>
          <div>
            <img src="https://static1-br.millenium.gg/articles/1/88/81/@/112982-vandal-glitchpop-no-valorant-foto-vgraphs-amp_main_img-1.png" alt="teste" ></img>
          </div>
        </div>

      </section>
      <section>
        <h1>Mais Vendidos</h1>
        <p>|</p>
        <h2>Ver mais...</h2>
      </section>
    </>
  );

}
