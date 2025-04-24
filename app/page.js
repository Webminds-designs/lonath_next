import Header from './home/header.js'
import Hero from './home/hero.js'
import Pixels from './home/pixels.js'
import Precision from './home/precision.js'
import Designs from './home/designs.js'
// import Carousel from './home/carousel.js'
// import Bgimage from './home/bgimage.js'
// import Footer from './home/footer.js'

export default function Home() {
  return (
    <div id='main' className='flex flex-col items-center'>
      <div className='bg-stone-300 w-full'>
        <Header />
      </div>
      <div className='bg-stone-300 w-full'>
        <Hero />
      </div>
      <div className='bg-black w-full'>
        <Pixels />
      </div>
      <div className='bg-black w-full'>
        <Precision />
      </div>
      <div className='bg-stone-300 w-full'>
        <Designs />
      </div>
      {/* <div className='bg-black w-full'>
        <Carousel />
      </div> */}
      {/* <div style={{ backgroundImage: `url(/images/launching.png)` }} className='bg-cover bg-center w-full h-screen'>
        <Bgimage />
      </div> */}
      {/* <div className='bg-stone-300 w-full'>
        <Footer />
      </div> */}
    </div>
  );
}
