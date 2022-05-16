import promos from 'data/carousel.json'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default function CarouselComponent() {
    return (
        <div className='w-4/6'>
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
            >
                {promos.map((promo) => (
                    <div>
                        <img src={promo.photo} alt={promo.description} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}