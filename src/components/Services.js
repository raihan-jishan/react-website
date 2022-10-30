// imp image 
 import img1 from '../data/web.svg';
 import img2 from '../data/android.svg';
 import img6 from '../data/siber security.svg';
 import img4 from '../data/banking.svg';
 import img5 from '../data/ceo.svg';
 import img3 from '../data/article.svg';
 import img7 from '../data/world.svg';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Services() {
  return (
    <>
        <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        interval={1400}
      >
        <div className='serviceImage'>
          <img src={img1} alt="Item1" />
          <p className="titleConat">web devolopment</p>
        </div>
        <div className='serviceImage'>
          <img src={img2} alt="Item3" />
          <p className="titleConat">Android app devolopment</p>
        </div>

        <div className='serviceImage'>
          <img src={img3} alt="Item3" />
          <p className="titleConat">Machine Learning</p>
        </div>

        <div className='serviceImage'>
          <img src={img4} alt="Item3" />
          <p className="titleConat">Banking system</p>
        </div>

        <div className='serviceImage'>
          <img src={img5} alt="Item3" />
          <p className="titleConat">Seo</p>
        </div>

        <div className='serviceImage'>
          <img src={img6} alt="Item3" />
          <p className="titleConat">Ariticle writing</p>
        </div>

        
        <div className='serviceImage'>
          <img src={img7} alt="Item3" />
          <p className="titleConat">web 3 / block - chain</p>
        </div>
      </Carousel>
    </>
  );
}
